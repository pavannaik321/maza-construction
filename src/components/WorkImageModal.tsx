'use client';

import React, { useEffect } from 'react';
import { WorkImage } from '@/data/workImageData';
import { FaTimes, FaTag } from 'react-icons/fa';

interface WorkImageModalProps {
  image: WorkImage | null;
  onClose: () => void;
}

export default function WorkImageModal({ image, onClose }: WorkImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-yellow-400 hover:text-black text-white p-2.5 rounded-full transition-all duration-200"
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image View */}
          <div className="flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[450px]">
            <img
              src={image.src}
              alt={image.title}
              className="max-h-[75vh] w-full object-contain"
            />
          </div>

          {/* Details Sidebar */}
          <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-gray-900 border-t md:border-t-0 md:border-l border-gray-800">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400 text-black">
                  <FaTag className="text-[10px]" />
                  {image.category}
                </span>
                <span className="text-xs text-gray-400">Real Site Work</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {image.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {image.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <div className="text-xs text-gray-400">
                <span className="font-semibold text-yellow-400">Maza Construction</span> Site Record
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg text-xs transition-colors duration-200"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
