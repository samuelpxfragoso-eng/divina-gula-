
import { motion } from 'motion/react';

export const VideoCarousel = () => {
    return (
        <section className="py-20 bg-mare-cream overflow-hidden">
            <h2 className="text-center text-3xl font-display text-mare-gold mb-10">Momentos Divina Gula</h2>
            <motion.div 
                className="flex gap-4 px-6"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
                    <div key={index} className="min-w-[250px] aspect-[9/16] bg-mare-navy rounded-2xl overflow-hidden shrink-0">
                        <img src={`https://picsum.photos/seed/${i}/400/700`} alt="Moment" className="w-full h-full object-cover" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};
