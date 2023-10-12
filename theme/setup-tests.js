import '@testing-library/jest-dom/extend-expect'

// JSDOM doesn't mock ResizeObserver
// Copied from https://github.com/primer/react/blob/3fdae477d8067c5131d316548ce5b08aa1017355/src/utils/test-helpers.tsx
global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn()
  }
})

// Some weird issue with JSDOM and CSS.supports
// Copied from https://github.com/kazzkiq/CodeFlask/issues/136
Object.defineProperty(global.CSS, 'supports', {
  value: () => jest.fn()
});
