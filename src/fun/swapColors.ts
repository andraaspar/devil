export function swapColors(o: Record<number, number>) {
	Object.entries(o).forEach(([k, v]) => poke4(0x3ff0 * 2 + parseInt(k), v))
}
