import { Star, Quote } from 'lucide-react';
import ReviewCarousel from './ReviewCarousel';

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
    <section id="testimonials" className="py-20 bg-seamless section-transition">
      <div className="section-divider"></div>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading text-h2 font-bold text-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-body text-body-mobile md:text-body text-text/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients 
            have to say about their experience with Beauty by Raquel Nicole.
          </p>
        </div>

        {/* Enhanced Review Carousel */}
        <div className="mb-12">
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 