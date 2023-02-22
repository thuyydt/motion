export type CSSVariable = `--${string}`

/**
 * Returns true if the provided key is a CSS variable
 */
export function isCSSVariable(key?: string): key is CSSVariable {
    return typeof key === "string" && key.startsWith("--")
}
