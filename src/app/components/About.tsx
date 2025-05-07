export default function About() {
  const items = [
    "Com mais de 8 anos de experiência na área da saúde e atuando por 3 anos como Enfermeira Obstetra, descobri uma nova paixão pela tecnologia.",
    "Realizei uma transição de carreira, que se concretizou por meio de uma formação em desenvolvimento front-end oferecida pelo SENAI, em parceria com a Ford.",
    "Curso Análise e Desenvolvimento de Sistemas pela Estácio e atuo como desenvolvedora front-end na Maxifrota desde 2022, com foco principal em Angular.",
    "Sou entusiasta da tecnologia e estou constantemente em busca de novos aprendizados.",
    "Tenho conhecimento em Angular, React, Node.js, Java, MySQL, GraphQL e versionamento com Git/Gitflow.",
    "Além da bagagem técnica, trago comigo uma sólida capacidade de comunicação, empatia e relacionamento interpessoal",
  ];

  const colors = [
    "bg-pink-700",
    "bg-pink-600",
    "bg-pink-500",
    "bg-pink-400",
    "bg-pink-300",
    "bg-pink-200",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">
        Sobre Mim
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg text-white text-center transition-transform transform hover:scale-105 ${colors[index % colors.length]}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}