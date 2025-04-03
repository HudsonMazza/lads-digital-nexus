
import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 px-6 border-b border-lads-cyan/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img src="/lovable-uploads/d59d2842-b46f-45ab-a006-2cc54e7281d8.png" alt="LADS Logo" className="h-10" />
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-lads-white hover:text-lads-cyan transition-colors">Início</a>
          <a href="#sobre" className="text-lads-white hover:text-lads-cyan transition-colors">Sobre</a>
          <a href="#servicos" className="text-lads-white hover:text-lads-cyan transition-colors">Serviços</a>
          <a href="#projetos" className="text-lads-white hover:text-lads-cyan transition-colors">Projetos</a>
          <a href="#contato" className="text-lads-white hover:text-lads-cyan transition-colors">Contato</a>
          <Button className="bg-lads-blue hover:bg-lads-blue-light text-white">
            Fale Conosco <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-lads-cyan/20 py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-6">
            <a href="#inicio" className="text-lads-white hover:text-lads-cyan py-2 transition-colors" onClick={toggleMenu}>Início</a>
            <a href="#sobre" className="text-lads-white hover:text-lads-cyan py-2 transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href="#servicos" className="text-lads-white hover:text-lads-cyan py-2 transition-colors" onClick={toggleMenu}>Serviços</a>
            <a href="#projetos" className="text-lads-white hover:text-lads-cyan py-2 transition-colors" onClick={toggleMenu}>Projetos</a>
            <a href="#contato" className="text-lads-white hover:text-lads-cyan py-2 transition-colors" onClick={toggleMenu}>Contato</a>
            <Button className="bg-lads-blue hover:bg-lads-blue-light text-white w-full">
              Fale Conosco <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
