import { Star } from 'lucide-react';

export const ReviewsSection = () => (
<section className="py-20 bg-white" id="avaliações">
        <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Avaliações Google</h2>
        <p className="text-center text-mare-navy mb-10 text-2xl font-bold">4,6 / 5,0 <span className="text-base font-normal">com mais de 6,1 mil avaliações</span></p>
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6 mb-10">
            {[1, 2].map(i => (
                <div key={i} className="p-6 border border-mare-navy/10 rounded-2xl">
                    <div className="flex text-mare-gold mb-2"><Star size={20} fill="currentColor" />(5x)</div>
                    <p className="text-mare-navy">"Melhor experiência na Praia do Francês! Divina Gula é impecável."</p>
                    <p className="font-bold mt-4">- Cliente Satisfeito</p>
                </div>
            ))}
        </div>
        <div className="text-center flex gap-4 justify-center">
            <button className="bg-mare-gold text-white px-8 py-4 rounded-full font-bold">Avaliar Jatiúca</button>
            <button className="bg-mare-gold text-white px-8 py-4 rounded-full font-bold">Avaliar Praia do Francês</button>
        </div>
    </section>
);
