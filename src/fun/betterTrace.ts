import { toString } from './toString'

export function betterTrace(...r: any[]) {
	return trace(r.map(toString).join(' '), 12)
}
