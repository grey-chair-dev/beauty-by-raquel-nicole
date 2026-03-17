import ReviewCarousel from './ReviewCarousel';
import { BOOK_URL } from '@/lib/constants';

const testimonials = [
  {
    id: 1,
    name: 'Katie M.',
    rating: 5,
    service: 'Blonde Highlights & Cut',
    text: 'Raquel is absolutely amazing! She transformed my hair with beautiful blonde highlights and gave me the perfect cut. Her attention to detail is incredible and I get so many compliments!',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    service: 'Balayage & Haircut',
    text: 'I was so nervous about getting my hair done, but Raquel made me feel so comfortable. The balayage is stunning and my haircut is perfect. She really knows her craft!',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    service: 'Color & Extensions',
    text: 'Best hair experience I\'ve ever had! Raquel is a true professional. The color is exactly what I wanted and the extensions look so natural. Highly recommend!',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Michelle R.',
    rating: 5,
    service: 'Root Touch-Up & Style',
    text: 'I\'ve been coming to Raquel for over a year now. Her color work is always perfect and she\'s so consistent. Love the personalized service and attention to detail!',
    date: '1 week ago',
  },
  {
    id: 5,
    name: 'Emily T.',
    rating: 5,
    service: 'Vivid Color & Cut',
    text: 'Raquel transformed my hair with a gorgeous vivid color! The cut is perfect and the color is exactly what I envisioned. She\'s truly talented!',
    date: '2 weeks ago',
  },
  {
    id: 6,
    name: 'Rachel B.',
    rating: 5,
    service: 'Blonde & Face Frame',
    text: 'I wanted to go blonde and Raquel delivered! The face frame highlights are perfect and the overall look is exactly what I wanted. She\'s amazing!',
    date: '3 weeks ago',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-seamless section-transition">
      <div className="section-divider" />
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-h2 font-bold text-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body text-text/70 max-w-lg mx-auto">
            Real results, real reviews. See why clients keep coming back.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <ReviewCarousel />
        </div>

        <div className="text-center">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center min-h-[48px] px-8"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 