
import { Database, BrainCircuit, LineChart, CircuitBoard } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="tech-gradient">Quem Somos</span>
          </h2>
          <p className="text-lads-white/80 max-w-3xl mx-auto">
            A LADS é uma liga acadêmica de inteligência artificial e ciência de dados, 
            especializada no desenvolvimento de softwares inteligentes e automações para empresas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-lads-cyan">Nossa Missão</h3>
            <p className="text-lads-white/80 mb-6">
              Nosso propósito é transformar dados em decisões estratégicas, acelerando processos e 
              impulsionando a inovação. Combinamos expertise técnica com compreensão profunda dos 
              desafios de negócios para entregar soluções que geram valor real.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-lads-blue/10 rounded-lg border border-lads-blue/20">
                <Database className="h-10 w-10 text-lads-cyan mb-3" />
                <h4 className="font-semibold mb-2">Ciência de Dados</h4>
                <p className="text-sm text-lads-white/70">Análise avançada para insights valiosos</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-lads-blue/10 rounded-lg border border-lads-blue/20">
                <BrainCircuit className="h-10 w-10 text-lads-cyan mb-3" />
                <h4 className="font-semibold mb-2">Inteligência Artificial</h4>
                <p className="text-sm text-lads-white/70">Soluções inteligentes e adaptativas</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-lads-blue/10 rounded-lg border border-lads-blue/20">
                <LineChart className="h-10 w-10 text-lads-cyan mb-3" />
                <h4 className="font-semibold mb-2">Análise Preditiva</h4>
                <p className="text-sm text-lads-white/70">Previsões baseadas em dados históricos</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-lads-blue/10 rounded-lg border border-lads-blue/20">
                <CircuitBoard className="h-10 w-10 text-lads-cyan mb-3" />
                <h4 className="font-semibold mb-2">Automação</h4>
                <p className="text-sm text-lads-white/70">Processos otimizados e eficientes</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-lads-blue to-lads-cyan p-1 rounded-lg">
                <div className="bg-lads-black rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/f469af30-5c57-4ec3-8912-941c25588a98.png" 
                    alt="LADS Logo" 
                    className="w-full h-auto rounded-lg" 
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lads-blue-light/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lads-cyan/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
