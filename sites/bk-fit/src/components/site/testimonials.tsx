import { QuoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionHeading } from "@/components/site/section-heading"

const TESTIMONIALS = [
  {
    quote:
      "Indico o Stacker Protein pros meus alunos em cutting. Bate a proteína e ninguém sente que tá de dieta.",
    name: "Camila Rocha",
    role: "Personal trainer",
    initials: "CR",
  },
  {
    quote:
      "Depois do longão de domingo, o Combo Pós-Treino virou ritual. Macros na tela, zero culpa.",
    name: "Diego Martins",
    role: "Corredor de rua",
    initials: "DM",
  },
  {
    quote:
      "O check-in do desafio me fez treinar 4x por semana. Ganhei o Whopper FIT duas vezes já.",
    name: "Larissa Alves",
    role: "Crossfit",
    initials: "LA",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20">
      <SectionHeading
        eyebrow="Quem treina, aprova"
        title="Do box à pista de corrida"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardContent className="flex flex-1 flex-col gap-4">
              <QuoteIcon className="size-8 text-primary" />
              <p className="text-lg leading-relaxed">“{testimonial.quote}”</p>
            </CardContent>
            <CardFooter className="gap-3">
              <Avatar>
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">
                  {testimonial.role}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
