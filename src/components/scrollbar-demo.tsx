"use client"

import { Scrollbar } from "./ui"

export function ScrollbarDemo() {
  const longContent = Array.from({ length: 50 }, (_, i) => (
    <div key={i} className="p-4 border-b border-border">
      <h3 className="text-lg font-semibold mb-2">Item {i + 1}</h3>
      <p className="text-muted-foreground">
        This is a demo content item to showcase the custom scrollbar. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  ))

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Custom Scrollbar Demo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Default Scrollbar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default Scrollbar</h3>
          <Scrollbar
            variant="default"
            className="h-64 border border-border rounded-lg bg-card"
          >
            {longContent}
          </Scrollbar>
        </div>

        {/* Glass Scrollbar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Glass Scrollbar</h3>
          <Scrollbar
            variant="glass"
            className="h-64 border border-border rounded-lg bg-card/50 backdrop-blur-sm"
          >
            {longContent}
          </Scrollbar>
        </div>

        {/* Animated Scrollbar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Animated Scrollbar</h3>
          <Scrollbar
            variant="animated"
            className="h-64 border border-border rounded-lg bg-card"
          >
            {longContent}
          </Scrollbar>
        </div>

        {/* Custom Scrollbar */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Scrollbar</h3>
          <Scrollbar
            variant="custom"
            className="h-64 border border-border rounded-lg bg-card"
          >
            {longContent}
          </Scrollbar>
        </div>
      </div>
    </div>
  )
}
