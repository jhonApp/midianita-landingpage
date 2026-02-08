import { motion } from "framer-motion";
import { X, Check, Zap, Clock, DollarSign, Target, Heart, Brain } from "lucide-react";

const otherTools = [
  { icon: Clock, text: "Horas aprendendo ferramentas complexas" },
  { icon: DollarSign, text: "Assinaturas caras de múltiplos softwares" },
  { icon: Target, text: "Templates genéricos que não refletem sua identidade" },
  { icon: Brain, text: "Conhecimento técnico de design necessário" },
];

const midianitaFeatures = [
  { icon: Zap, text: "Artes prontas em segundos, sem curva de aprendizado" },
  { icon: DollarSign, text: "Tudo em uma plataforma com preço justo" },
  { icon: Heart, text: "IA treinada especificamente para igrejas" },
  { icon: Target, text: "Resultados profissionais sem ser designer" },
];

export const ComparisonSection = () => {
  return (
    <section id="gallery" className="py-24 relative">
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
            Comparativo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold mt-4 mb-6">
            Por que escolher o{" "}
            <span className="gradient-text">Midianita</span>?
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground">Outras Ferramentas</h3>
            </div>
            <ul className="space-y-4">
              {otherTools.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Midianita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 glow-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Midianita</h3>
            </div>
            <ul className="space-y-4">
              {midianitaFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
