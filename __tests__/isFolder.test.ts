import isFolder from '../src/utils/isFolder'

describe('isFolder()', () => {
  it('should return false if non-folder founded', () => {
    expect(isFolder('element.webp')).toBeFalsy()
  })
})
