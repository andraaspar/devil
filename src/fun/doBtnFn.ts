import { BTN_LABELS } from '../model/BTN_LABELS'

export function doBtnFn(fn: (id: number) => boolean) {
	let r = []
	for (let p = 0; p < 4; p++) {
		let o: Record<string, boolean | undefined> = {}
		r.push(o)
		for (let i = 0; i < 8; i++) if (fn(p * 8 + i)) o[BTN_LABELS[i]] = true
	}
	return r
}
