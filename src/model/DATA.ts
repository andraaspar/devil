import { IRoom } from "./IRoom"
import { ITile } from "./ITile"

export const DATA = {
	ps: [] as string[],
	lastBtnp: -1,
	lastBtn: -1,
	btnps: [] as Record<string, boolean | undefined>[],
	btns: [] as Record<string, boolean | undefined>[],
	rooms: [] as IRoom[],
	map: [] as (ITile | undefined)[][],
	player: { x: 14, y: 5 },
}
