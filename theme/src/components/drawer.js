import {Fixed} from '@primer/components'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FocusOn} from 'react-focus-on'

function Drawer({isOpen, onDismiss, children}) {
  function handleKeyDown(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault()
      onDismiss()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen ? (
        <FocusOn returnFocus={true}>
          <Fixed
            key="overlay"
            as={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{type: 'tween'}}
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg="rgba(0, 0, 0, 0.5)"
            onClick={() => onDismiss()}
          />

          <Fixed
            key="drawer"
            as={motion.div}
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{type: 'tween'}}
            width={300}
            top={0}
            right={0}
            bottom={0}
            bg="gray.0"
            style={{zIndex: 1}}
          >
            {children}
          </Fixed>
        </FocusOn>
      ) : null}
    </AnimatePresence>
  )
}

export default Drawer
