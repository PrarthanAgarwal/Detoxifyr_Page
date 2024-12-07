import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function CTA() {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/Gd7DShK5W5Kchirj6', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Among the First to Experience Detoxifyr
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Sign up for the waitlist and get early access when we launch
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="group"
            onClick={handleWaitlistClick}
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link to="/terms-privacy">
            <Button variant="secondary" size="lg">
              Terms & Privacy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}