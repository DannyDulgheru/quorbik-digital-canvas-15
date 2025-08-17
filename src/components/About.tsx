const About = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient">Quorbik</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 card-glow">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              <span className="text-primary font-semibold">Quorbik</span>, based in Chisinau, offers premier IT services including web development, 
              2D and 3D animation, brand book creation, and comprehensive IT solutions. Our expert team delivers 
              innovative, high-quality results tailored to your needs.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We pride ourselves on our client-centric approach, ensuring your satisfaction through customized, 
              effective solutions. Ready to elevate your digital presence?
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-gradient">
              Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default About;