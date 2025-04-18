import {Box} from '@primer/react'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FocusOn} from 'react-focus-on'

function Drawer({isOpen, onDismiss, children}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <div>
          <FocusOn returnFocus={true} onEscapeKey={() => onDismiss()}>
            <Box
              key="overlay"
              as={motion.div}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{type: 'tween'}}
              onClick={() => onDismiss()}
              sx={{top: 0, right: 0, bottom: 0, left: 0, bg: 'rgba(0, 0, 0, 0.5)', position: 'fixed'}}
            />

            <Box
              key="drawer"
              as={motion.div}
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'tween', duration: 0.2}}
              style={{zIndex: 1}}
              sx={{width: 300, top: 0, right: 0, bottom: 0, bg: 'gray.0', position: 'fixed'}}
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
