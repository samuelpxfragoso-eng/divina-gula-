
import { Star } from 'lucide-react';

export const TripAdvisorReviews = () => (
    <section className="py-20 bg-white" id="tripadvisor">
        <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Avaliações no TripAdvisor</h2>
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
                <div key={i} className="p-6 border border-mare-navy/10 rounded-2xl">
                    <div className="flex text-mare-gold mb-2"><Star size={20} fill="currentColor" />(5x)</div>
                    <p className="text-mare-navy">"Experiência incrível, atendimento nota 10, com certeza voltaremos!"</p>
                    <p className="font-bold mt-4">- Viajante</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-10">
            <button className="bg-[#34E0A1] text-white px-8 py-4 rounded-full font-bold">Ver no TripAdvisor</button>
        </div>
    </section>
);
