import imagesNotFound from '../src/utils/imagesNotFound'

describe('imagesNotFound()', () => {
  it('should return false if wrong one path provided by user', () => {
    expect(imagesNotFound([])).toBeTruthy()
    expect(imagesNotFound(null)).toBeTruthy()
    expect(imagesNotFound(undefined)).toBeTruthy()
  })
  it('should return true if correct one path provided by user', () => {
    expect(imagesNotFound(['sd', 'sd', 'User/test_Folder'])).toBeFalsy()
  })
})
