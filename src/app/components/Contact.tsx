export default function Contact() {
    return (
      <section id="contact" className="min-h-screen py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-pink-600 text-center">Contato</h2>
        <p className="mt-4 text-center text-gray-700">Me mande uma mensagem ou conecte-se comigo nas redes sociais!</p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/RayanaVital" target="_blank" className="text-pink-600">GitHub</a>
          <a href="https://www.linkedin.com/in/rayanavital/" target="_blank" className="text-pink-600">LinkedIn</a>
        </div>
      </section>
    )
  }