import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, BOOK_URL, BUSINESS_HOURS, BUSINESS_LOCATION, MAP_EMBED_URL, MAP_DIRECTIONS_URL } from '@/lib/constants';
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
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${BUSINESS_LOCATION.salonLabel} — ${BUSINESS_LOCATION.street}, ${BUSINESS_LOCATION.city}, ${BUSINESS_LOCATION.state}`}
                  className="w-full h-full"
                />
              </div>
              <p className="p-4 text-sm text-on-surface-variant border-t-2 border-primary/10">
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-accentDark"
                >
                  Open directions in Google Maps
                </a>
                {' '}
                · {BUSINESS_LOCATION.entryNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default Map;
