import { buildMap } from "./fun/buildMap"
import { findRooms } from "./fun/findRooms"
import { set1bpp } from "./fun/set1bpp"
import { set4bpp } from "./fun/set4bpp"
import { DATA } from "./model/DATA"
;(globalThis as any).BOOT = function BOOT() {
	set1bpp()
	DATA.rooms = findRooms()
	const m = buildMap(5)
	DATA.map = m.map
	DATA.player.x = m.startPoint.x
	DATA.player.y = m.startPoint.y
	set4bpp()
}
