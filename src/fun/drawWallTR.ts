import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"
import { ISO_WALL_H } from "../model/ISO_WALL_H"
import { resetColors } from "./resetColors"
import { swapColors } from "./swapColors"

export function drawWallTR(
	x: number,
	y: number,
	u: number,
	v: number,
	size: number,
) {
	swapColors({ 1: 15, 2: 14, 3: 13, 4: 12, 5: 11, 6: 10, 7: 9 })
	ttri(
		x,
		y - ISO_TILE_H / 2 - ISO_WALL_H,
		x + ISO_TILE_W / 2,
		y - ISO_WALL_H,
		x,
		y - ISO_TILE_H / 2,
		u,
		v,
		u + size,
		v,
		u,
		v + size,
		0,
		-1,
	)
	ttri(
		x + ISO_TILE_W / 2,
		y,
		x + ISO_TILE_W / 2,
		y - ISO_WALL_H,
		x,
		y - ISO_TILE_H / 2,
		u + size,
		v + size,
		u + size,
		v,
		u,
		v + size,
		0,
		-1,
	)
	resetColors([1, 2, 3, 4, 5, 6, 7])
}
