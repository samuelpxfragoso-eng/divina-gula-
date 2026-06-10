import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["O Restaurante", "Pizzas", "Cozinha", "Bebidas", "Localização", "Reservas"];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-mare-cream shadow-md z-50 p-6 flex justify-between items-center">
            <span className="font-display text-2xl font-bold text-mare-gold">Divina Gula</span>
            <div className="hidden md:flex gap-6">
                {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-mare-navy font-bold">{l}</a>)}
            </div>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <MenuIcon />}</button>
        </nav>
    );
};
