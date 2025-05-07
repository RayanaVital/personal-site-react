import Image from "next/image";

export default function About() {
  const content = `
    Com mais de 8 anos de experiência na área da saúde e atuando por 3 anos como Enfermeira Obstetra, descobri uma nova paixão pela tecnologia.
    Realizei uma transição de carreira, que se concretizou por meio de uma formação em desenvolvimento front-end oferecida pelo SENAI, em parceria com a Ford.
    Curso Análise e Desenvolvimento de Sistemas pela Estácio e atuo como desenvolvedora front-end na Maxifrota desde 2022, com foco principal em Angular.
    Sou entusiasta da tecnologia e estou constantemente em busca de novos aprendizados.
    Tenho conhecimento em Angular, React, Node.js, Java, MySQL, GraphQL e versionamento com Git/Gitflow.
    Além da bagagem técnica, trago comigo uma sólida capacidade de comunicação, empatia e relacionamento interpessoal.
  `;

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">
        Sobre Mim
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg relative overflow-hidden group">
        {/* Imagem com animação */}
        <div className="absolute -top-10 -right-10 w-40 h-40 md:w-60 md:h-60 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <Image
            src="/img/controller.png"
            alt="Controlador"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Conteúdo do card */}
        <p className="text-gray-700 text-lg leading-relaxed relative z-10">
          {content}
        </p>
      </div>
    </section>
  );
}