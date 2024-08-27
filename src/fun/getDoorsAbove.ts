import { ITile } from '../model/ITile'

export function getDoorsAbove(tiles: ITile[][]) {
	return tiles[0]
		.map((t, u) => (t.doorAbove ? [u, 0] : null))
		.filter((x) => x != null) as [number, number][]
}
