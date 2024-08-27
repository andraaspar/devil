import { IRoom } from '../model/IRoom'
import { betterTrace } from './betterTrace'
import { expandRoom } from './expandRoom'
import { getDoorsAbove } from './getDoorsAbove'
import { getDoorsBelow } from './getDoorsBelow'
import { getDoorsLeft } from './getDoorsLeft'
import { getDoorsRight } from './getDoorsRight'
import { getRoomTiles } from './getRoomTiles'

export function getRoom(u: number, v: number): IRoom {
	let rect = { t: v, b: v + 1, l: u, r: u + 1 }
	for (let i = 0; i < 100; i++) {
		if (!expandRoom(rect)) break
		if (i === 99) betterTrace('getRoom overflow:', u, v, rect)
	}
	let tiles = getRoomTiles(rect),
		doors = [
			...getDoorsAbove(tiles),
			...getDoorsBelow(tiles),
			...getDoorsLeft(tiles),
			...getDoorsRight(tiles),
		]
	// doorsAbove = getDoorsAbove(tiles).trim(),
	// doorsBelow = getDoorsBelow(tiles).trim(),
	// doorsLeft = getDoorsLeft(tiles).trim(),
	// doorsRight = getDoorsRight(tiles).trim(),
	// exitCount = [doorsAbove, doorsBelow, doorsLeft, doorsRight].filter(
	// 	(x) => !!x,
	// ).length
	return {
		rect,
		tiles,
		doors,
		// doorsAbove,
		// doorsBelow,
		// doorsLeft,
		// doorsRight,
		// exitCount,
	}
}
