import { motion } from "framer-motion";
import { Cross, Heart, Flame, Star, Sun, Moon } from "lucide-react";

const logos = [
  { icon: Cross, name: "Igreja Batista" },
  { icon: Heart, name: "Comunidade Cristã" },
  { icon: Flame, name: "Ministério Fogo" },
  { icon: Star, name: "Igreja Estrela" },
  { icon: Sun, name: "Nova Aurora" },
  { icon: Moon, name: "Luz do Mundo" },
  { icon: Cross, name: "Assembleia" },
  { icon: Heart, name: "Igreja do Amor" },
  { icon: Flame, name: "Avivamento" },
  { icon: Star, name: "Esperança Viva" },
];

export const SocialProof = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 2xl:px-16 3xl:px-24 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm"
        >
          Usado por ministérios de mídia em todo o Brasil
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-8 opacity-40 hover:opacity-70 transition-opacity"
              >
                <logo.icon className="w-8 h-8 text-muted-foreground" />
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
