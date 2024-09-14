import { IRoom } from "../model/IRoom"
import { ITile } from "../model/ITile"

export function addRoom({
	map,
	u,
	v,
	room,
}: {
	map: (ITile | undefined)[][]
	u: number
	v: number
	room: IRoom
}): (ITile | undefined)[][] | undefined {
	const mapWidth = map[0]?.length ?? 0
	const mapHeight = map.length
	const roomWidth = room.rect.r - room.rect.l
	const roomHeight = room.rect.b - room.rect.t
	const resultWidth =
		u >= 0
			? Math.max(mapWidth, u + roomWidth)
			: Math.max(roomWidth, -u + mapWidth)
	const resultHeight =
		v >= 0
			? Math.max(mapHeight, v + roomHeight)
			: Math.max(roomHeight, -v + mapHeight)
	const mapU = u >= 0 ? 0 : -u
	const mapV = v >= 0 ? 0 : -v
	const roomU = u >= 0 ? u : 0
	const roomV = v >= 0 ? v : 0
	const result: (ITile | undefined)[][] = []
	// Paint
	for (let resultV = 0; resultV < resultHeight; resultV++) {
		const row: (ITile | undefined)[] = []
		result.push(row)
		for (let resultU = 0; resultU < resultWidth; resultU++) {
			const mapTile = map[resultV - mapV]?.[resultU - mapU]
			const roomTile = room.tiles[resultV - roomV]?.[resultU - roomU]
			if (mapTile && roomTile) {
				// Collision
				return
			} else if (mapTile) {
				row.push({ ...mapTile, u: resultU, v: resultV })
			} else if (roomTile) {
				row.push({ ...roomTile, u: resultU, v: resultV })
			} else {
				row.push(undefined)
			}
		}
	}
	// Check connections
	let hasConnections = false
	for (let resultV = roomV; resultV < roomV + roomHeight; resultV++) {
		for (let resultU = roomU; resultU < roomU + roomWidth; resultU++) {
			const roomTile = result[resultV]?.[resultU]
			if (roomTile?.doorAbove) {
				const tileAbove = result[resultV - 1]?.[resultU]
				if (tileAbove?.doorBelow) {
					hasConnections = true
				}
			}
			if (roomTile?.doorBelow) {
				const tileBelow = result[resultV + 1]?.[resultU]
				if (tileBelow?.doorAbove) {
					hasConnections = true
				}
			}
			if (roomTile?.doorLeft) {
				const tileLeft = result[resultV]?.[resultU - 1]
				if (tileLeft?.doorRight) {
					hasConnections = true
				}
			}
			if (roomTile?.doorRight) {
				const tileRight = result[resultV]?.[resultU + 1]
				if (tileRight?.doorLeft) {
					hasConnections = true
				}
			}
		}
	}
	return hasConnections ? result : undefined
}
