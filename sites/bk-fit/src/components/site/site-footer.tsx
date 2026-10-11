import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/site/site-header"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Logo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#cardapio" className="hover:text-foreground">
              Cardápio FIT
            </a>
            <a href="#calculadora" className="hover:text-foreground">
              Calculadora
            </a>
            <a href="#desafio" className="hover:text-foreground">
              Desafio 30 dias
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          Projeto conceitual e não oficial, criado para fins de estudo de
          design. Burger King® e Whopper® são marcas de seus respectivos
          titulares. Produtos, preços e valores nutricionais são ilustrativos.
        </p>
      </div>
    </footer>
  )
}
