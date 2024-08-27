import { ITile } from '../model/ITile'

export function getDoorsRight(tiles: ITile[][]) {
	const u = tiles[0].length - 1
	return tiles
		.map((r) => r[u])
		.map((t, v) => (t.doorRight ? [u, v] : null))
		.filter((x) => x != null) as [number, number][]
}
