import normalizedPathName from '../src/helpers/normalizedPathName'

describe('normalizedPathName()', () => {
  it('should return right path instead of wrong one provided by user v1', () => {
    // @ts-ignore
    process.args = [0, 0, 'User/test_Folder']

    expect(normalizedPathName()).toBe('/usr/local/bin/node')
  })
  it('should return right path instead of wrong one provided by user v2', () => {
    // @ts-ignore
    process.args = [0, 0, '/User/test_Folder']

    expect(normalizedPathName()).toBe('/usr/local/bin/node')
  })
  it('should return right path instead of wrong one provided by user v3', () => {
    // @ts-ignore
    process.args = [0, 0, 'User/test_Folder/']

    expect(normalizedPathName()).toBe('/usr/local/bin/node')
  })
  it('should return right path instead of wrong one provided by user v4', () => {
    // @ts-ignore
    process.args = [0, 0, '/User/test_Folder/']

    expect(normalizedPathName()).toBe('/usr/local/bin/node')
  })
})
