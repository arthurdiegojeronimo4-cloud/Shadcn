import { PlusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MacroBar } from "@/components/site/macro-bar"
import { SectionHeading } from "@/components/site/section-heading"
import {
  formatPrice,
  MEAL_TARGET,
  MENU,
  type Category,
  type MenuItem,
} from "@/data/menu"

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "burgers", label: "Hambúrgueres" },
  { value: "bowls", label: "Bowls" },
  { value: "combos", label: "Combos" },
]

function MenuCard({
  item,
  onAdd,
}: {
  item: MenuItem
  onAdd: (item: MenuItem) => void
}) {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        {item.highlight && (
          <CardAction>
            <Badge>{item.highlight}</Badge>
          </CardAction>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl leading-none text-fit">
            {item.protein}g
          </span>
          <span className="text-sm text-muted-foreground">
            proteína · {item.kcal} kcal
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <MacroBar
            label="Prot."
            value={item.protein}
            target={MEAL_TARGET.protein}
          />
          <MacroBar
            label="Carbo"
            value={item.carbs}
            target={MEAL_TARGET.carbs}
          />
          <MacroBar label="Gord." value={item.fat} target={MEAL_TARGET.fat} />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xl font-bold tabular-nums">
          {formatPrice(item.price)}
        </span>
        <Button onClick={() => onAdd(item)}>
          <PlusIcon data-icon="inline-start" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}

export function MenuSection({ onAdd }: { onAdd: (item: MenuItem) => void }) {
  return (
    <section id="cardapio" className="scroll-mt-20 bg-muted/40 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <SectionHeading
          eyebrow="Cardápio FIT"
          title="Escolha pelo macro, não pela culpa"
          description="Cada item mostra proteína, carboidrato e gordura em relação a uma refeição de referência (60g P · 80g C · 35g G)."
        />
        <Tabs defaultValue="burgers" className="gap-8">
          <TabsList>
            {CATEGORIES.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {CATEGORIES.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid gap-4 md:grid-cols-2">
                {MENU.filter((item) => item.category === category.value).map(
                  (item) => (
                    <MenuCard key={item.id} item={item} onAdd={onAdd} />
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <p className="text-xs text-muted-foreground">
          Valores nutricionais ilustrativos deste conceito. Consulte a tabela
          oficial no restaurante.
        </p>
      </div>
    </section>
  )
}
