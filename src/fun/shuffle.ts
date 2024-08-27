export function shuffle<T>(a: T[]): T[] {
	let r: T[] = []
	for (let i = 0, n = a.length; i < n; i++) {
		r.splice(Math.trunc(Math.random() * r.length + 1), 0, a[i])
	}
	return r
}
