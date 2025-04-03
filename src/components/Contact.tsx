
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulando envio para uma API
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  }

  return (
    <section id="contato" className="py-24 bg-lads-blue/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="tech-gradient">Contato</span>
          </h2>
          <p className="text-lads-white/80 max-w-3xl mx-auto">
            Entre em contato para saber como podemos ajudar sua empresa a transformar dados em resultados concretos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-lads-blue/10 to-lads-cyan/5 backdrop-blur-sm 
                        border border-lads-cyan/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-lads-cyan">Envie uma mensagem</h3>
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-lads-white mb-2">Mensagem Enviada!</h4>
                <p className="text-lads-white/70 text-center">
                  Obrigado pelo seu contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lads-white">Nome</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome" 
                              {...field} 
                              className="bg-lads-black/50 border-lads-blue/30 focus:border-lads-cyan text-lads-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lads-white">E-mail</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="seu.email@exemplo.com" 
                              {...field} 
                              type="email"
                              className="bg-lads-black/50 border-lads-blue/30 focus:border-lads-cyan text-lads-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lads-white">Assunto</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Assunto da mensagem" 
                            {...field} 
                            className="bg-lads-black/50 border-lads-blue/30 focus:border-lads-cyan text-lads-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lads-white">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Sua mensagem aqui..." 
                            {...field} 
                            rows={5}
                            className="bg-lads-black/50 border-lads-blue/30 focus:border-lads-cyan text-lads-white resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-lads-blue hover:bg-lads-blue-light text-white w-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"} 
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-lads-blue/10 to-lads-cyan/5 backdrop-blur-sm 
                          border border-lads-cyan/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-lads-cyan">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lads-blue/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-lads-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lads-white mb-1">Email</h4>
                    <p className="text-lads-white/70">contato@lads.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lads-blue/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-lads-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lads-white mb-1">Telefone</h4>
                    <p className="text-lads-white/70">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lads-blue/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-lads-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lads-white mb-1">Endereço</h4>
                    <p className="text-lads-white/70">
                      Av. Tecnologia, 1000<br />
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-lads-blue/10 to-lads-cyan/5 backdrop-blur-sm 
                          border border-lads-cyan/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-lads-cyan">Horário de Atendimento</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-lads-blue/20 pb-3">
                  <span className="text-lads-white font-medium">Segunda-Sexta</span>
                  <span className="text-lads-white/70">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-lads-blue/20 pb-3">
                  <span className="text-lads-white font-medium">Sábado</span>
                  <span className="text-lads-white/70">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lads-white font-medium">Domingo</span>
                  <span className="text-lads-white/70">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
