import { DumbbellIcon, FlameIcon, LeafIcon, WheatIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeading } from "@/components/site/section-heading"

const FEATURES = [
  {
    icon: FlameIcon,
    title: "Fogo de verdade",
    description:
      "A carne vai direto na chama. Gordura escorre, o sabor fica — sem óleo de fritura.",
  },
  {
    icon: DumbbellIcon,
    title: "Até 51g de proteína",
    description:
      "Carne dupla ou tripla para bater a meta do dia sem shake sem graça.",
  },
  {
    icon: WheatIcon,
    title: "Pão integral",
    description:
      "Mais fibras, digestão mais lenta e energia que dura até o próximo treino.",
  },
  {
    icon: LeafIcon,
    title: "Macros transparentes",
    description:
      "Calorias, proteína, carbo e gordura de cada item, direto no cardápio.",
  },
]

export function Features() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20">
      <SectionHeading
        eyebrow="Por que BK FIT"
        title="Comida de verdade pra quem leva o treino a sério"
        description="A gente manteve o que importa — o sabor grelhado — e ajustou o resto pra caber na sua dieta."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <Card
            key={feature.title}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </span>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
