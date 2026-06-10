
export const InstagramFeed = () => (
    <section className="py-20 bg-mare-cream">
        <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Nosso Instagram</h2>
        <div className="flex gap-4 overflow-x-auto px-6 pb-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="min-w-[200px] aspect-[9/16] bg-white rounded-2xl shadow-sm" />
            ))}
        </div>
        <div className="text-center">
            <button className="bg-mare-navy text-white px-8 py-4 rounded-full font-bold">Seguir no Instagram</button>
        </div>
    </section>
);
