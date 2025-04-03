
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: i % 5 === 0 ? '#00DCFF' : i % 3 === 0 ? '#004EF8' : '#1C21BE',
        });
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 220, 255, ${0.1 - distance / 1200})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;

        if (particles[i].x > canvas.width || particles[i].x < 0) {
          particles[i].speedX = -particles[i].speedX;
        }

        if (particles[i].y > canvas.height || particles[i].y < 0) {
          particles[i].speedY = -particles[i].speedY;
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        ctx.fillStyle = particles[i].color;
        ctx.fill();
      }
      
      connectParticles();
      updateParticles();
      requestAnimationFrame(drawParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    drawParticles();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-6 py-20 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 animate-float">
            <img src="/lovable-uploads/2ec8f5c0-022d-4c9d-b331-bba323e0067b.png" alt="LADS Icon" className="h-24 md:h-32" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="tech-gradient">LADS</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl mb-6 text-lads-white">
            Liga de Inteligência Artificial e Ciência de Dados
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-lads-white/80 max-w-3xl">
            Transformando dados em decisões estratégicas, acelerando processos e impulsionando a inovação com soluções inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-lads-blue hover:bg-lads-blue-light text-white px-8 py-6 text-lg">
              Conheça nossos serviços <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="border-lads-cyan text-lads-cyan hover:bg-lads-cyan/10 px-8 py-6 text-lg">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
