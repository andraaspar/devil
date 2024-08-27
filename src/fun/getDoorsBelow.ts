import { ITile } from '../model/ITile'

export function getDoorsBelow(tiles: ITile[][]) {
	const v = tiles.length - 1
	return tiles[v]
		.map((t, u) => (t.doorBelow ? [u, v] : null))
		.filter((x) => x != null) as [number, number][]
}
