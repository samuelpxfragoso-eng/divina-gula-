

import { useState } from 'react';
import { menuData } from '../data/menu';

export const MenuDigital = () => {
    const [active, setActive] = useState(menuData[0].title);

    return (
        <section className="py-20 bg-[#0E0E0E]" id="cardápio">
            <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Nosso Menu</h2>
            <div className="flex justify-center gap-4 mb-12 overflow-x-auto px-6 pb-2">
                {menuData.map(cat => (
                    <button 
                        key={cat.title} 
                        onClick={() => setActive(cat.title)} 
                        className={`px-6 py-2 rounded-full whitespace-nowrap ${active === cat.title ? 'bg-mare-gold text-[#0E0E0E]' : 'bg-[#1A1A1A] text-white'} font-bold transition-all`}>
                        {cat.title}
                    </button>
                ))}
            </div>
            <div className="max-w-4xl mx-auto px-6 grid gap-4">
                {menuData.find(c => c.title === active)?.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 card-premium">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-mare-gold font-bold">R$ {item.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
