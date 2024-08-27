import { ISO_TILE_H } from '../model/ISO_TILE_H'
import { ISO_TILE_W } from '../model/ISO_TILE_W'
import { ISO_WALL_H } from '../model/ISO_WALL_H'

export function drawWallTL(x: number, y: number, u: number, v: number) {
	ttri(
		x - ISO_TILE_W / 2,
		y - ISO_WALL_H,
		x,
		y - ISO_TILE_H / 2 - ISO_WALL_H,
		x - ISO_TILE_W / 2,
		y,
		u,
		v,
		u + 16,
		v,
		u,
		v + 16,
	)
	ttri(
		x,
		y - ISO_TILE_H / 2,
		x,
		y - ISO_TILE_H / 2 - ISO_WALL_H,
		x - ISO_TILE_W / 2,
		y,
		u + 16,
		v + 16,
		u + 16,
		v,
		u,
		v + 16,
	)
}
