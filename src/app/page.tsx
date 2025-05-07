'use client'

import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}