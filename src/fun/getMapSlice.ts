import { DATA } from "../model/DATA"
import { ISliceTile } from "../model/ISliceTile"

//  L T
//   #
//  # .
// # . #
//  . .
//   #
//  B R

export function getMapSlice(x: number, y: number, d: number) {
	let count = 2 * d + 1,
		r: (ISliceTile | undefined)[][] = [...Array(count * 2 - 1).keys()].map(
			() => [],
		)
	for (let u = 0; u < count; u++) {
		for (let v = 0; v < count; v++) {
			let mapx = x - d + v,
				mapy = y - d + u,
				tile = DATA.map[mapy]?.[mapx]
			r[v + u].unshift(tile ? { x: mapx, y: mapy, tile } : undefined)
		}
	}
	// for(let r1 of r){
	// 	p(r1)
	// }
	return r
}
