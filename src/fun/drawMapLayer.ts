import { DATA } from "../model/DATA"
import { ISliceTile } from "../model/ISliceTile"
import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"
import { SCREEN_H } from "../model/SCREEN_H"
import { SCREEN_W } from "../model/SCREEN_W"
import { drawTileL } from "./drawTileL"
import { drawTileR } from "./drawTileR"
import { drawWallTL } from "./drawWallTL"
import { drawWallTR } from "./drawWallTR"
import { resetColors } from "./resetColors"
import { swapColors } from "./swapColors"

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
					// let tl=map[t.y]?.[t.x-1]
					// ,tr=map[t.y-1]?.[t.x]
					if (t.tile.wallLeft) drawWallTL(x, y, 0, 32)
					if (t.tile.wallAbove) drawWallTR(x, y, 0, 32)
				} else if (layer === 1) {
					let b = DATA.map[t.y + 1]?.[t.x + 1]
					// ,bl=b&&map[t.y+1]?.[t.x]==='#'
					// ,br=b&&map[t.y]?.[t.x+1]==='#'
					// drawtilel(x,y,0,bl?32:0)
					// drawtiler(x,y,0,br?64:0)
					// if(b&&map[t.y+1]?.[t.x]==='#')
					if (b) {
						if (b.wallLeft)
							swapColors({ 1: 15, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6 })
						drawTileL(x, y, 0, 16)
						resetColors([1, 2, 3, 4, 5, 6, 7])
						// if(b&&map[t.y]?.[t.x+1]==='#')
						if (b.wallAbove)
							swapColors({ 1: 15, 2: 14, 3: 13, 4: 12, 5: 11, 6: 10, 7: 9 })
						drawTileR(x, y, 0, 16)
						resetColors([1, 2, 3, 4, 5, 6, 7])
					} else {
						drawTileL(x, y, 0, 16)
						drawTileR(x, y, 0, 16)
					}
				}
			}
		}
	}
}
