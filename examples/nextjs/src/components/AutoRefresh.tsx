'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'

interface AutoRefreshProps extends React.PropsWithChildren<{}> {}

export function AutoRefresh({children}: AutoRefreshProps) {
  if (process.env.NODE_ENV === 'development') {
    useAutoRefresh()
  }
  return children
}

function useAutoRefresh() {
  const router = useRouter()

  useEffect(() => {
    const url = new URL('/_doctocat/refresh-page', window.location.href)
    url.protocol = 'ws'

    const ws = new WebSocket(url)
    ws.onmessage = event => {
      if (event.data === 'refresh') {
        console.log('refreshing page')
        router.refresh()
      }
    }
    console.log('created websocket')
    return () => {
      console.log('closing websocket')
      ws.close()
    }
  }, [router])
}
