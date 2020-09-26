import { Reporter } from '@parcel/plugin'
import asar from 'asar'

export default new Reporter({
  async report({ event: { type }, options: { outputFS, serve: { distDir } } }) {
    if (type !== 'buildSuccess') return
    await outputFS.rimraf(`${distDir}/package.asar`)
    await asar.createPackage(distDir, `${distDir}/package.asar`)
  }
})
