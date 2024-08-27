import { IRect } from '../model/IRect'

export function rectsOverlap(a: IRect, b: IRect) {
	return a.b > b.t && a.r > b.l && a.t < b.b && a.l < b.r
}
