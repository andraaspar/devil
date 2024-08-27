import { IRect } from '../model/IRect'
import { MAP_TILES_H } from '../model/MAP_TILES_H'
import { MAP_TILES_W } from '../model/MAP_TILES_W'
import { followWall } from './followWall'

export function expandRoom(r: IRect) {
	let exd = false
	if (r.t > 0) {
		let v = r.t - 1
		for (let u = r.l; u < r.r; u++) {
			let t = mget(u, v)
			if (t) {
				exd = true
				r.t = v
				followWall(false, -1, u, v, r)
				break
			}
		}
	}
	if (r.l > 0) {
		let u = r.l - 1
		for (let v = r.t; v < r.b; v++) {
			let t = mget(u, v)
			if (t) {
				exd = true
				r.l = u
				followWall(true, -1, u, v, r)
				break
			}
		}
	}
	if (r.b < MAP_TILES_H) {
		let v = r.b
		for (let u = r.l; u < r.r; u++) {
			let t = mget(u, v)
			if (t) {
				exd = true
				r.b = v + 1
				followWall(false, 1, u, v, r)
				break
			}
		}
	}
	if (r.r < MAP_TILES_W) {
		let u = r.r
		for (let v = r.t; v < r.b; v++) {
			let t = mget(u, v)
			if (t) {
				exd = true
				r.r = u + 1
				followWall(true, 1, u, v, r)
				break
			}
		}
	}
	return exd
}
