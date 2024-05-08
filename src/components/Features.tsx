const features = [
  {
    index: "01",
    title: "Track company-wide progress",
    description: `See how your day-to-day tasks fit into the wider vision. Go from 
    tracking progress at the milestone level all the way done to the 
    smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    index: "02",
    title: "Advanced built-in reports",
    description: `Set internal delivery estimates and track progress toward company 
    goals. Our customisable dashboard helps you build out the reports 
    you need to keep key stakeholders informed.`,
  },
  {
    index: "03",
    title: "Everything you need in one place",
    description: `Stop jumping from one service to another to communicate, store files, 
    track tasks and share documents. Manage offers an all-in-one team 
    productivity solution.`,
  },
]

export default function Features() {
  return (
    <section className="xl:section mt-8 overflow-hidden px-4 xl:mb-12">
      <div className="container flex flex-col gap-12 xl:flex-row xl:justify-between">
        <div className="text-center xl:max-w-2xl xl:text-left">
          <h2 className="text-3xl font-bold xl:text-5xl">
            What’s different about Manage?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-neutral-300 xl:mx-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <ol className="flex flex-col gap-y-10 pb-28 xl:max-w-[33.125rem]">
          {features.map((feature) => (
            <li>
              <div className="grid grid-cols-[4rem_1fr] items-center gap-4 xl:gap-x-8">
                <div className="flex justify-center rounded-full bg-primary-100 py-1 font-bold text-neutral-100">
                  {feature.index}
                </div>
                <div className="relative py-1">
                  <h3 className="font-bold">{feature.title}</h3>
                  <div className="absolute inset-0 -z-10 origin-top-left -translate-x-10 scale-x-150 bg-neutral-200 xl:hidden"></div>
                </div>
                <p className="col-span-2 text-neutral-300 md:col-[2/3]">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
