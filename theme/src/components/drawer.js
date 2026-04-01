import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FocusOn} from 'react-focus-on'

function Drawer({isOpen, onDismiss, children}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <div>
          <FocusOn returnFocus={true} onEscapeKey={() => onDismiss()}>
            <motion.div
              key="overlay"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{type: 'tween'}}
              onClick={() => onDismiss()}
              style={{top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed'}}
            />

            <motion.div
              key="drawer"
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'tween', duration: 0.2}}
              style={{
                zIndex: 1,
                width: 300,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'var(--bgColor-default, var(--color-canvas-default))',
                position: 'fixed',
              }}
            >
              {children}
            </motion.div>
          </FocusOn>
        </div>
      ) : null}
    </AnimatePresence>
  )
}

export default Drawer
