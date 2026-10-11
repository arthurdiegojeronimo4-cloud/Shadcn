import * as React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SectionHeading } from "@/components/site/section-heading"
import { MENU, type MenuItem } from "@/data/menu"

type Goal = "hipertrofia" | "definicao" | "manutencao"

const GOALS: Record<Goal, { label: string; gramsPerKg: number }> = {
  hipertrofia: { label: "Hipertrofia", gramsPerKg: 2 },
  definicao: { label: "Definição", gramsPerKg: 2.2 },
  manutencao: { label: "Manutenção", gramsPerKg: 1.6 },
}

const MEALS_PER_DAY = 4

function recommend(goal: Goal, proteinPerMeal: number): MenuItem {
  const candidates = MENU.filter((item) => item.category !== "combos")

  if (goal === "definicao") {
    // Na definição, priorizamos a melhor relação proteína / caloria.
    return [...candidates].sort(
      (a, b) => b.protein / b.kcal - a.protein / a.kcal
    )[0]
  }

  return [...candidates].sort(
    (a, b) =>
      Math.abs(a.protein - proteinPerMeal) -
      Math.abs(b.protein - proteinPerMeal)
  )[0]
}

export function ProteinCalculator({
  onAdd,
}: {
  onAdd: (item: MenuItem) => void
}) {
  const [goal, setGoal] = React.useState<Goal>("hipertrofia")
  const [weight, setWeight] = React.useState(75)

  const dailyProtein = Math.round(weight * GOALS[goal].gramsPerKg)
  const perMeal = Math.round(dailyProtein / MEALS_PER_DAY)
  const pick = recommend(goal, perMeal)
  const coverage = Math.min(
    100,
    Math.round((pick.protein / dailyProtein) * 100)
  )

  return (
    <section id="calculadora" className="scroll-mt-20 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-8">
          <SectionHeading
            eyebrow="Calculadora"
            title="Quanto de proteína você precisa?"
            description="Informe seu objetivo e seu peso. A gente calcula sua meta diária e indica o lanche que mais combina com ela."
          />
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Objetivo</FieldLegend>
              <ToggleGroup
                type="single"
                variant="outline"
                value={goal}
                onValueChange={(value) => value && setGoal(value as Goal)}
                className="w-full"
              >
                {(Object.keys(GOALS) as Goal[]).map((key) => (
                  <ToggleGroupItem
                    key={key}
                    value={key}
                    className="min-w-0 flex-1 px-2"
                  >
                    {GOALS[key].label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </FieldSet>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="peso">Seu peso</FieldLabel>
                <span className="font-display text-2xl tabular-nums">
                  {weight} kg
                </span>
              </div>
              <Slider
                id="peso"
                min={40}
                max={140}
                step={1}
                value={[weight]}
                onValueChange={([value]) => setWeight(value)}
                aria-label="Seu peso em quilos"
              />
              <FieldDescription>
                Referência: {GOALS[goal].gramsPerKg.toLocaleString("pt-BR")} g
                de proteína por kg, dividido em {MEALS_PER_DAY} refeições.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </div>

        <Card className="border-primary/30 shadow-xl">
          <CardHeader>
            <CardDescription>Sua meta diária</CardDescription>
            <CardTitle className="font-display text-7xl leading-none font-normal">
              {dailyProtein}
              <span className="text-3xl text-muted-foreground">g</span>
            </CardTitle>
            <CardDescription>
              ≈ {perMeal}g de proteína por refeição
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <SparklesIcon className="size-4 text-accent" />
              Recomendado pra você
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold">{pick.name}</span>
                <span className="text-sm text-muted-foreground">
                  {pick.protein}g proteína · {pick.kcal} kcal
                </span>
              </div>
              <Badge variant="outline">{GOALS[goal].label}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <Progress
                value={coverage}
                aria-label="Cobertura da meta diária"
              />
              <span className="text-sm text-muted-foreground">
                Só esse lanche já cobre{" "}
                <strong className="text-foreground">{coverage}%</strong> da sua
                proteína do dia.
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" onClick={() => onAdd(pick)}>
              Adicionar ao pedido
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
