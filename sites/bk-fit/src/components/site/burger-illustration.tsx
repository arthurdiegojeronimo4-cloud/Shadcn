import { cn } from "@/lib/utils"

// Ilustração vetorial do hambúrguer. As cores são do "produto" (pão, carne,
// salada) e não do tema, por isso ficam fixas no SVG.
export function BurgerIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 260"
      role="img"
      aria-label="Ilustração do Whopper FIT Grill"
      className={cn("drop-shadow-2xl", className)}
    >
      <defs>
        <linearGradient id="bun-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9a24f" />
          <stop offset="1" stopColor="#b8642a" />
        </linearGradient>
        <linearGradient id="bun-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d98b42" />
          <stop offset="1" stopColor="#a5541f" />
        </linearGradient>
        <linearGradient id="patty" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b2f17" />
          <stop offset="1" stopColor="#3d1a0c" />
        </linearGradient>
      </defs>

      {/* pão de baixo */}
      <path
        d="M40 200h240c0 22-20 38-46 38H86c-26 0-46-16-46-38Z"
        fill="url(#bun-bottom)"
      />
      {/* carne 2 */}
      <rect x="34" y="170" width="252" height="34" rx="17" fill="url(#patty)" />
      <g stroke="#2a1006" strokeWidth="5" strokeLinecap="round" opacity=".7">
        <path d="M70 180l26 16M120 180l26 16M170 180l26 16M220 180l26 16" />
      </g>
      {/* queijo */}
      <path
        d="M38 166h244l-14 10-16 18-14-18H96l-18 22-16-22-24-10Z"
        fill="#ffc53d"
      />
      {/* carne 1 */}
      <rect x="34" y="132" width="252" height="34" rx="17" fill="url(#patty)" />
      <g stroke="#2a1006" strokeWidth="5" strokeLinecap="round" opacity=".7">
        <path d="M60 142l26 16M110 142l26 16M160 142l26 16M210 142l26 16" />
      </g>
      {/* tomate */}
      <rect x="54" y="118" width="100" height="16" rx="8" fill="#e5322d" />
      <rect x="166" y="118" width="100" height="16" rx="8" fill="#e5322d" />
      {/* cebola roxa */}
      <path
        d="M80 118c10-8 30-8 40 0M190 118c10-8 30-8 40 0"
        stroke="#b04ea0"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* alface */}
      <path
        d="M30 112c14-14 26 6 40-6s26 8 40-4 26 8 40-4 26 8 40-4 26 8 40-4 26 8 40 4l-6 14H36Z"
        fill="#5cc23b"
      />
      {/* pão de cima */}
      <path
        d="M36 108c0-56 56-88 124-88s124 32 124 88c0 6-4 8-10 8H46c-6 0-10-2-10-8Z"
        fill="url(#bun-top)"
      />
      <path
        d="M70 70c14-24 46-38 74-40"
        stroke="#fff"
        strokeOpacity=".25"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* gergelim / grãos integrais */}
      <g fill="#fbe7c4">
        <ellipse
          cx="110"
          cy="56"
          rx="6"
          ry="3"
          transform="rotate(-20 110 56)"
        />
        <ellipse cx="150" cy="44" rx="6" ry="3" transform="rotate(10 150 44)" />
        <ellipse cx="190" cy="54" rx="6" ry="3" transform="rotate(25 190 54)" />
        <ellipse cx="130" cy="78" rx="6" ry="3" transform="rotate(-5 130 78)" />
        <ellipse cx="175" cy="80" rx="6" ry="3" transform="rotate(15 175 80)" />
        <ellipse cx="220" cy="76" rx="6" ry="3" transform="rotate(30 220 76)" />
        <ellipse cx="90" cy="86" rx="6" ry="3" transform="rotate(-30 90 86)" />
      </g>
      <g fill="#7a3d16">
        <ellipse cx="128" cy="60" rx="4" ry="2" transform="rotate(30 128 60)" />
        <ellipse
          cx="205"
          cy="66"
          rx="4"
          ry="2"
          transform="rotate(-20 205 66)"
        />
        <ellipse cx="155" cy="64" rx="4" ry="2" />
      </g>
    </svg>
  )
}
