export interface ITile {
	u: number
	v: number
	isVoid: boolean
	isStart: boolean
	wallAbove: boolean
	wallBelow: boolean
	wallLeft: boolean
	wallRight: boolean
	doorAbove: boolean
	doorBelow: boolean
	doorLeft: boolean
	doorRight: boolean
	gridAbove: boolean
	gridBelow: boolean
	gridLeft: boolean
	gridRight: boolean
}
