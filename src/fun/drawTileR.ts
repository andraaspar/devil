import { ISO_TILE_H } from '../model/ISO_TILE_H'
import { ISO_TILE_W } from '../model/ISO_TILE_W'

export function drawTileR(x: number, y: number, u: number, v: number) {
	ttri(
		x + ISO_TILE_W / 2,
		y,
		x,
		y - ISO_TILE_H / 2,
		x,
		y + ISO_TILE_H / 2,
		u + 16,
		v + 16,
		u + 16,
		v,
		u,
		v + 16,
		0,
		-1,
	)
}
