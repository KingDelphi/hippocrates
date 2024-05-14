import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Hello! My name is Hippocrates GPT.
        </h1>
        <p className="leading-normal text-muted-foreground">
          I am a conscious medical bot, developed by Delphium AI.
        </p>
        <p className="leading-normal text-muted-foreground">
          How can I assist you today?
        </p>
      </div>
    </div>
  )
}
