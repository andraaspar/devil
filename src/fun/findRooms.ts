import { MAP_TILES_H } from '../model/MAP_TILES_H'
import { MAP_TILES_W } from '../model/MAP_TILES_W'
import { getRoom } from './getRoom'
import { rectIncludes } from './rectIncludes'

export function findRooms() {
	let r = []
	for (let v = 0; v < MAP_TILES_H; v++) {
		for (let u = 0; u < MAP_TILES_W; u++) {
			let t = mget(u, v)
			if (t) {
				let exRoom = r.find((room) => rectIncludes(room.rect, u, v))
				if (exRoom) {
					u = exRoom.rect.r - 1
				} else {
					let room = getRoom(u, v)
					r.push(room)
					u = room.rect.r - 1
				}
			}
		}
	}
	return r
}
