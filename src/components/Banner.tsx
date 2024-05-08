export default function Banner() {
  return (
    <div className="relative z-10 flex h-[400px] items-center justify-center overflow-hidden bg-primary-100 px-4 text-neutral-100 xl:h-[250px]">
      <div className="container flex w-full flex-col items-center gap-y-8 xl:flex-row xl:justify-between">
        <h2 className="text-4xl font-bold xl:max-w-lg">
          Simplify how your team works today.
        </h2>
        <a href="#" className="btn-primary--contrast">
          Get Started
        </a>
      </div>
      <picture className="absolute inset-0 -z-10 xl:rotate-180">
        <source
          media="(min-width: 1280px)"
          srcSet="/images/bg-simplify-section-desktop.svg"
        />
        <img
          src="/images/bg-simplify-section-mobile.svg"
          alt=""
          className="-translate-x-[10%] pt-10 xl:size-full xl:object-cover xl:pt-0"
        />
      </picture>
    </div>
  )
}
