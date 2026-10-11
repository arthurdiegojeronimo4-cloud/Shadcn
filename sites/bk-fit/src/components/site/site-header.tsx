import {
  FlameIcon,
  MenuIcon,
  MoonIcon,
  ShoppingBagIcon,
  SunIcon,
} from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV = [
  { href: "#cardapio", label: "Cardápio FIT" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#desafio", label: "Desafio 30 dias" },
  { href: "#faq", label: "FAQ" },
]

export function Logo() {
  return (
    <a
      href="#topo"
      className="flex items-center gap-2"
      aria-label="BK FIT, início"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <FlameIcon className="size-5" />
      </span>
      <span className="font-display text-2xl leading-none">
        BK <span className="text-primary">FIT</span>
      </span>
    </a>
  )
}

export function SiteHeader({ cartCount }: { cartCount: number }) {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== "light"

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#cardapio">
              <ShoppingBagIcon data-icon="inline-start" />
              Pedido
              <Badge variant="secondary" className="tabular-nums">
                {cartCount}
              </Badge>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menu"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription>
                  Proteína grelhada no fogo para quem treina.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Button variant="ghost" className="justify-start" asChild>
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="mt-4" asChild>
                    <a href="#cardapio">
                      <ShoppingBagIcon data-icon="inline-start" />
                      Ver pedido ({cartCount})
                    </a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
