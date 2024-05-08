import { Fragment } from "react/jsx-runtime"
import "@fontsource/be-vietnam-pro"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </Fragment>
  )
}
