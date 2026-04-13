'use client'

import Script from 'next/script'

export function WidgetScript() {
  return (
    <Script
      src="https://ai-chat-box-widget.vercel.app/widget.js"
      type="module"
      strategy="afterInteractive"
      onLoad={() => {
        ;(window as any).AIChatWidget?.create({
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
