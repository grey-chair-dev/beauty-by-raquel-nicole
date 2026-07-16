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
      className={`theme-card overflow-hidden ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Instagram className="w-6 h-6 text-primary mr-2" aria-hidden />
          <h3 className="theme-heading text-lg">Instagram Transformation</h3>
        </div>
        <p className="text-body text-on-surface-variant mb-6">Real client transformation from our Instagram</p>

        <div className="bg-primary-fixed/30 rounded-xl p-6 text-center border-2 border-primary/10">
          <div className="w-16 h-16 bg-primary-fixed/50 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-primary" aria-hidden />
          </div>

          <h4 className="font-heading font-bold text-on-surface mb-2">Beautiful Hair Transformation</h4>
          <p className="text-body text-on-surface-variant mb-4">
            See this amazing before and after transformation on our Instagram
          </p>

          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" aria-hidden />
            View on Instagram
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-small text-on-surface-variant">
            Click to see the full transformation and more amazing work
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramEmbed;
