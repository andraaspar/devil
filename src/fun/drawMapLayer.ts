import { ISliceTile } from "../model/ISliceTile"
import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"
import { SCREEN_H } from "../model/SCREEN_H"
import { SCREEN_W } from "../model/SCREEN_W"
import { drawTileL } from "./drawTileL"
import { drawTileR } from "./drawTileR"
import { drawWallTL } from "./drawWallTL"
import { drawWallTR } from "./drawWallTR"

//  t
// l.r
//  b
const TL = { 1: 15, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6 }
const TR = { 1: 15, 2: 14, 3: 13, 4: 12, 5: 11, 6: 10, 7: 9 }
const RESET = [1, 2, 3, 4, 5, 6, 7]

export function drawMapLayer(
	smap: (ISliceTile | undefined)[][],
	nrow: number,
	layer: number,
) {
	for (let j = 0; j < nrow; j++) {
		let row = smap[j],
			ncol = row.length,
			u = -ncol / 2,
			v = -nrow / 2
		for (let i = 0; i < ncol; i++) {
			let t = row[i],
				x = SCREEN_W / 2 + (u + i + 0.5) * ISO_TILE_W,
				y = SCREEN_H / 2 + ((v + j + 0.5) * ISO_TILE_H) / 2
			if (t) {
				if (layer === 0) {
					if (t.tile.wallLeft) drawWallTL(x, y, 0, 48, 32)
					if (t.tile.wallAbove) drawWallTR(x, y, 0, 48, 32)
				} else if (layer === 1) {
					// let br = DATA.map[t.y + 1]?.[t.x + 1],
					// 	b = DATA.map[t.y + 1]?.[t.x],
					// 	r = DATA.map[t.y]?.[t.x + 1]
					// if (br?.wallLeft) swapColors(TL)
					// else if (b?.wallAbove) swapColors(TR)
					// else resetColors(RESET)
					drawTileL(x, y, 0, 16, 32)
					// if (br?.wallAbove) swapColors(TR)
					// else if (r?.wallLeft) swapColors(TL)
					// else resetColors(RESET)
					drawTileR(x, y, 0, 16, 32)
				}
			}
		}
	}
	// resetColors(RESET)
}
