import { betterPrint } from './fun/betterPrint'
import { doBtns } from './fun/doBtns'
import { doPrint } from './fun/doPrint'
import { drawChar } from './fun/drawChar'
import { drawMap } from './fun/drawMap'
import { DATA } from './model/DATA'
import { KEY } from './model/KEY'
import { SCREEN_H } from './model/SCREEN_H'
import { SCREEN_W } from './model/SCREEN_W'
;(globalThis as any).TIC = function TIC() {
	vbank(0)
	if (key(KEY.q)) exit()
	cls(0)
	doBtns()
	if (DATA.btnps[0].l) DATA.player.x--
	if (DATA.btnps[0].r) DATA.player.x++
	if (DATA.btnps[0].u) DATA.player.y--
	if (DATA.btnps[0].d) DATA.player.y++
	betterPrint(DATA.player)
	// betterPrint('mouse:',mouse())
	// betterPrint(btns().map((o,i)=>`btns[${i}]:`+okeys(o)).join('\n'))
	// betterPrint('A:',key(KEY.a))
	drawMap()
	// pix(w/2,h/2,12)
	vbank(1)
	cls(0)
	drawChar(256, SCREEN_W / 2 - 4, SCREEN_H / 2 - 16)
	doPrint()
}
