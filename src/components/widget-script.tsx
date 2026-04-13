'use client'

import Script from 'next/script'

interface ExtendedWindow extends Window {
  AIChatWidget?: {
    create: (options: {
      title?: string
      greetingMessage?: string
      position?: string
      primaryColor?: string
      secondaryColor?: string
      email?: string
    }) => void
  }
}

export function WidgetScript() {
  return (
    <Script
      src="https://ai-chat-box-widget.vercel.app/widget.js"
      type="module"
      strategy="afterInteractive"
      onLoad={() => {
        ;(window as unknown as ExtendedWindow).AIChatWidget?.create({
          title: 'Hỗ trợ đặt vé',
          greetingMessage: 'Xin chào! Tôi có thể giúp gì cho bạn?',
          position: 'right',
          primaryColor: '#aa3bff',
          secondaryColor: '#7c3aed',
          email: 'khachhang@example.com',
        })
      }}
    />
  )
}
