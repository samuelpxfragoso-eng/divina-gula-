
export const FAQSection = () => {
    const faqs = [
        'Qual o horário de funcionamento?',
        'Possui estacionamento?',
        'Aceita pet?',
        'O restaurante é acessível?',
        'Como faço uma reserva?',
        'Aceita cartões?',
        'Tem opções vegetarianas?',
        'Posso comemorar aniversário?',
        'Possui área kids?',
        'O estabelecimento é climatizado?'
    ];
    return (
        <section className="py-20 bg-mare-cream" id="faq">
            <h2 className="text-4xl text-mare-gold font-display text-center mb-10">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto px-6">
                {faqs.map((q, i) => (
                    <div key={i} className="mb-4 bg-white p-4 rounded-xl shadow-sm border border-mare-navy/5">
                        <h3 className="font-bold text-mare-navy">{q}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
