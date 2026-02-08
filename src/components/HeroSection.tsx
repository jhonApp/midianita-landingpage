import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Wand2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const DEMO_ITEMS = [
  {
    image: "/demo-jovens-purple-1.png",
    prompt: "Culto de Jovens elegante, tipografia bold, foto P&B dramática...",
    tag: "Sofisticado",
    color: "purple",
  },
  {
    image: "/demo-jovens-yellow-1.png",
    prompt: "Sábado dos Jovens vibrante, energia urbana, código de barras, amarelo intenso...",
    tag: "Urbano",
    color: "yellow",
  },
  {
    image: "/demo-jovens-acoustic-1.png",
    prompt: "Noite de Louvor acústico, violão, estilo mixed media, yellow & black...",
    tag: "Artístico",
    color: "yellow",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const currentItem = DEMO_ITEMS[currentIndex];

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let revealTimeout: NodeJS.Timeout;
    let viewingTimeout: NodeJS.Timeout;

    // Reset state for new item
    setTypedText("");
    setIsTyping(true);
    setShowImage(false);

    // Typing Phase
    let charIndex = 0;
    typingInterval = setInterval(() => {
      if (charIndex <= currentItem.prompt.length) {
        setTypedText(currentItem.prompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Generation Phase (wait 500ms then reveal)
        revealTimeout = setTimeout(() => {
          setShowImage(true);

          // Viewing Phase (hold for 3.5 seconds then move to next)
          viewingTimeout = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % DEMO_ITEMS.length);
          }, 3500);
        }, 500);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(revealTimeout);
      clearTimeout(viewingTimeout);
    };
  }, [currentIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-aurora" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-5 2xl:px-16 3xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 3xl:gap-32 items-center max-w-[1800px] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card text-lg font-medium text-muted-foreground mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Potencializado por Inteligência Artificial</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-7xl 3xl:text-8xl font-bold leading-tight mb-6">
              Eleve a comunicação da sua igreja a um novo nível de
              <span className="gradient-text"> excelência.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg 2xl:text-xl 3xl:text-2xl text-muted-foreground mb-8 max-w-xl 3xl:max-w-2xl mx-auto lg:mx-0">
              A única Inteligência Artificial que entende a rotina de um midianita. Crie banners, posts e carrosséis com qualidade visual e profundidade bíblica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="glow-button flex items-center justify-center gap-2 text-lg">
                Começar Grátis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/10 text-foreground font-medium hover:bg-white/5 transition-all duration-300">
                Ver Demonstração
              </button>
            </div>
          </motion.div>

          {/* Right - Mock Interface with Dynamic Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="backdrop-blur-xl border border-white/10 bg-slate-900/80 rounded-2xl p-6 3xl:p-8 max-w-lg 3xl:max-w-2xl mx-auto shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground ml-4">Midianita Studio</span>
              </div>

              {/* Prompt Input */}
              <div className="glass-card p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Descreva sua arte:</p>
                <div className="flex items-center min-h-[24px]">
                  <p className="text-foreground">
                    {typedText}
                    {isTyping && <span className="animate-blink text-primary">|</span>}
                  </p>
                </div>
              </div>

              {/* Image Container with Reveal Animation */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                <AnimatePresence mode="wait">
                  {!showImage ? (
                    // Loading State
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <Loader2 className="w-12 h-12 text-primary animate-spin mb-3" />
                      <p className="text-sm text-muted-foreground">Gerando pixels...</p>
                    </motion.div>
                  ) : (
                    // Image Reveal with Zoom Out Effect
                    <motion.img
                      key={`image-${currentIndex}`}
                      src={currentItem.image}
                      alt={currentItem.tag}
                      initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Style Tag */}
              <div className="flex gap-2 mt-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentItem.tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`px-3 py-1 text-xs rounded-full border ${
                      currentItem.color === "blue"
                        ? "bg-blue-500/20 border-blue-500/30 text-blue-300"
                        : currentItem.color === "yellow"
                        ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-300"
                        : "bg-purple-500/20 border-purple-500/30 text-purple-300"
                    }`}
                  >
                    {currentItem.tag}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-4 hidden lg:block"
            >
              <p className="text-xs text-muted-foreground">Tempo de criação</p>
              <p className="text-lg font-bold text-primary">~8 segundos</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
