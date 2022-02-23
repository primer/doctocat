import {Box} from '@primer/components'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FocusOn} from 'react-focus-on'

function Drawer({isOpen, onDismiss, children}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          // These event handlers fix a bug that caused links below the fold
          // to be unclickable in macOS Safari.
          // Reference: https://github.com/theKashey/react-focus-lock/issues/79
          onMouseDown={event => event.preventDefault()}
          onClick={event => event.target.focus()}
        >
          <FocusOn returnFocus={true} onEscapeKey={() => onDismiss()}>
            <Box
              position="fixed"
              key="overlay"
              as={motion.div}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{type: 'tween'}}
              onClick={() => onDismiss()}
              sx={{top: 0, right: 0, bottom: 0, left: 0, bg: 'rgba(0, 0, 0, 0.5)'}}
            />

            <Box
              position="fixed"
              key="drawer"
              as={motion.div}
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'tween', duration: 0.2}}
              style={{zIndex: 1}}
              sx={{width: 300, top: 0, right: 0, bottom: 0, bg: 'gray.0'}}
            >
              {children}
            </Box>
          </FocusOn>
        </div>
      ) : null}
    </AnimatePresence>
  )
}

export default Drawer
