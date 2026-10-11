import * as React from "react"
import { SendIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = React.useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    toast.success("Você está no Desafio BK FIT!", {
      description: `Enviamos o cupom de boas-vindas para ${email}.`,
    })
    setEmail("")
  }

  return (
    <section id="newsletter" className="scroll-mt-20 px-4 py-20">
      <Card className="mx-auto max-w-3xl overflow-hidden border-primary/30 bg-ember text-center">
        <CardHeader className="items-center gap-3">
          <CardTitle className="font-display text-4xl leading-none font-normal sm:text-5xl">
            Ganhe 20% no primeiro pós-treino
          </CardTitle>
          <CardDescription className="text-base">
            Cadastre seu e-mail, entre no Desafio BK FIT 30 dias e receba cupons
            toda semana.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <Button type="submit">
                    <SendIcon data-icon="inline-start" />
                    Participar
                  </Button>
                </div>
                <FieldDescription>
                  Sem spam. Só cupom e treino.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
