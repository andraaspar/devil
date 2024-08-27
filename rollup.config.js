import { defineConfig } from 'rollup'

export default defineConfig({
	input: 'build-ts/index.js',
	output: {
		file: 'build-rollup/devil.js',
		format: 'iife',
		name: 'window',
		extend: true,
		esModule: false,
		generatedCode: {
			preset: 'es2015',
		},
		banner: `// title: Devil
// author: Andras Parditka (andraaspar)
// desc: Hack and slash
// license: MIT
// version: 1
// script: js
// saveid: devil-sio6y7`,
	},
})
