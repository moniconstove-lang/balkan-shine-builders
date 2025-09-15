import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-foreground leading-tight">
              Precision Car Detailing
              <span className="block text-primary"> with a Balkan Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter">
              Bringing Old-World Craftsmanship to Modern Vehicle Care
            </p>
          </div>
          
          {/* Social Proof */}
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto border border-border/20">
            <p className="text-sm text-muted-foreground mb-2">As seen on Social Media</p>
            <p className="text-primary font-semibold">10,000+ satisfied customers</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300 text-lg px-8 py-4"
            >
              View Our Services →
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transition-all duration-300"
            >
              Watch Our Work
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-8 bg-primary rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};