import { DATA } from '../model/DATA'
import { IRect } from '../model/IRect'
import { IRoom } from '../model/IRoom'
import { rectsOverlap } from './rectsOverlap'
import { shuffle } from './shuffle'

export interface IAddedRoom {
	rect: IRect
	room: IRoom
}

export function buildMap() {
	let startRoom = DATA.rooms[0],
		addedRooms: IAddedRoom[] = [
			{
				rect: {
					t: 0,
					b: startRoom.rect.b - startRoom.rect.t,
					l: 0,
					r: startRoom.rect.r - startRoom.rect.l,
				},
				room: startRoom,
			},
		],
		rect: IRect = {
			t: 0,
			b: startRoom.rect.b - startRoom.rect.t,
			l: 0,
			r: startRoom.rect.r - startRoom.rect.l,
		},
		remain = shuffle(DATA.rooms.filter((r) => r !== startRoom))
	for (let i = 0; i < 12; i++) {
		let room = remain[i % remain.length],
			height = room.rect.b - room.rect.t,
			width = room.rect.r - room.rect.l,
			options = []
		for (let v = rect.t - height, vn = rect.b; v < vn; v++) {
			for (let u = rect.l - width, un = rect.r; u < un; u++) {
				let addRect: IRect = { t: v, l: u, b: v + height, r: u + width }
				if (addedRooms.find((aRoom) => rectsOverlap(aRoom.rect, addRect)))
					continue
			}
		}
	}
}
