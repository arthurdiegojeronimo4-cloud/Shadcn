import {
  ArrowRightIcon,
  CalculatorIcon,
  DumbbellIcon,
  FlameIcon,
  TimerIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { BurgerIllustration } from "@/components/site/burger-illustration"

const STATS = [
  { value: "42g", label: "de proteína" },
  { value: "520", label: "kcal" },
  { value: "0", label: "fritura" },
]

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex animate-in flex-col items-start gap-6 duration-700 fade-in slide-in-from-bottom-4">
          <Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1">
            <FlameIcon className="text-primary" />
            Novo · Linha FIT
          </Badge>

          <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Grelhado no fogo.
            <br />
            <span className="text-primary">Feito pro shape.</span>
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            O sabor do Whopper que você conhece, agora com pão integral, carne
            dupla grelhada e até 51g de proteína. O pós-treino mais gostoso da
            sua rotina.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#cardapio">
                Montar meu pedido
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#calculadora">
                <CalculatorIcon data-icon="inline-start" />
                Calcular minha proteína
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6">
                {index > 0 && (
                  <Separator orientation="vertical" className="h-10!" />
                )}
                <div className="flex flex-col">
                  <span className="font-display text-4xl leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-md animate-in items-center justify-center duration-1000 zoom-in-95 fade-in">
          <div className="absolute inset-0 rounded-full bg-ember blur-2xl" />
          <BurgerIllustration className="relative w-[85%] animate-float" />

          <Card className="absolute top-6 -left-2 w-44 gap-2 py-4 shadow-xl sm:-left-6">
            <CardContent className="flex flex-col gap-2 px-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <DumbbellIcon className="size-4 text-fit" />
                  Proteína
                </span>
                <span className="font-semibold tabular-nums">42g</span>
              </div>
              <Progress value={70} aria-label="70% da meta da refeição" />
              <span className="text-xs text-muted-foreground">
                70% da meta da refeição
              </span>
            </CardContent>
          </Card>

          <Card className="absolute right-0 bottom-8 gap-0 py-3 shadow-xl sm:-right-4">
            <CardContent className="flex items-center gap-3 px-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-fit text-fit-foreground">
                <TimerIcon className="size-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Pronto em 7 min</span>
                <span className="text-xs text-muted-foreground">
                  Retire após o treino
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
