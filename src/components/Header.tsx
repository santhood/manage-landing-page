import { useState } from "react"

const links = [
  { route: "#", label: "Pricing" },
  { route: "#", label: "  Product" },
  { route: "#", label: "  About Us" },
  { route: "#", label: "  Careers" },
  { route: "#", label: "  Community" },
]

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    document.body.classList.toggle("block-scroll")
    window.scrollTo(0, 0)
    setShowMenu((prev) => !prev)
  }

  return (
    <header className="section absolute inset-x-0 top-0 z-50 flex h-24 items-center xl:h-32">
      <div className="container w-full">
        <div className="flex items-center justify-between">
          <a href="/" className="w-32">
            <img src="/images/logo.svg" alt="Mange Logo" />
          </a>

          <div
            className={`${showMenu ? "block" : "hidden"} absolute inset-x-0 top-full z-10 h-dvh translate-y-0.5 px-6 lg:relative lg:top-0 lg:block lg:h-auto lg:px-0`}
          >
            <ul className="flex flex-col items-center gap-x-8 gap-y-5 rounded-md bg-neutral-100 p-8 font-bold shadow-[0px_-20px_60px_rgba(0,0,0,0.15)] lg:flex-row lg:bg-transparent lg:p-0 lg:font-normal lg:shadow-none">
              {links.map((link) => (
                <li key={crypto.randomUUID()}>
                  <a
                    href={link.route}
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="hover:text-neutral-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              onClick={handleClick}
              className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-neutral-400/70 lg:hidden"
            ></div>
          </div>

          <div className="hidden text-sm lg:block">
            <a href="#" className="btn-primary">
              Get Started
            </a>
          </div>

          <button type="button" onClick={handleClick} className="lg:hidden">
            {showMenu ? (
              <img src="/images/icon-close.svg" alt="Icon open menu" />
            ) : (
              <img src="/images/icon-hamburger.svg" alt="Icon open menu" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
