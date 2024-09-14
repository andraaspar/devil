import { TMap } from "../model/TMap"
import { betterTrace } from "./betterTrace"

export function traceMap(map: TMap) {
	let result: string[] = []
	for (let v = 0; v < map.length; v++) {
		let row = map[v],
			rrow: string[] = []
		for (let u = 0; u < row.length; u++) {
			const tile = map[v][u]
			if (tile) {
				if (tile.doorAbove) rrow.push("^")
				else if (tile.doorBelow) rrow.push("V")
				else if (tile.doorLeft) rrow.push("<")
				else if (tile.doorRight) rrow.push(">")
				else rrow.push(".")
			} else {
				rrow.push("#")
			}
		}
		result.push(rrow.join(""))
	}
	betterTrace(result.join("\n "))
}
