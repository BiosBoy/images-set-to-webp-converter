import isNotRegularImage from '../src/utils/isNotRegularImage'

describe('isNotRegularImage()', () => {
  it('should return true if non-regular image provided', () => {
    expect(isNotRegularImage('element.text')).toBeTruthy()
  })
  it('should return false if regular image provided', () => {
    expect(isNotRegularImage('element.png')).toBeFalsy()
  })
})
