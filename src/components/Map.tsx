import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, BOOK_URL, BUSINESS_HOURS, BUSINESS_LOCATION } from '@/lib/constants';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';

const Map = () => {
  return (
    <ReviewSectionAnchor flagIds={['contact-map', 'site-phone', 'site-email', 'site-hours', 'site-location']} href="/contact#contact">
      <section id="contact-map" className="theme-section-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="theme-card p-6 md:p-8">
                <h3 className="theme-heading text-xl mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden />
                    <div>
                      <h4 className="font-heading font-semibold text-on-surface mb-1">Address</h4>
                      <p className="text-body text-on-surface-variant">
                        {BUSINESS_LOCATION.salonLabel}
                        <br />
                        {BUSINESS_LOCATION.street}
                        <br />
                        {BUSINESS_LOCATION.area}, {BUSINESS_LOCATION.city}, {BUSINESS_LOCATION.state}{' '}
                        {BUSINESS_LOCATION.zip}
                      </p>
                      <p className="text-body text-on-surface-variant mt-2">{BUSINESS_LOCATION.entryNote}</p>
                      <p className="text-body text-on-surface-variant mt-1">{BUSINESS_LOCATION.parkingNote}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden />
                    <div>
                      <h4 className="font-heading font-semibold text-on-surface mb-1">Phone</h4>
                      <a href="tel:+15133302277" className="text-body text-primary hover:text-accentDark font-semibold">
                        (513) 330-2277
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden />
                    <div>
                      <h4 className="font-heading font-semibold text-on-surface mb-1">Hours</h4>
                      <div className="text-body text-on-surface-variant space-y-1">
                        {BUSINESS_HOURS.schedule.map(({ day, hours }) => (
                          <p key={day}>
                            {day}: {hours}
                          </p>
                        ))}
                        <p>{BUSINESS_HOURS.closed}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden />
                    <div>
                      <h4 className="font-heading font-semibold text-on-surface mb-1">Questions & Inquiries</h4>
                      <p className="text-body text-on-surface-variant mb-3">
                        All inquiries go to my DMs. Message me on Instagram and I&apos;ll get back to you.
                      </p>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center mb-3"
                      >
                        DM me on Instagram
                      </a>
                      <p className="text-body text-on-surface-variant mb-2 mt-3">Or book online:</p>
                      <a
                        href={BOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="theme-card p-6 md:p-8">
                <h3 className="theme-heading text-xl mb-6">What to Expect</h3>
                <ul className="space-y-3 text-body text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden />
                    {BUSINESS_LOCATION.parkingNote}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden />
                    {BUSINESS_LOCATION.entryNote}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden />
                    Comfortable waiting area with refreshments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden />
                    WiFi available for your convenience
                  </li>
                </ul>
              </div>
            </div>

            <div className="theme-card overflow-hidden retro-frame groovy-shadow">
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default Map;
