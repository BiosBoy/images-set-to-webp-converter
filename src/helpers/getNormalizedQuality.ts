import { MAX_QUALITY } from '../constants'

const getNormalizedQuality = () => {
  const receivedQuality = process.argv.find(arg => arg.match(/^(quality=[0-9][0-9]?0?)/i)) || '80' // best value score
  const tempValue = receivedQuality.replace(/^(quality=)/i, '')

  const qualityValue = Number(tempValue) || Number(MAX_QUALITY)
  const castedMaxValue = Number(MAX_QUALITY)

  if ((qualityValue && qualityValue > castedMaxValue) || !qualityValue) {
    console.error(`Error: something wrong with the inputted quality value: ${receivedQuality}. Fallback to 100%!`)

    return castedMaxValue
  }

  return qualityValue
}

export default getNormalizedQuality
