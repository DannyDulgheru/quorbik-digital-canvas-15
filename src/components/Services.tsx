import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Motion Design",
    description: "Transform your ideas into dynamic visuals with our motion design services. We specialize in 2D animation, banner animation, GIF creation, and more, bringing your brand to life through engaging and eye-catching motion graphics.",
    rating: 5,
    icon: "🎬"
  },
  {
    title: "IT Solutions",
    description: "From web development and design to hosting, maintenance, and support, our IT solutions cover every aspect of your digital presence. We provide tailored services to ensure your online platforms are secure, efficient, and visually appealing.",
    rating: 5,
    icon: "💻"
  },
  {
    title: "Graphic Design",
    description: "Our graphic design services include product design, web design, logo creation, brand books, covers, and artworks. We craft visually stunning designs that align with your brand's identity and resonate with your target audience.",
    rating: 5,
    icon: "🎨"
  },
  {
    title: "3D Renders",
    description: "Enhance your digital content with our 3D rendering services. We create high-quality 3D visuals for TikTok videos, shorts, and more, adding depth and realism to your social media presence.",
    rating: 5,
    icon: "🌐"
  },
  {
    title: "Video Editing",
    description: "Elevate your social media and website content with professional video editing. We specialize in creating captivating content for TikTok, Instagram, and websites, ensuring your videos are polished and impactful.",
    rating: 5,
    icon: "🎥"
  },
  {
    title: "Custom Services",
    description: "We offer custom solutions for your unique projects. Have a specific request? Contact us, and we'll create a solution just for you.",
    rating: 5,
    icon: "⚡"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Innovative Solutions,</span> Creative Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver cutting-edge services that transform your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover-focus-group">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: service.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;