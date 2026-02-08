import { motion } from "framer-motion";
import { Image, Type, Calendar, Wand2, Palette, Share2 } from "lucide-react";

const features = [
  {
    icon: Image,
    title: "Geração de Imagens",
    description: "Crie artes profissionais para cultos, eventos e celebrações em segundos com nossa IA especializada.",
    size: "large",
    gradient: "from-primary/20 to-purple-500/20",
  },
  {
    icon: Type,
    title: "Textos & Legendas",
    description: "Copywriting automático para suas redes sociais.",
    size: "small",
    gradient: "from-accent/20 to-orange-500/20",
  },
  {
    icon: Calendar,
    title: "Calendário Editorial",
    description: "Planeje suas publicações com antecedência e mantenha sua presença online consistente.",
    size: "tall",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    icon: Wand2,
    title: "Estilos Personalizados",
    description: "Treine a IA com a identidade visual da sua igreja.",
    size: "small",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Palette,
    title: "Templates Prontos",
    description: "Centenas de modelos editáveis para todas as ocasiões.",
    size: "medium",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Share2,
    title: "Publicação Direta",
    description: "Publique diretamente nas redes sociais.",
    size: "small",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
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
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold mt-4 mb-6">
            Ferramentas de excelência para o seu{" "}
            <span className="gradient-text">ministério</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tenha em mãos ferramentas criadas especificamente para a rotina e as necessidades da mídia da igreja
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-6 gap-4 3xl:gap-6 auto-rows-[200px]">
          {/* Large Card - Geração de Imagens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-card col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between"
          >
            <div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${features[0].gradient} flex items-center justify-center mb-4`}>
                <Image className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{features[0].title}</h3>
              <p className="text-muted-foreground">{features[0].description}</p>
            </div>
            {/* Mock Gallery */}
            <div className="grid grid-cols-3 gap-2 mt-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/30 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Small Card - Textos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[1].gradient} flex items-center justify-center mb-4`}>
              <Type className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">{features[1].title}</h3>
            <p className="text-sm text-muted-foreground">{features[1].description}</p>
          </motion.div>

          {/* Small Card - Estilos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[3].gradient} flex items-center justify-center mb-4`}>
              <Wand2 className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">{features[3].title}</h3>
            <p className="text-sm text-muted-foreground">{features[3].description}</p>
          </motion.div>

          {/* Tall Card - Calendário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bento-card row-span-2 flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[2].gradient} flex items-center justify-center mb-4`}>
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{features[2].title}</h3>
              <p className="text-sm text-muted-foreground">{features[2].description}</p>
            </div>
            {/* Mini Calendar */}
            <div className="mt-4 p-4 rounded-xl bg-white/5">
              <div className="grid grid-cols-7 gap-1 text-xs text-center">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((day, i) => (
                  <span key={i} className="text-muted-foreground">{day}</span>
                ))}
                {Array.from({ length: 28 }, (_, i) => (
                  <span
                    key={i}
                    className={`p-1 rounded ${
                      [5, 12, 19, 26].includes(i + 1)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Templates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bento-card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[4].gradient} flex items-center justify-center mb-4`}>
              <Palette className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">{features[4].title}</h3>
            <p className="text-sm text-muted-foreground">{features[4].description}</p>
          </motion.div>

          {/* Small Card - Publicação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bento-card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[5].gradient} flex items-center justify-center mb-4`}>
              <Share2 className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">{features[5].title}</h3>
            <p className="text-sm text-muted-foreground">{features[5].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
