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


declare global {
  interface String {
    /**
     * Expands tab characters (`\t`) in the string to spaces.
     * The default tab size is 4 spaces.
     * @param tabSize Number of spaces to expand each tab into (default is 4).
     */
    expandtabs(tabSize?: number): string;

    /**
     * Formats a string using placeholders like `{}` similar to Python's `.format()`.
     * @param args Values to replace placeholders.
     */
    format(...args: any[]): string;

    /**
     * Formats a string using a mapping object for placeholders.
     * @param mapping An object where keys are placeholders and values are replacements.
     */
    format_map(mapping: Record<string, any>): string;

    /**
     * Returns `true` if all characters in the string are decimals (0-9).
     */
    isdecimal(): boolean;

    /**
     * Returns `true` if the string is a valid identifier (e.g., a variable name in Python).
     */
    isidentifier(): boolean;

    /**
     * Returns `true` if all characters in the string are numeric.
     * Unlike `isdecimal()`, this includes other numeric characters such as fractions and subscripts.
     */
    isnumeric(): boolean;

    /**
     * Returns `true` if all characters in the string are printable.
     */
    isprintable(): boolean;

    /**
     * Creates a translation table for use with `translate()`.
     * @param from A string of characters to replace.
     * @param to A string of characters to replace them with.
     */
    maketrans(from: string, to: string): Map<string, string>;

    /**
     * Splits the string into three parts: before, the separator, and after.
     * @param separator The string to partition around.
     */
    partition(separator: string): [string, string, string];

    /**
     * Splits the string into three parts from the right: before, the separator, and after.
     * @param separator The string to partition around.
     */
    rpartition(separator: string): [string, string, string];

    /**
     * Splits the string at line breaks (`\n` or `\r\n`).
     * Similar to `split()` but preserves line boundaries.
     */
    splitlines(): string[];

    /**
     * Swaps the case of each character in the string.
     * Lowercase becomes uppercase and vice versa.
     */
    swapcase(): string;

    /**
     * Translates characters in the string using a mapping table.
     * @param table A map of character replacements.
     */
    translate(table: Map<string, string>): string;

    /**
     * Pads the string with leading zeros until it reaches the specified width.
     * @param width The total length of the resulting string.
     */
    zfill(width: number): string;

    /**
     * Returns a string with the first character of each word converted to uppercase and the rest to lowercase.
     */
    title(): string;
  }
}
