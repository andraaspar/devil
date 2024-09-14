import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"

export function drawTileL(
	x: number,
	y: number,
	u: number,
	v: number,
	size: number,
) {
	ttri(
		x - ISO_TILE_W / 2,
		y,
		x,
		y - ISO_TILE_H / 2,
		x,
		y + ISO_TILE_H / 2,
		u,
		v,
		u + size,
		v,
		u,
		v + size,
		0,
		-1,
	)
}
