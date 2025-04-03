
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  // Podemos simular esses dados como estando vindo de uma API
  const allProjects = [
    {
      id: 1,
      title: "Sistema de Previsão de Demanda",
      description: "Modelo de machine learning para prever demanda de produtos com precisão de 93%, reduzindo em 35% os custos de inventário.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ia",
      tech: ["Python", "TensorFlow", "TimeSeries"],
      client: "Varejista Nacional"
    },
    {
      id: 2,
      title: "Dashboard de Performance de Vendas",
      description: "Dashboard interativo em tempo real para análise multidimensional de dados de vendas, com insights automáticos.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "data",
      tech: ["Tableau", "SQL", "ETL"],
      client: "Distribuidora Regional"
    },
    {
      id: 3,
      title: "Chatbot de Atendimento Inteligente",
      description: "Sistema de atendimento automatizado com NLP, capaz de resolver 78% das solicitações sem intervenção humana.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ia",
      tech: ["NLP", "Python", "AWS"],
      client: "Empresa de Telecom"
    },
    {
      id: 4,
      title: "Sistema de Detecção de Fraudes",
      description: "Algoritmo de detecção de padrões anômalos em transações financeiras, com redução de 65% nos falsos positivos.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "data",
      tech: ["Anomaly Detection", "R", "Big Data"],
      client: "Instituição Financeira"
    },
    {
      id: 5,
      title: "Automação de Processos Logísticos",
      description: "Solução end-to-end para otimização de rotas e gestão de frota, reduzindo custos operacionais em 28%.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "automacao",
      tech: ["Algoritmos Genéticos", "Python", "IoT"],
      client: "Empresa de Logística"
    },
    {
      id: 6,
      title: "Previsão de Manutenção Preditiva",
      description: "Sistema IoT para monitoramento em tempo real e previsão de falhas em equipamentos industriais.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "automacao",
      tech: ["IoT", "Machine Learning", "Cloud"],
      client: "Indústria Manufatureira"
    }
  ];
  
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 relative">
      <div className="grid-background absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="tech-gradient">Nossos Projetos</span>
          </h2>
          <p className="text-lads-white/80 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos de sucesso que têm ajudado empresas a 
            transformar dados em valor estratégico.
          </p>
        </div>
        
        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-lads-blue/10 border border-lads-blue/20">
              <TabsTrigger value="todos" className="data-[state=active]:bg-lads-blue data-[state=active]:text-white">
                Todos
              </TabsTrigger>
              <TabsTrigger value="ia" className="data-[state=active]:bg-lads-blue data-[state=active]:text-white">
                Inteligência Artificial
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-lads-blue data-[state=active]:text-white">
                Ciência de Dados
              </TabsTrigger>
              <TabsTrigger value="automacao" className="data-[state=active]:bg-lads-blue data-[state=active]:text-white">
                Automação
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="todos" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="bg-lads-black border-lads-cyan/20 overflow-hidden transition-all duration-300 
                           hover:border-lads-cyan/60 hover:shadow-lg hover:shadow-lads-cyan/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 
                                ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lads-black to-transparent opacity-80"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lads-white">{project.title}</CardTitle>
                    <CardDescription className="text-lads-white/60">Cliente: {project.client}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-lads-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          className="bg-lads-blue/20 text-lads-cyan hover:bg-lads-blue/30 border border-lads-blue/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="link" className="text-lads-cyan flex items-center p-0">
                      Ver detalhes <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ia" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.filter(p => p.category === 'ia').map((project) => (
                <Card 
                  key={project.id}
                  className="bg-lads-black border-lads-cyan/20 overflow-hidden transition-all duration-300 
                           hover:border-lads-cyan/60 hover:shadow-lg hover:shadow-lads-cyan/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 
                                ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lads-black to-transparent opacity-80"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lads-white">{project.title}</CardTitle>
                    <CardDescription className="text-lads-white/60">Cliente: {project.client}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-lads-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          className="bg-lads-blue/20 text-lads-cyan hover:bg-lads-blue/30 border border-lads-blue/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="link" className="text-lads-cyan flex items-center p-0">
                      Ver detalhes <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.filter(p => p.category === 'data').map((project) => (
                <Card 
                  key={project.id}
                  className="bg-lads-black border-lads-cyan/20 overflow-hidden transition-all duration-300 
                           hover:border-lads-cyan/60 hover:shadow-lg hover:shadow-lads-cyan/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 
                                ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lads-black to-transparent opacity-80"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lads-white">{project.title}</CardTitle>
                    <CardDescription className="text-lads-white/60">Cliente: {project.client}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-lads-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          className="bg-lads-blue/20 text-lads-cyan hover:bg-lads-blue/30 border border-lads-blue/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="link" className="text-lads-cyan flex items-center p-0">
                      Ver detalhes <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automacao" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.filter(p => p.category === 'automacao').map((project) => (
                <Card 
                  key={project.id}
                  className="bg-lads-black border-lads-cyan/20 overflow-hidden transition-all duration-300 
                           hover:border-lads-cyan/60 hover:shadow-lg hover:shadow-lads-cyan/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 
                                ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lads-black to-transparent opacity-80"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lads-white">{project.title}</CardTitle>
                    <CardDescription className="text-lads-white/60">Cliente: {project.client}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-lads-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          className="bg-lads-blue/20 text-lads-cyan hover:bg-lads-blue/30 border border-lads-blue/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="link" className="text-lads-cyan flex items-center p-0">
                      Ver detalhes <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
