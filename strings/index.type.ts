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
