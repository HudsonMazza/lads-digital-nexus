
import { Badge } from "@/components/ui/badge";
import { 
  CircuitBoard, 
  Database, 
  Bot, 
  BarChart3, 
  Cpu, 
  LineChart,
  AreaChart,
  Network 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Database className="h-12 w-12 text-lads-cyan" />,
      title: "Ciência de Dados",
      description: "Transformamos grandes volumes de dados em insights acionáveis, utilizando técnicas avançadas de análise estatística e visualização.",
      tags: ["Mineração de Dados", "Data Cleaning", "Visualização"]
    },
    {
      id: 2,
      icon: <Bot className="h-12 w-12 text-lads-cyan" />,
      title: "Inteligência Artificial",
      description: "Desenvolvemos sistemas inteligentes que aprendem e se adaptam, potencializando a tomada de decisões em tempo real.",
      tags: ["Machine Learning", "Deep Learning", "NLP"]
    },
    {
      id: 3,
      icon: <Cpu className="h-12 w-12 text-lads-cyan" />,
      title: "Automação de Processos",
      description: "Criamos soluções para automatizar tarefas repetitivas, aumentando a eficiência operacional e reduzindo erros humanos.",
      tags: ["RPA", "Workflows", "Integração"]
    },
    {
      id: 4,
      icon: <BarChart3 className="h-12 w-12 text-lads-cyan" />,
      title: "Business Intelligence",
      description: "Implementamos dashboards e relatórios interativos que oferecem visibilidade em tempo real sobre o desempenho do negócio.",
      tags: ["KPIs", "Dashboards", "ETL"]
    },
    {
      id: 5,
      icon: <LineChart className="h-12 w-12 text-lads-cyan" />,
      title: "Análise Preditiva",
      description: "Utilizamos algoritmos avançados para prever tendências, comportamentos e resultados futuros com base em dados históricos.",
      tags: ["Previsão", "Modelagem", "Séries Temporais"]
    },
    {
      id: 6,
      icon: <Network className="h-12 w-12 text-lads-cyan" />,
      title: "Sistemas Inteligentes",
      description: "Desenvolvemos softwares sob medida que integram IA e análise de dados para resolver problemas complexos de negócio.",
      tags: ["Customização", "Arquitetura", "Integração"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-lads-black/95 relative">
      <div className="absolute inset-0 bg-gradient-radial from-lads-blue/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="tech-gradient">Nossos Serviços</span>
          </h2>
          <p className="text-lads-white/80 max-w-3xl mx-auto">
            Oferecemos soluções de ponta em inteligência artificial e ciência de dados para impulsionar 
            sua transformação digital e criar vantagens competitivas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gradient-to-br from-lads-blue/5 to-lads-cyan/5 backdrop-blur-sm border border-lads-cyan/20 
                        rounded-xl p-6 transition-all duration-300 hover:border-lads-cyan/50 hover:shadow-lg 
                        hover:shadow-lads-cyan/10 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-lads-white group-hover:text-lads-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-lads-white/70 mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    className="bg-lads-blue/20 text-lads-cyan hover:bg-lads-blue/30 border border-lads-blue/40"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
