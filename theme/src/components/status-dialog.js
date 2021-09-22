import statuses from '../statuses.yml'
import StatusLabel from './status-label'
import {Dialog, Box, Text, Heading, Link, Label} from '@primer/components'
import React from 'react'

// TODO: status arguments
function StatusDialog({title, status: currentStatus, checklist}) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          appearance: 0,
          padding: 0,
          margin: 0,
          border: 0,
          background: 'transparent',
        }}
      >
        <StatusLabel status={currentStatus} />
      </button>
      <Dialog
        // returnFocusRef={returnFocusRef}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        aria-labelledby="header-id"
      >
        <Dialog.Header id="header-id">{title} status</Dialog.Header>
        <Box
          //   p={3}
          sx={{
            fontFamily: 'sans-serif',
            display: 'grid',
            //     gridGap: 4,
            color: 'text.grayDark',
          }}
        >
          {statuses.map(status => (
            <Box
              key={status.name}
              p={3}
              sx={{borderBottom: '1px solid', borderColor: 'border.gray'}}
            >
              <Heading as="h2" fontSize={2} mb={1}>
                {status.name}{' '}
                {status.name.toLowerCase() === currentStatus.toLowerCase() ? (
                  <Label outline variant="small">
                    Current
                  </Label>
                ) : null}
              </Heading>
              <Text
                as="p"
                lineHeight={1.5}
                fontSize={1}
                mt={0}
                mb={2}
                sx={{color: 'text.grayDark'}}
              >
                {status.description}
              </Text>
              {status.criteria ? (
                <Box sx={{display: 'grid', gridGap: 2, color: 'text.grayDark'}}>
                  {Object.entries(status.criteria).map(([id, criteria]) => (
                    <div>
                      <Text
                        as="label"
                        fontSize={1}
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'auto 1fr',
                          gridGap: 2,
                          lineHeight: 1.5,
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={checklist.includes(id)}
                          style={{pointerEvents: 'none'}}
                        ></input>{' '}
                        <Text>{criteria.description}</Text>
                      </Text>
                    </div>
                  ))}
                </Box>
              ) : null}
            </Box>
          ))}
          <Link m={3}>Edit status on GitHub</Link>
        </Box>
      </Dialog>
    </>
  )
}

export default StatusDialog
