'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram, ExternalLink, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'color' | 'extensions' | 'styling';
}

const galleryItems = [
  {
    id: '1',
    title: 'Money Piece/Face Frame Foils',
    description: 'Face-framing highlights transformation',
    imageUrl: '/gallery/money-piece-foils/money-piece-foils.png',
    category: 'color'
  },
  {
    id: '2',
    title: 'Toner/Gloss and Haircut',
    description: 'Color enhancement and styling',
    imageUrl: '/gallery/toner-gloss/toner-gloss.png',
    category: 'color'
  },
  {
    id: '3',
    title: 'All Over Color and Haircut',
    description: 'Complete color transformation',
    imageUrl: '/gallery/all-over-color/all-over-color.png',
    category: 'color'
  },
  {
    id: '4',
    title: 'Root Retouch and Haircut',
    description: 'Grey coverage and style refresh',
    imageUrl: '/gallery/root-retouch/root-retouch.png',
    category: 'color'
  },
  {
    id: '5',
    title: 'Short Pixie',
    description: 'Short pixie cut for women',
    imageUrl: '/gallery/short-pixie/short-pixie.png',
    category: 'color'
  },
  {
    id: '6',
    title: 'Womens Haircut',
    description: 'Professional women\'s haircut and styling',
    imageUrl: '/gallery/womens-haircut/womens-haircut.png',
    category: 'extensions'
  }
];

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'color', name: 'Hair Color' },
  { id: 'extensions', name: 'Hair Extensions' },
  { id: 'styling', name: 'Styling' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 bg-seamless section-transition">
      <div className="section-divider"></div>
      <div className="container-custom">

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <Image
                  src={item.imageUrl}
                  alt={`${item.title} transformation`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-heading font-semibold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body text-text/70">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-heading font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Instagram CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-heading text-xl font-bold text-text">
                Follow Our Instagram
              </h3>
            </div>
            <p className="text-text mb-6">
              See more amazing transformations and behind-the-scenes content 
              on our Instagram page.
            </p>
            <a
              href="https://www.instagram.com/beauty_by_raquel_nicole/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent font-bold px-8 py-3 rounded-lg inline-block hover:bg-accent hover:text-white transition-all duration-300"
            >
              Follow @beauty_by_raquel_nicole
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;