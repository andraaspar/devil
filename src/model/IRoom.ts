import { IRect } from "./IRect"
import { ITile } from "./ITile"

export interface IRoom {
	rect: IRect
	tiles: (ITile | undefined)[][]
	// doors: [number, number][]
	// doorsAbove: string
	// doorsBelow: string
	// doorsLeft: string
	// doorsRight: string
	// exitCount: number
}
