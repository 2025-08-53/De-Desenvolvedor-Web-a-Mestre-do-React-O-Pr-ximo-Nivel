import CardDepoimento from "../components/CardDepoimento";

function Depoimentos() {
  const listaDepoimentos = [
    {
      nome: "Carlos Silva",
      texto: "Atendimento excepcional e solução rápida para meu caso."
    },
    {
      nome: "Fernanda Oliveira",
      texto: "Profissionalismo e transparência durante todo o processo."
    },
    {
      nome: "Marcos Pereira",
      texto: "Equipe altamente qualificada e comprometida."
    }
  ];

  return (
    <section className="depoimentos">
      <div className="container">
        <h2 className="section-title">O que nossos clientes dizem</h2>

        <div className="depoimentos-grid">
          {listaDepoimentos.map((item, index) => (
            <CardDepoimento
              key={index}
              nome={item.nome}
              texto={item.texto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;