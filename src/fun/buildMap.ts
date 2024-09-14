import { DATA } from "../model/DATA"
import { IRect } from "../model/IRect"
import { IRoom } from "../model/IRoom"
import { ITile } from "../model/ITile"
import { addRoom } from "./addRoom"
import { jsonClone } from "./jsonClone"
import { shuffle } from "./shuffle"

export interface IAddedRoom {
	rect: IRect
	room: IRoom
}

export function buildMap(maxRoomCount: number) {
	let startRoom = DATA.rooms[0],
		map: (ITile | undefined)[][] = jsonClone(startRoom.tiles),
		remain = shuffle(DATA.rooms.filter((r) => r !== startRoom))
	for (let i = 0; i < maxRoomCount; i++) {
		let room = remain[i % remain.length],
			height = room.rect.b - room.rect.t,
			width = room.rect.r - room.rect.l,
			options = []
		for (let v = -height, vn = map.length + 1; v < vn; v++) {
			for (let u = -width, un = (map[0]?.length ?? 0) + 1; u < un; u++) {
				const option = addRoom({ map, room, u, v })
				if (option) options.push(option)
			}
		}
		if (options.length) {
			map = options[Math.trunc(Math.random() * options.length)]
		}
	}
	let startPoint = { x: 0, y: 0 }
	// Seal doors leading nowhere and find start point
	for (let v = 0; v < map.length; v++) {
		const row = map[v]
		for (let u = 0; u < row.length; u++) {
			const tile = row[u]
			if (!tile) continue
			if (tile.doorAbove) {
				const tileAbove = map[v - 1]?.[u]
				if (!tileAbove || tileAbove.wallBelow) tile.doorAbove = false
			}
			if (tile.doorBelow) {
				const tileBelow = map[v + 1]?.[u]
				if (!tileBelow || tileBelow.wallAbove) tile.doorBelow = false
			}
			if (tile.doorLeft) {
				const tileLeft = map[v]?.[u - 1]
				if (!tileLeft || tileLeft.wallRight) tile.doorLeft = false
			}
			if (tile.doorRight) {
				const tileRight = map[v]?.[u - 1]
				if (!tileRight || tileRight.wallLeft) tile.doorRight = false
			}
			if (tile.isStart) {
				startPoint.x = u
				startPoint.y = v
			}
		}
	}
	return { map, startPoint }
}
