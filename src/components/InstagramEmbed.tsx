// src/components/InstagramEmbed.tsx
'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramEmbedProps {
  postUrl: string;
  className?: string;
}

const InstagramEmbed = ({ postUrl, className = '' }: InstagramEmbedProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Instagram className="w-6 h-6 text-accent mr-2" />
          <h3 className="text-heading font-semibold text-text">
            Instagram Transformation
          </h3>
        </div>
        <p className="text-body text-text/90 mb-6">
          Real client transformation from our Instagram
        </p>
        
        {/* Instagram Post Preview */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-accent" />
          </div>
          
          <h4 className="text-heading font-semibold text-text mb-2">
            Beautiful Hair Transformation
          </h4>
          <p className="text-body text-text/90 mb-4">
            See this amazing before & after transformation on our Instagram
          </p>
          
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Instagram
          </a>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-small text-text/80">
            Click to see the full transformation and more amazing work
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramEmbed;