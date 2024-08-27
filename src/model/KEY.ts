export const KEY = {
	...Object.fromEntries(
		[...Array(26).keys()]
			.map((x) => [(x + 10).toString(36), x + 1])
			.concat([...Array(10).keys()].map((x) => [x, x + 27]))
			.concat([...Array(12).keys()].map((x) => ['f' + (x + 1), x + 67])),
	),
	space: 48,
	ctrl: 63,
	shift: 64,
	alt: 65,
}
