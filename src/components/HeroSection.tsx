
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop" 
          alt="Restaurante background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-mare-navy/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="mb-8 flex justify-center">
             <img src="https://res.cloudinary.com/dnkggulhp/image/upload/v1779817182/WhatsApp_Image_2026-05-26_at_11.36.41_AM_1_peyg5v.jpg" alt="Logo" className="w-24 h-24 rounded-full border-4 border-mare-gold" />
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-mare-gold mb-6">Divina Gula</h1>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">O sabor marcante da culinária mineira com o frescor de Alagoas. Com 38 anos de tradição em Maceió.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-[#EA1D2C] text-white px-8 py-4 rounded-full font-bold uppercase flex items-center justify-center gap-2">
            <ShoppingBag size={20} /> Pedir pelo iFood
          </a>
          <a href="#" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase flex items-center justify-center gap-2">
            <MessageCircle size={20} /> Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
