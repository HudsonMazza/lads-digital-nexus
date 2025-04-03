
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lads-black/95 border-t border-lads-blue/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <img src="/lovable-uploads/72775a57-6bc6-4953-864f-cb3f1798e289.png" alt="LADS Logo" className="h-12 mb-4" />
              <p className="text-lads-white/70 text-sm text-center md:text-left">
                Transformando dados em decisões estratégicas através de inteligência artificial e ciência de dados.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-lads-white mb-4 text-center md:text-left">Navegação</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#inicio" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-lads-white mb-4 text-center md:text-left">Serviços</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Ciência de Dados</a></li>
              <li><a href="#" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Inteligência Artificial</a></li>
              <li><a href="#" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Automação</a></li>
              <li><a href="#" className="text-lads-white/70 hover:text-lads-cyan transition-colors">Business Intelligence</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-lads-white mb-4 text-center md:text-left">Contato</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-lads-white/70">contato@lads.ai</li>
              <li className="text-lads-white/70">+55 (11) 99999-9999</li>
              <li className="text-lads-white/70">São Paulo, Brasil</li>
            </ul>
            
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="bg-lads-blue/20 p-2 rounded-full hover:bg-lads-blue/40 transition-colors">
                <Instagram className="h-5 w-5 text-lads-cyan" />
              </a>
              <a href="#" className="bg-lads-blue/20 p-2 rounded-full hover:bg-lads-blue/40 transition-colors">
                <Twitter className="h-5 w-5 text-lads-cyan" />
              </a>
              <a href="#" className="bg-lads-blue/20 p-2 rounded-full hover:bg-lads-blue/40 transition-colors">
                <Linkedin className="h-5 w-5 text-lads-cyan" />
              </a>
              <a href="#" className="bg-lads-blue/20 p-2 rounded-full hover:bg-lads-blue/40 transition-colors">
                <Github className="h-5 w-5 text-lads-cyan" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-lads-blue/20 mt-12 pt-8 text-center">
          <p className="text-lads-white/60 text-sm">
            &copy; {currentYear} LADS - Liga de Inteligência Artificial e Ciência de Dados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
