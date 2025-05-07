export default function Projects() {
    return (
      <section id="projects" className="min-h-screen py-20 px-4 bg-pink-100">
        <h2 className="text-3xl font-bold text-pink-600 text-center">Projetos</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Substitua pelos seus projetos reais */}
          <div className="p-4 bg-white rounded shadow text-gray-800">
            <h3 className="font-bold text-lg">Projeto com React</h3>
            <p className="mt-2 text-sm">Aplicação de tarefas com React + Tailwind.</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-gray-800">
            <h3 className="font-bold text-lg">Projeto com Angular</h3>
            <p className="mt-2 text-sm">Dashboard de clientes com Angular + Material.</p>
          </div>
        </div>
      </section>
    )
  }