import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/site/section-heading"

const QUESTIONS = [
  {
    question: "Hambúrguer pode entrar na dieta?",
    answer:
      "Pode, quando cabe nos seus macros. A linha FIT usa carne grelhada no fogo (sem fritura), pão integral ou wrap de alface e molhos leves, para você bater proteína sem estourar calorias.",
  },
  {
    question: "Qual é a melhor opção para o pós-treino?",
    answer:
      "Para hipertrofia, o Whopper FIT Grill ou o Bowl Grill Power entregam proteína e carboidrato para reposição. Em fase de definição, o Stacker Protein e o Bowl Low Carb têm a melhor relação proteína por caloria.",
  },
  {
    question: "Tem opção vegana?",
    answer:
      "Sim. O Plant FIT usa carne vegetal grelhada no fogo, pão integral e molho de tahine, com 27g de proteína 100% vegetal.",
  },
  {
    question: "Como funciona o desconto do Desafio 30 dias?",
    answer:
      "Ative o desafio no app e registre seus treinos. Cada check-in libera 20% de desconto no Combo Pós-Treino em até 3 horas, e 12 treinos no mês valem um Whopper FIT Grill grátis.",
  },
  {
    question: "As informações nutricionais são exatas?",
    answer:
      "Os valores deste site são ilustrativos. Para dietas com acompanhamento, consulte a tabela nutricional oficial no restaurante e seu nutricionista.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Dúvidas de quem conta macro"
          description="Tudo o que você precisa saber antes de colocar o BK FIT na sua rotina."
        />
        <Accordion type="single" collapsible defaultValue="item-0">
          {QUESTIONS.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
