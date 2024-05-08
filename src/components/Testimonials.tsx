import { useEffect, useRef } from "react"

const testimonials = [
  {
    id: 1,
    photo: "/images/avatar-anisha.png",
    name: "Anisha Li",
    description: `“Manage has supercharged our team’s workflow. The ability to maintain 
    visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    id: 2,
    photo: "/images/avatar-ali.png",
    name: "Ali Bravo",
    description: `“We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”`,
  },
  {
    id: 3,
    photo: "/images/avatar-richard.png",
    name: "Richard Watts",
    description: `“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    id: 4,
    photo: "/images/avatar-shanai.png",
    name: "Shanai Gough",
    description: `“Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
]

export default function Testimonials() {
  const rootRef = useRef<HTMLDivElement>(null)
  const indicatorsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = { root: rootRef.current, rootMargin: "0px", threshold: 0.5 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const indexTarget = Array.from(rootRef.current!.children).indexOf(
          entry.target,
        )

        if (entry.isIntersecting) {
          indicatorsRef.current!.children[indexTarget].classList.add(
            "bg-primary-100",
          )
        } else {
          indicatorsRef.current!.children[indexTarget].classList.remove(
            "bg-primary-100",
          )
        }
      })
    }, options)

    // Add obsertions to items
    Array.from(rootRef.current!.children).forEach((child) => {
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="mb-10 xl:mb-52">
      <div>
        <h2 className="text-center text-3xl font-bold">What they’ve said</h2>

        <div
          ref={rootRef}
          className="scrolling scrollbar-hide flex items-center gap-x-6 pb-10 pt-20"
        >
          {testimonials.map((testimonial) => (
            <div
              key={crypto.randomUUID()}
              className="flex min-w-full flex-col items-center bg-neutral-100 p-6 pt-0 text-center lg:min-w-max"
            >
              <picture className="size-[4.5rem] -translate-y-1/2 overflow-hidden">
                <img
                  src={testimonial.photo}
                  alt={`${testimonial.name} profile image`}
                />
              </picture>
              <p className="font-bold">{testimonial.name}</p>
              <p className="mt-4 max-w-[28.25rem] text-sm text-neutral-300 [@media(min-width:375px)]:text-base">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <div
            ref={indicatorsRef}
            className="flex items-center gap-x-2 lg:hidden"
          >
            {testimonials.map((item) => (
              <div
                key={crypto.randomUUID()}
                className="size-2 rounded-full border border-primary-100"
              >
                <span className="hidden">{item.id}</span>
              </div>
            ))}
          </div>
          <a href="#" className="btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
