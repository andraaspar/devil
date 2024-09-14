import { ISO_TILE_H } from "../model/ISO_TILE_H"
import { ISO_TILE_W } from "../model/ISO_TILE_W"
import { ISO_WALL_H } from "../model/ISO_WALL_H"

export function drawWallTL(
	x: number,
	y: number,
	u: number,
	v: number,
	size: number,
) {
	ttri(
		x - ISO_TILE_W / 2,
		y - ISO_WALL_H,
		x,
		y - ISO_TILE_H / 2 - ISO_WALL_H,
		x - ISO_TILE_W / 2,
		y,
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
		x,
		y - ISO_TILE_H / 2,
		x,
		y - ISO_TILE_H / 2 - ISO_WALL_H,
		x - ISO_TILE_W / 2,
		y,
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
