import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = () => {
    const links = ["O Restaurante", "Pizzas", "Cozinha", "Bebidas", "Localização", "Reservas"];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#0E0E0E]/80 backdrop-blur-md shadow-lg z-50 p-6 flex justify-between items-center border-b border-white/10">
            <span className="font-display text-2xl font-bold text-mare-gold">Divina Gula</span>
            <div className="hidden md:flex gap-6">
                {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-white hover:text-mare-gold transition-colors font-bold">{l}</a>)}
            </div>
            <a href="#" className="btn-cta px-6 py-2 text-sm italic">Pedir Agora</a>
        </nav>
    );
};
