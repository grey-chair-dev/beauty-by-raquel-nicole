import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Map = () => {
  return (
    <section id="contact" className="py-20 bg-seamless section-transition">
      <div className="section-divider"></div>
      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
                               <div className="seamless-card rounded-2xl p-8">
                     <h3 className="text-heading text-xl font-semibold text-text mb-6">
                       Contact Information
                     </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-heading font-semibold text-text mb-1">Address</h4>
                    <p className="text-body text-text/70">
                      212 Main St<br />
                      Milford, OH 45150
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-heading font-semibold text-text mb-1">Phone</h4>
                    <a 
                      href="tel:+15133302277" 
                      className="text-body text-accent hover:text-text transition-colors"
                    >
                      (513) 330-2277
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-heading font-semibold text-text mb-1">Hours</h4>
                    <div className="text-body text-text/70 space-y-1">
                      <p>Tuesday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday - Monday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-heading font-semibold text-text mb-1">Booking</h4>
                    <p className="text-body text-text/70 mb-2">
                      Book your appointment online for the best experience.
                    </p>
                    <a 
                      href="https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-flex items-center"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
                               <div className="seamless-card rounded-2xl p-8">
                     <h3 className="text-heading text-xl font-semibold text-text mb-6">
                       What to Expect
                     </h3>
              
              <div className="space-y-4 text-body text-text/70">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Free parking available in front of the salon</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Comfortable waiting area with refreshments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>WiFi available for your convenience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Located in downtown Milford, easy to find</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
                           <div className="seamless-card rounded-2xl overflow-hidden">
            <div className="aspect-square w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.1234567890123!2d-84.2956789!3d39.1756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841aab5e756d8ff9%3A0xcc80f8cfede579de!2s212%20Main%20St%2C%20Milford%2C%20OH%2045150!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty by Raquel Nicole - Milford, OH"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map; 