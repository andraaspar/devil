import { ITile } from '../model/ITile'

export function getDoorsLeft(tiles: ITile[][]) {
	return tiles
		.map((r) => r[0])
		.map((t, v) => (t.doorLeft ? [0, v] : null))
		.filter((x) => x != null) as [number, number][]
}
