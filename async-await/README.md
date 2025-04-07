
# @dotenvc/async-await

> A minimal utility for Go-style error handling in TypeScript with support for retries, custom errors, and optional logging.

## ✨ Features

- Simplifies `async/await` code by returning `[error, data]` tuples
- Optional retry logic with configurable delay
- Optional labeling for tracing/logging
- Optional custom error parser
- Fully silent by default — no logs unless you opt in

## 📦 Installation

```bash
npm install @dotenvc/async-await
# or
yarn add @dotenvc/async-await
```

## 🚀 Usage

```ts
import { to } from '@dotenvc/async-await';

const [err, data] = await to(() => fetch('/api/user').then(res => res.json()));

if (err) {
  console.error('Something went wrong:', err.message);
  return;
}

console.log('User data:', data);
```

## 🔧 Advanced Usage

```ts
const [err, result] = await to(() => fetch('/api/user').then(r => r.json()), {
  label: 'FetchUser',
  retries: 2,
  delayMs: 500,
  logger: (msg, err) => console.warn(msg, err),
  errorParser: (e) => new Error(`[CustomError] ${String(e)}`),
});
```

## 📘 API

### `to<T>(promiseFactory: () => Promise<T>, options?: ToOptions): Promise<[Error | null, T | null]>`

Wraps an async operation and returns a tuple `[error, data]`.

#### Parameters

| Name            | Type                              | Description                                   |
|-----------------|-----------------------------------|-----------------------------------------------|
| `promiseFactory`| `() => Promise<T>`                | A function returning the async operation.     |
| `options`       | `ToOptions` (optional)            | Extra config options.                         |

### `ToOptions` type

```ts
type ToOptions = {
  label?: string; // Optional name for tracing/logging
  retries?: number; // Number of retry attempts on failure (default: 0)
  delayMs?: number; // Delay between retries in ms (default: 100)
  logger?: (msg: string, err: unknown) => void; // Optional error logger
  errorParser?: (err: unknown) => Error; // Optional error transformer
};
```

## 🛡 Best Practices

- Use in API calls, background tasks, or anywhere error handling is needed.
- Great for backend logic where you want robust error control without cluttering your code with `try/catch`.
- Use with frameworks like Express, Next.js, or NestJS for consistent async error patterns.

## 🧪 Example in Express

```ts
app.get('/profile', async (req, res) => {
  const [err, user] = await to(() => db.findUser(req.query.email));

  if (err) {
    return res.status(500).json({ error: err.message });
  }

  res.json(user);
});
```

## 📄 License

MIT — built with ❤️ by [@dotenv](https://github.com/dot-env)
