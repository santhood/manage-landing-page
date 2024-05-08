export default function Hero() {
  return (
    <section className="section relative pb-28 pt-28 xl:pt-44">
      <div className="mx-auto flex max-w-screen-md flex-col gap-y-2 xl:container xl:flex-row-reverse xl:justify-between">
        <picture>
          <img
            src="/images/illustration-intro.svg"
            alt="Illustration Intro"
            className="w-full"
          />
        </picture>
        <div className="flex flex-col items-center text-center xl:max-w-2xl xl:items-start xl:text-left">
          <h1 className="text-4xl font-bold leading-[1.2] xl:text-6xl">
            Bring everyone together to build better products.
          </h1>
          <p className="mb-8 mt-2 max-w-md text-neutral-300 xl:mt-6 xl:max-w-sm">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a href="#" className="btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
