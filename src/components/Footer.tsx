const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-gradient">Quorbik</span>
            </div>
            <p className="text-muted-foreground">
              Crafting Digital Excellence Since 2024
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                Bd. Traian 5, Chisinau, Moldova
              </p>
              <p className="text-muted-foreground">
                hi@quorbik.com • +373 68 78 73 16
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Quorbik. All rights reserved. Made with ❤️ in Moldova.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;