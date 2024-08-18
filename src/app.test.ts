import { describe, expect } from '@jest/globals'
import { app } from './app'

describe('app', () => {
  it('should return node.ts', () => {
    expect(app()).toBe('node.ts')
  })
})
