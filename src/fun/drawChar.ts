import { resetColors } from './resetColors'
import { swapColors } from './swapColors'

export function drawChar(id: number, x: number, y: number) {
	swapColors({
		1: 10,
		2: 10,
		3: 10,
		4: 10,
		5: 10,
		6: 10,
		7: 10,
		8: 10,
		9: 10,
		10: 10,
		11: 10,
		12: 10,
		13: 10,
		14: 10,
		15: 10,
	})
	spr(id, x + 1, y + 1, 0, 1, 0, 0, 1, 2)
	spr(id, x - 1, y - 1, 0, 1, 0, 0, 1, 2)
	resetColors([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
	spr(id, x, y, 0, 1, 0, 0, 1, 2)
}
