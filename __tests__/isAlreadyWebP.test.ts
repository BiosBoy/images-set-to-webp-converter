import isAlreadyWebP from '../src/utils/isAlreadyWebP'

describe('isAlreadyWebP()', () => {
  it('should return false if image non-webp', () => {
    expect(isAlreadyWebP('element.webp')).toBeTruthy()
  })
  it('should return true if image is non-webp', () => {
    expect(isAlreadyWebP('element.png')).toBeFalsy()
  })
})
