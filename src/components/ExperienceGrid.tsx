import { Pizza, Wine, Utensils } from 'lucide-react';

export const ExperienceGrid = () => (
    <section className="py-20 bg-mare-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ { title: 'Pizzas', icon: Pizza }, { title: 'Bebidas', icon: Wine }, { title: 'Cozinha', icon: Utensils } ].map(item => (
                <div key={item.title} className="bg-white p-10 rounded-2xl text-center shadow-sm">
                    <item.icon size={48} className="mx-auto text-mare-gold mb-4" />
                    <h3 className="text-2xl font-display font-bold text-mare-navy">{item.title}</h3>
                </div>
            ))}
        </div>
    </section>
);
