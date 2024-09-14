import { GRID_ABOVE_TILES } from "../model/GRID_ABOVE_TILES"
import { GRID_BELOW_TILES } from "../model/GRID_BELOW_TILES"
import { GRID_LEFT_TILES } from "../model/GRID_LEFT_TILES"
import { GRID_RIGHT_TILES } from "../model/GRID_RIGHT_TILES"
import { IRect } from "../model/IRect"
import { ITile } from "../model/ITile"
import { WALL_ABOVE_TILES } from "../model/WALL_ABOVE_TILES"
import { WALL_BELOW_TILES } from "../model/WALL_BELOW_TILES"
import { WALL_LEFT_TILES } from "../model/WALL_LEFT_TILES"
import { WALL_RIGHT_TILES } from "../model/WALL_RIGHT_TILES"

export function getRoomTiles(rect: IRect) {
	let r = []
	for (let v = rect.t; v < rect.b; v++) {
		let row: (ITile | undefined)[] = []
		r.push(row)
		for (let u = rect.l; u < rect.r; u++) {
			let t = mget(u, v)
			row.push(
				t === 0
					? undefined
					: {
							u,
							v,
							isStart: t === 25,
							wallAbove: WALL_ABOVE_TILES.has(t),
							wallBelow: WALL_BELOW_TILES.has(t),
							wallLeft: WALL_LEFT_TILES.has(t),
							wallRight: WALL_RIGHT_TILES.has(t),
							doorAbove: t === 21,
							doorBelow: t === 23,
							doorLeft: t === 24,
							doorRight: t === 22,
							gridAbove: GRID_ABOVE_TILES.has(t),
							gridBelow: GRID_BELOW_TILES.has(t),
							gridLeft: GRID_LEFT_TILES.has(t),
							gridRight: GRID_RIGHT_TILES.has(t),
					  },
			)
		}
	}
	return r
}
