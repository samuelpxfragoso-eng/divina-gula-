
import { motion } from 'motion/react';

export const FamousGuests = () => (
    <section className="py-20 bg-white overflow-hidden">
        <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Personalidades que nos visitaram</h2>
        <p className="text-center text-mare-navy mb-12 max-w-2xl mx-auto px-6">
            Mais do que servir pratos premiados, construímos um ponto de encontro para a cultura, a arte e o entretenimento nacional.
        </p>
        <motion.div 
            className="flex gap-6 px-6 max-w-5xl mx-auto pb-4"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
            {[
                'Luciano Huck', 'Djavan', 'Susana Vieira', 'Fábio Porchat', 
                'Elba Ramalho', 'Drauzio Varella'
            ].map((guest, i) => (
                <div key={i} className="min-w-[150px] aspect-[9/16] text-center shrink-0">
                    <div className="w-full h-full bg-mare-cream rounded-2xl mb-4 border-2 border-mare-gold flex items-center justify-center font-bold text-mare-gold">
                        {guest.split(' ').map(n => n[0]).join('')}
                    </div>
                </div>
            ))}
        </motion.div>
    </section>
);
