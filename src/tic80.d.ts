const btn: ((id: number) => boolean) & (() => number)
const btnp: ((id: number) => boolean) & (() => number)
const poke4: (addr: number, value: number) => void
const mget: (u: number, v: number) => number
const vbank: (id: number) => void
const key: (id: number) => boolean
const keyp: (id: number) => boolean
const exit: () => void
const cls: (color?: number) => void
const trace: (message: string, color?: number) => void
const print: (
	message: string,
	x?: number,
	y?: number,
	color?: number,
	fixed?: boolean,
	scale?: number,
	smallFont?: boolean,
) => number
const ttri: (
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number,
	u1: number,
	v1: number,
	u2: number,
	v2: number,
	u3: number,
	v3: number,
	texsrc?: number,
	chromakey?: number,
	z1?: number,
	z2?: number,
	z3?: number,
) => void
const spr: (
	id: number,
	x: number,
	y: number,
	colorkey?: number,
	scale?: number,
	flip?: number,
	rotate?: number,
	w?: number,
	h?: number,
) => void
function BOOT() {}
function TIC() {}
