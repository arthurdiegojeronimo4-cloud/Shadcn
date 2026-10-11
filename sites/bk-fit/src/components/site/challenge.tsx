import { MapPinCheckIcon, SmartphoneIcon, TrophyIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeading } from "@/components/site/section-heading"

const STEPS = [
  {
    icon: SmartphoneIcon,
    title: "Ative o desafio no app",
    description:
      "Entre no Desafio BK FIT 30 dias e conecte seu app de treino favorito.",
  },
  {
    icon: MapPinCheckIcon,
    title: "Faça check-in no treino",
    description:
      "Cada treino registrado vira pontos e libera 20% OFF no Combo Pós-Treino.",
  },
  {
    icon: TrophyIcon,
    title: "Suba de nível",
    description:
      "Complete 12 treinos no mês e ganhe um Whopper FIT Grill por nossa conta.",
  },
]

export function Challenge() {
  return (
    <section
      id="desafio"
      className="scroll-mt-20 bg-foreground py-20 text-background"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Desafio BK FIT 30 dias"
            title="Treinou? Ganhou."
            description="Seu esforço na academia vira desconto no pós-treino. Simples assim."
            className="[&_p]:text-background/70"
          />
          <ol className="flex flex-col gap-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">
                    {index + 1}. {step.title}
                  </span>
                  <span className="text-background/70">{step.description}</span>
                </div>
              </li>
            ))}
          </ol>
          <Button size="lg" variant="secondary" className="self-start" asChild>
            <a href="#newsletter">Quero participar</a>
          </Button>
        </div>

        <Card className="mx-auto w-full max-w-sm rotate-2 shadow-2xl">
          <CardHeader className="gap-4">
            <div className="flex items-center justify-between">
              <CardDescription>Seu progresso em outubro</CardDescription>
              <Badge variant="secondary">Nível Brasa</Badge>
            </div>
            <CardTitle className="font-display text-6xl leading-none font-normal">
              9
              <span className="text-2xl text-muted-foreground">
                {" "}
                / 12 treinos
              </span>
            </CardTitle>
            <Progress value={75} aria-label="9 de 12 treinos" />
            <div className="grid grid-cols-7 gap-1.5" aria-hidden>
              {Array.from({ length: 28 }, (_, day) => {
                const trained = [1, 2, 4, 7, 9, 11, 14, 16, 18].includes(day)
                return (
                  <span
                    key={day}
                    className={cn(
                      "aspect-square rounded-md bg-muted",
                      trained && "bg-primary"
                    )}
                  />
                )
              })}
            </div>
            <CardDescription>
              Faltam 3 treinos para o seu Whopper FIT Grill grátis.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
