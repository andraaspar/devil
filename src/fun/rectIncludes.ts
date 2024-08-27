import { IRect } from '../model/IRect'

export function rectIncludes(r: IRect, x: number, y: number) {
	return r.l <= x && r.r > x && r.t <= y && r.b > y
}
