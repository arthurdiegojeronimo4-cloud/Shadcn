import { Progress } from "@/components/ui/progress"

export function MacroBar({
  label,
  value,
  target,
}: {
  label: string
  value: number
  target: number
}) {
  const percent = Math.min(100, Math.round((value / target) * 100))

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold tabular-nums">{value}g</span>
      </div>
      <Progress value={percent} aria-label={`${label}: ${value}g`} />
    </div>
  )
}
