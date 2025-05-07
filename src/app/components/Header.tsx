export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3 text-pink-600">
        <h1 className="font-bold text-xl">Rayana Vital - Desenvolvedora de Software</h1>
        <div className="space-x-4">
          <button onClick={() => scrollToSection('hero')}>Início</button>
          <button onClick={() => scrollToSection('about')}>Sobre</button>
          <button onClick={() => scrollToSection('projects')}>Projetos</button>
          <button onClick={() => scrollToSection('contact')}>Contato</button>
        </div>
      </nav>
    </header>
  )
}