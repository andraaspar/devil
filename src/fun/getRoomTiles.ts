import { GRID_ABOVE_TILES } from '../model/GRID_ABOVE_TILES'
import { GRID_BELOW_TILES } from '../model/GRID_BELOW_TILES'
import { GRID_LEFT_TILES } from '../model/GRID_LEFT_TILES'
import { GRID_RIGHT_TILES } from '../model/GRID_RIGHT_TILES'
import { IRect } from '../model/IRect'
import { ITile } from '../model/ITile'
import { WALL_ABOVE_TILES } from '../model/WALL_ABOVE_TILES'
import { WALL_BELOW_TILES } from '../model/WALL_BELOW_TILES'
import { WALL_LEFT_TILES } from '../model/WALL_LEFT_TILES'
import { WALL_RIGHT_TILES } from '../model/WALL_RIGHT_TILES'

export function getRoomTiles(rect: IRect) {
	let r = []
	for (let v = rect.t; v < rect.b; v++) {
		let row: ITile[] = []
		r.push(row)
		for (let u = rect.t; v < rect.b; v++) {
			let t = mget(u, v)
			row.push({
				u,
				v,
				isVoid: t === 0,
				isStart: t === 73,
				wallAbove: WALL_ABOVE_TILES.has(t),
				wallBelow: WALL_BELOW_TILES.has(t),
				wallLeft: WALL_LEFT_TILES.has(t),
				wallRight: WALL_RIGHT_TILES.has(t),
				doorAbove: t === 69,
				doorBelow: t === 71,
				doorLeft: t === 72,
				doorRight: t === 70,
				gridAbove: GRID_ABOVE_TILES.has(t),
				gridBelow: GRID_BELOW_TILES.has(t),
				gridLeft: GRID_LEFT_TILES.has(t),
				gridRight: GRID_RIGHT_TILES.has(t),
			})
		}
	}
	return r
}
