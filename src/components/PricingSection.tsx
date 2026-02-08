import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Visitante",
    description: "Para experimentar a plataforma",
    priceMonthly: "0",
    priceYearly: "0",
    features: [
      "5 artes por mês",
      "Marca d'água Midianita",
      "Templates básicos",
      "Exportação em JPG",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Ministério",
    description: "Para equipes de mídia ativas",
    priceMonthly: "49",
    priceYearly: "39",
    features: [
      "100 artes por mês",
      "Sem marca d'água",
      "Todos os templates",
      "Exportação em PNG/PDF",
      "Calendário editorial",
      "Suporte prioritário",
    ],
    cta: "Assinar Agora",
    popular: false,
  },
  {
    name: "Igreja Pro",
    description: "Para igrejas que querem o melhor",
    priceMonthly: "99",
    priceYearly: "79",
    features: [
      "Artes ilimitadas",
      "IA personalizada com sua identidade",
      "Múltiplos usuários",
      "Publicação automática",
      "Análise de desempenho",
      "Suporte VIP + Treinamento",
    ],
    cta: "Começar Pro",
    popular: true,
  },
];

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6 2xl:px-16 3xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold mt-4 mb-6">
            Planos que cabem no{" "}
            <span className="gradient-text-gold">seu orçamento</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Escolha o plano ideal para sua igreja. Sem surpresas, sem taxas escondidas.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-primary" : "bg-white/10"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
            </span>
            {isYearly && (
              <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">
                2 Meses Grátis
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.popular ? "glow-border" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">
                    R${isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "glow-button"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
