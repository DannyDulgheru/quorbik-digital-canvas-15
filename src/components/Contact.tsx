import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Eye, EyeOff } from "lucide-react";

const Contact = () => {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:hi@quorbik.com";
  };

  const handlePhoneClick = () => {
    if (isPhoneVisible) {
      window.location.href = "tel:+37368787316";
    } else {
      setIsPhoneVisible(true);
    }
  };

  return (
    <section className="py-24 px-6 relative">
      {/* 3D Background Elements for Contact Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/6 left-1/6 w-24 h-24 bg-primary/15 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-1/5 w-20 h-20 bg-secondary/15 rounded-lg shape-3d animate-float" 
             style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-accent/15 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/6 w-18 h-18 bg-primary/20 rounded-lg shape-3d-rotate" />
        <div className="absolute bottom-1/6 right-1/3 w-22 h-22 bg-secondary/10 rounded-full shape-3d animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Let's Create Something Extraordinary Together! 🤝
          </p>
          <p className="text-lg text-muted-foreground">
            Let's discuss a project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 hover-focus-group">
          <Card className="card-glow text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bd. Traian 5, Chisinau, Moldova
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-2">
                <p className="text-muted-foreground">
                  {isPhoneVisible ? "+373 68 78 73 16" : "Click to reveal phone"}
                </p>
                <button
                  onClick={() => setIsPhoneVisible(!isPhoneVisible)}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {isPhoneVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:hi@quorbik.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hi@quorbik.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Split Contact Button with 3D Background */}
        <div className="max-w-md mx-auto relative">
          {/* Additional 3D elements around the split button */}
          <div className="absolute -top-8 -left-8 w-12 h-12 bg-primary/20 rounded-full shape-3d animate-float pointer-events-none" 
               style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-accent/20 rounded-lg shape-3d animate-float pointer-events-none" 
               style={{ animationDelay: '1.8s' }} />
          
          <div className="split-button flex overflow-hidden rounded-full">
            <button
              onClick={handleEmailClick}
              className="split-button-half flex-1 py-6 px-8 text-white font-semibold text-lg flex items-center justify-center gap-3 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </button>
            <div className="w-px bg-white/20" />
            <button
              onClick={handlePhoneClick}
              className="split-button-half flex-1 py-6 px-8 text-white font-semibold text-lg flex items-center justify-center gap-3 group"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>{isPhoneVisible ? "Call" : "Reveal"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;