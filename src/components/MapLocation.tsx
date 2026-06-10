
export const MapSection = () => {
    const locations = [
        { 
            name: 'Jatiúca', 
            address: 'Av. Eng. Paulo Brandão Nogueira, 85 – Jatiúca, Maceió - AL',
            img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.789123456789!2d-35.719!3d-9.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzknMjguMCJTIDM1wrA0Myc4LjAiVw!5e0!3m2!1sen!2sbr!4v1654321098765!5m2!1sen!2sbr'
        },
        { 
            name: 'Praia do Francês', 
            address: 'Rua Principal, em frente à praia - Praia do Francês, Marechal Deodoro - AL',
            img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.0854378122!2d-35.845!3d-9.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDYnMzAuMCJTIDM1wrA1MCc0Mi4wIlc!5e0!3m2!1sen!2sbr!4v1654321098765!5m2!1sen!2sbr'
        }
    ];

    return (
        <section className="py-20 bg-mare-cream" id="localização">
            <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Como Chegar</h2>
            
            <div className="max-w-5xl mx-auto px-6 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62441.76458514104!2d-35.795!3d-9.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDAnMDAuMCJTIDM1wrA0NScwMC4wIlc!5e0!3m2!1sen!2sbr!4v1654321098765!5m2!1sen!2sbr" width="100%" height="100%" loading="lazy"></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
                {locations.map((loc) => (
                    <div key={loc.name} className="border border-mare-navy/10 p-6 rounded-2xl flex flex-col gap-4 bg-white">
                        <div className="w-full h-48 rounded-xl overflow-hidden bg-mare-cream">
                            <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-mare-gold">{loc.name}</h3>
                        <p className="text-mare-navy flex-grow">{loc.address}</p>
                        <div className="flex gap-4 mt-2">
                            <button className="bg-mare-gold text-white px-6 py-3 rounded-full font-bold text-sm flex-1">Ver Rota</button>
                            <button className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm flex-1">Reservar/WhatsApp</button>
                        </div>
                        <button className="bg-mare-navy/10 text-mare-navy px-6 py-3 rounded-full font-bold text-sm w-full mt-2">Avaliar unidade no Google</button>
                    </div>
                ))}
            </div>
        </section>
    );
};
