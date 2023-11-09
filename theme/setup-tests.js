import '@testing-library/jest-dom'

// JSDOM doesn't mock ResizeObserver
// Copied from https://github.com/primer/react/blob/3fdae477d8067c5131d316548ce5b08aa1017355/src/utils/test-helpers.tsx
global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  }
})
