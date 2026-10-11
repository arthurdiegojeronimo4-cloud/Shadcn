import { FlameIcon } from "lucide-react"

const WORDS = [
  "Grelhado no fogo",
  "Alta proteína",
  "Pão integral",
  "Zero fritura",
  "Macros na tela",
  "Pós-treino",
]

export function Marquee() {
  const items = [...WORDS, ...WORDS]

  return (
    <div className="overflow-hidden border-y bg-primary py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-8">
        {items.map((word, index) => (
          <span
            key={index}
            aria-hidden={index >= WORDS.length}
            className="flex items-center gap-8 font-display text-2xl whitespace-nowrap"
          >
            {word}
            <FlameIcon className="size-5 text-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
