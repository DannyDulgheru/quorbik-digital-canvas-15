import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <img src={logoWhite} alt="Quorbik Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-gradient">Quorbik</span>
            </div>
            <p className="text-muted-foreground">
              Crafting Digital Excellence Since 2025
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                Bd. Traian 5, Chisinau, Moldova
              </p>
              <p className="text-muted-foreground">
                hi@quorbik.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Quorbik. All rights reserved. Made with ❤️ in Moldova.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;