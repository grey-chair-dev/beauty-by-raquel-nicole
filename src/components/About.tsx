import Image from 'next/image';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '6+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
    { icon: Shield, value: 'Licensed', label: 'Professional' },
  ];

  return (
    <section id="about" className="py-20 bg-seamless section-transition">
      <div className="section-divider"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-heading text-h2 font-bold text-text mb-6">
              About Beauty by Raquel Nicole
            </h2>
            
            <div className="space-y-6 text-body text-body-mobile md:text-body text-text/80">
              <p>
                Welcome to Beauty by Raquel Nicole, where I specialize in creating 
                beautiful hair transformations. Located in downtown Milford, OH, I offer 
                a personalized experience for every client, focusing on blonding, 
                dimensional color, vivids, and hand-tied weft extensions.
              </p>
              
              <p>
                With years of experience in the beauty industry, I specialize in 
                creating stunning hair transformations that enhance your unique features. 
                From face-framing highlights to full color transformations, every service 
                is tailored to your individual needs and preferences.
              </p>
              
              <p>
                Our commitment to quality, attention to detail, and personalized care 
                has made us a trusted name in Milford&apos;s beauty community. I use 
                only the highest quality products and maintain the strictest hygiene 
                standards for your safety and satisfaction.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-heading text-2xl font-bold text-text">
                    {stat.value}
                  </div>
                  <div className="text-small text-text/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raquel's Photo */}
          <div className="relative floating-element">
            <div className="seamless-card rounded-2xl overflow-hidden">
              <div className="relative">
                <Image 
                  src="/images/raquel/raquel-profile.jpg" 
                  alt="Raquel Schmid - Licensed Hairstylist"
                  width={400}
                  height={384}
                  className="w-full h-96 object-cover object-top -translate-y-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👩‍🎨</span>
                    </div>
                    <h3 className="text-heading text-xl font-semibold text-text mb-2">
                      Meet Raquel Schmid
                    </h3>
                    <p className="text-body text-text/70">
                      Licensed Hairstylist
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-heading text-xl font-semibold text-text mb-2">
                    Meet Raquel Schmid
                  </h3>
                  <p className="text-body text-text/70">
                    Licensed Hairstylist
                  </p>
                </div>
                
                <div className="space-y-4 text-body text-small text-text/80">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Certified Professional</h4>
                      <p>Licensed and certified in hair styling and color services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Personalized Care</h4>
                      <p>Every service is customized to your unique hair type and preferences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Safety First</h4>
                      <p>Highest hygiene standards and quality products for your safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 