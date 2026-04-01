import React from 'react'

export function DoDontContainer({stacked, children}) {
  return (
    <div
      style={{
        display: 'grid',
        // Use desktop column layout; responsive single-column must be handled via CSS
        gridTemplateColumns: stacked ? '1fr' : '1fr 1fr',
        gridGap: 24,
        marginBottom: 24,
      }}
    >
      {children}
    </div>
  )
}

DoDontContainer.defaultProps = {
  stacked: false,
}

export function Do(props) {
  return (
    <DoDontBase
      {...props}
      title="Do"
      bg="var(--fgColor-success, var(--color-success-fg))"
      borderColor="var(--borderColor-success-muted, var(--color-success-muted))"
    />
  )
}

export function Dont(props) {
  return (
    <DoDontBase
      {...props}
      title="Don't"
      bg="var(--fgColor-danger, var(--color-danger-fg))"
      borderColor="var(--borderColor-danger-muted, var(--color-danger-muted))"
    />
  )
}

function DoDontBase({children, title, bg, borderColor, indented}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          display: 'flex',
          alignSelf: 'start',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
          backgroundColor: bg,
          borderRadius: 6,
          color: 'var(--fgColor-onEmphasis, var(--color-fg-on-emphasis))',
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <span
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            color: 'var(--fgColor-onEmphasis, var(--color-fg-on-emphasis))',
          }}
        >
          {title}
        </span>
      </div>
      {/* Global CSS handles img max-width and last-child margin via .do-dont-content */}
      <div className="do-dont-content" style={{display: 'flex', flexDirection: 'column'}}>
        {indented ? (
          <blockquote
            style={{
              margin: 0,
              borderLeftWidth: 4,
              borderLeftStyle: 'solid',
              borderLeftColor: borderColor,
              paddingLeft: 16,
            }}
          >
            {children}
          </blockquote>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
