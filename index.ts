String.prototype.expandtabs = function (tabSize: number = 4): string {
  return this.replace(/\t/g, (match) =>
    //@ts-expect-error
    " ".repeat(tabSize - ((match.index ?? 0) % tabSize))
  );
};

String.prototype.format = function (...args: any[]): string {
  return this.replace(/\{(\d+)\}/g, (match, index) =>
    args[index] !== undefined ? String(args[index]) : match
  );
};

String.prototype.format_map = function (mapping: Record<string, any>): string {
  return this.replace(/\{(\w+)\}/g, (match, key) =>
    mapping[key] !== undefined ? String(mapping[key]) : match
  );
};

String.prototype.isdecimal = function (): boolean {
  return /^\d+$/.test(this.valueOf());
};

String.prototype.isidentifier = function (): boolean {
  return /^[_a-zA-Z][_a-zA-Z0-9]*$/.test(this.valueOf());
};

String.prototype.isnumeric = function (): boolean {
  return /^\d+(\.\d+)?$/.test(this.valueOf());
};

String.prototype.isprintable = function (): boolean {
  return /^[\x20-\x7E]*$/.test(this.valueOf());
};

String.prototype.maketrans = function (
  from: string,
  to: string
): Map<string, string> {
  const map = new Map<string, string>();
  for (let i = 0; i < from.length; i++) {
    map.set(from[i] ?? "", to[i] ?? "");
  }
  return map;
};

String.prototype.partition = function (
  separator: string
): [string, string, string] {
  const index = this.indexOf(separator);
  return index === -1
    ? [this.valueOf(), "", ""]
    : [
        this.substring(0, index),
        separator,
        this.substring(index + separator.length),
      ];
};

String.prototype.rpartition = function (
  separator: string
): [string, string, string] {
  const index = this.lastIndexOf(separator);
  return index === -1
    ? ["", "", this.valueOf()]
    : [
        this.substring(0, index),
        separator,
        this.substring(index + separator.length),
      ];
};

String.prototype.splitlines = function (): string[] {
  return this.split(/\r?\n/);
};

String.prototype.swapcase = function (): string {
  return this.replace(/./g, (char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );
};

String.prototype.translate = function (table: Map<string, string>): string {
  return this.replace(/./g, (char) => table.get(char) ?? char);
};

String.prototype.zfill = function (width: number): string {
  return this.length >= width
    ? this.valueOf()
    : "0".repeat(width - this.length) + this;
};

String.prototype.title = function (): string {
  return this.toLowerCase().replace(/\b(\w)/g, (match, firstChar) =>
    firstChar.toUpperCase()
  );
};
