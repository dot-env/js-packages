type ToOptions = {
    label?: string;
    retries?: number;
    delayMs?: number;
    logger?: (msg: string, err: unknown) => void; // optional logger
    errorParser?: (err: unknown) => Error;
  };
  
  export async function to<T>(
    promiseFactory: () => Promise<T>,
    options: ToOptions = {}
  ): Promise<[Error | null, T | null]> {
    const {
      label = '',
      retries = 0,
      delayMs = 100,
      logger,
      errorParser = (err) => (err instanceof Error ? err : new Error(String(err))),
    } = options;
  
    let attempt = 0;
  
    while (attempt <= retries) {
      try {
        const result = await promiseFactory();
        return [null, result];
      } catch (err) {
        const parsedError = errorParser(err);
        if (attempt < retries) {
          if (logger) logger(`[Retry ${attempt + 1}/${retries}] ${label}`, parsedError);
          await new Promise(res => setTimeout(res, delayMs));
        } else {
          if (logger) logger(`[Error] ${label}`, parsedError);
          return [parsedError, null];
        }
      }
      attempt++;
    }
  
    return [new Error('Unknown failure'), null];
  }
  