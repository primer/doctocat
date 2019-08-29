import React from 'react'

/** Attaches an event listener to `window`. */
function useEventListener(eventName, eventHandler, dependencies = []) {
  React.useEffect(() => {
    if (eventName && eventHandler) {
      window.addEventListener(eventName, eventHandler)
      return () => window.removeEventListener(eventName, eventHandler)
    }
  }, dependencies)
}

export default useEventListener
