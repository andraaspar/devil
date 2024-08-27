export function resetColors(a: number[]) {
	a.forEach((c) => poke4(0x3ff0 * 2 + c, c))
}
