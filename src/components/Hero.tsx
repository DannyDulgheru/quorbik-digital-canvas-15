import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-lg shape-3d animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/20 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/30 rounded-lg shape-3d-rotate" />
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-secondary/15 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Crafting Narratives,</span>
            <br />
            <span className="text-foreground">Building Brands,</span>
            <br />
            <span className="text-glow">Shaping Digital Worlds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Innovative & Adaptive Hybrid Agency
          </p>
          
          <div className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">Quorbik</span>, we drive forward a diverse range of creative projects, 
            platforms, and campaigns with one mission: to deliver meaningful impact.
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="hero-gradient text-primary-foreground hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-primary/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;