import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-3", className)}>
      <span className="text-sm font-semibold tracking-widest text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-none sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
