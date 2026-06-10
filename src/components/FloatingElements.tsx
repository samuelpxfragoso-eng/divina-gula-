
import { ShoppingBag } from 'lucide-react';

export const FloatingElements = () => {
  return (
    <>
      <div className="fixed top-20 left-0 right-0 z-40 bg-mare-gold text-white text-center py-2 text-sm shadow-md">
         Aberto hoje | Jatiúca e Praia do Francês | 38 anos de tradição
      </div>
      <a href="#" className="fixed bottom-6 right-6 z-50 bg-[#EA1D2C] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform">
        <ShoppingBag size={24} />
      </a>
    </>
  )
}
