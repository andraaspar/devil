export function toString(x: unknown) {
	return typeof x === 'string' ? x : JSON.stringify(x)
}
