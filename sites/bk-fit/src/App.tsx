import * as React from "react"
import { toast } from "sonner"

import { Toaster } from "@/components/ui/sonner"
import { Challenge } from "@/components/site/challenge"
import { Faq } from "@/components/site/faq"
import { Features } from "@/components/site/features"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { MenuSection } from "@/components/site/menu-section"
import { Newsletter } from "@/components/site/newsletter"
import { ProteinCalculator } from "@/components/site/protein-calculator"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { Testimonials } from "@/components/site/testimonials"
import type { MenuItem } from "@/data/menu"

export function App() {
  const [cart, setCart] = React.useState<MenuItem[]>([])

  const addToCart = React.useCallback((item: MenuItem) => {
    setCart((current) => [...current, item])
    toast.success(`${item.name} adicionado`, {
      description: `+${item.protein}g de proteína no seu pedido.`,
    })
  }, [])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader cartCount={cart.length} />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Features />
        <MenuSection onAdd={addToCart} />
        <ProteinCalculator onAdd={addToCart} />
        <Challenge />
        <Testimonials />
        <Faq />
        <Newsletter />
      </main>
      <SiteFooter />
      <Toaster position="bottom-center" richColors />
    </div>
  )
}

export default App
