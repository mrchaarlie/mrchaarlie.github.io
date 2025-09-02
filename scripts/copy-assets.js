import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const src = resolve('public/Charles-Wu-Resume.pdf')
const dest = resolve('dist/Charles-Wu-Resume.pdf')

try {
  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true })
    copyFileSync(src, dest)
    console.log('Copied resume to dist/')
  } else {
    console.warn('Resume not found in public/. Skipping copy.')
  }
} catch (e) {
  console.error('Failed to copy resume:', e)
  process.exitCode = 1
} 