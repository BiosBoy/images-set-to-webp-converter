import isNotPath from '../src/utils/isNotPath'

describe('isNotPath()', () => {
  it('should return true if non-path provided', () => {
    expect(isNotPath('element.webp')).toBeTruthy()
  })
})
