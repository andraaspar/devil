import { IRect } from '../model/IRect'

export function followWall(
	isU: boolean,
	step: number,
	u: number,
	v: number,
	r: IRect = { t: v, l: u, b: v + 1, r: u + 1 },
) {
	while (true) {
		if (isU) u += step
		else v += step
		let t = mget(u, v)
		if (t) {
			if (isU) {
				if (step > 0) r.r = u + 1
				else r.l = u
			} else {
				if (step > 0) r.b = v + 1
				else r.t = v
			}
		} else break
	}
}
