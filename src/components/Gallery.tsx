'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '@/lib/constants';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';

const galleryItems = [
  {
    id: '1',
    title: 'Money Piece/Face Frame Foils',
    description: 'Face-framing highlights transformation',
    imageUrl: '/gallery/money-piece-foils/money-piece-foils.png',
    category: 'color',
  },
  {
    id: '2',
    title: 'Toner/Gloss and Haircut',
    description: 'Color enhancement and styling',
    imageUrl: '/gallery/toner-gloss/toner-gloss.png',
    category: 'color',
  },
  {
    id: '3',
    title: 'All Over Color and Haircut',
    description: 'Complete color transformation',
    imageUrl: '/gallery/all-over-color/all-over-color.png',
    category: 'color',
  },
  {
    id: '4',
    title: 'Root Retouch and Haircut',
    description: 'Grey coverage and style refresh',
    imageUrl: '/gallery/root-retouch/root-retouch.png',
    category: 'color',
  },
  {
    id: '5',
    title: 'Short Pixie',
    description: 'Short pixie cut for women',
    imageUrl: '/gallery/short-pixie/short-pixie.png',
    category: 'color',
  },
  {
    id: '6',
    title: 'Womens Haircut',
    description: "Professional women's haircut and styling",
    imageUrl: '/gallery/womens-haircut/womens-haircut.png',
    category: 'styling',
  },
];

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'color', name: 'Hair Color' },
  { id: 'extensions', name: 'Hair Extensions' },
  { id: 'styling', name: 'Styling' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory,
  );

  return (
    <ReviewSectionAnchor flagIds={['gallery-photos', 'gallery-categories']} href="/gallery#gallery">
      <section id="gallery" className="theme-section pb-24">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-h-[44px] px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                    activeCategory === category.id ? 'filter-pill-active' : 'filter-pill-inactive'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article key={item.id} className="retro-frame groovy-shadow overflow-hidden bg-bg">
                <div className="relative aspect-square">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title} transformation`}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-heading font-bold text-white text-lg">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="theme-card p-8 max-w-2xl mx-auto bg-primary-fixed/40">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Instagram className="w-7 h-7 text-primary" aria-hidden />
                <h3 className="theme-heading text-xl">Follow on Instagram</h3>
              </div>
              <p className="text-on-surface-variant mb-6 max-w-md mx-auto">
                More transformations and behind-the-scenes on @beauty_by_raquel_nicole.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[48px] inline-flex items-center px-8"
              >
                View Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default Gallery;
