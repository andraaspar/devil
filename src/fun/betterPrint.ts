import { DATA } from '../model/DATA'
import { LINE_RE } from '../model/LINE_RE'
import { toString } from './toString'

export function betterPrint(...r: any[]) {
	DATA.ps.push(r.map(toString).join(' ').replace(LINE_RE, '$&\n'))
}
