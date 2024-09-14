import { DATA } from "../model/DATA"
import { drawMapLayer } from "./drawMapLayer"
import { getMapSlice } from "./getMapSlice"

export function drawMap() {
	let smap = getMapSlice(DATA.player.x, DATA.player.y, 4),
		nrow = smap.length
	drawMapLayer(smap, nrow, 1)
	drawMapLayer(smap, nrow, 0)
}
