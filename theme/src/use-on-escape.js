import useEventListener from './use-event-listener'

function isEscape(event) {
  return event.key === 'Escape' || event.keyCode === 27
}

/** Calls `callback` whenever the Escape key is pressed (on `keydown`). */ function useOnEscape(
  callback,
  dependencies = [],
) {
  useEventListener(
    'keydown',
    event => {
      if (isEscape(event)) {
        callback(event)
      }
    },
    dependencies,
  )
}

export default useOnEscape
