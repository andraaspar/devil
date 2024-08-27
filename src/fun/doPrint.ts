import { DATA } from '../model/DATA'

export function doPrint() {
	print(DATA.ps.join('\n'), 0, 0, 8, true, 1, true)
	DATA.ps = []
}
