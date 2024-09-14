import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"

export function drawTileR(
	x: number,
	y: number,
	u: number,
	v: number,
	size: number,
) {
	ttri(
		x + ISO_TILE_W / 2,
		y,
		x,
		y - ISO_TILE_H / 2,
		x,
		y + ISO_TILE_H / 2,
		u + size,
		v + size,
		u + size,
		v,
		u,
		v + size,
		0,
		-1,
	)
}
