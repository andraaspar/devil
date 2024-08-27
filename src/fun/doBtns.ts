import { DATA } from '../model/DATA'
import { doBtnFn } from './doBtnFn'

export function doBtns() {
	if (!DATA.btnps || DATA.lastBtnp !== btnp()) {
		DATA.lastBtnp = btnp()
		DATA.btnps = doBtnFn(btnp)
	}
	if (!DATA.btns || DATA.lastBtn !== btn()) {
		DATA.lastBtn = btn()
		DATA.btns = doBtnFn(btn)
	}
}
