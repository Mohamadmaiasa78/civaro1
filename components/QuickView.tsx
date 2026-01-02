
import React, { useEffect } from 'react';
import { Product } from '../App';

interface QuickViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ product, onClose, onAddToCart }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-700"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1a1a1a] border border-white/5 shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500 slide-in-from-bottom-12">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-white/40 hover:text-[#c5a059] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="aspect-[4/5] md:aspect-auto h-full bg-[#121212] overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover sepia-[0.1] brightness-90"
            />
          </div>

          {/* Content Section */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#c5a059] block mb-4">{product.category}</span>
                <h2 className="text-4xl font-serif text-[#f5f5f0] italic font-light leading-tight">{product.name}</h2>
                <p className="mt-4 text-xl font-serif text-[#c5a059]">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-white/50 text-sm font-light leading-loose max-w-sm">
                {product.description}
              </p>

              {product.notes && (
                <div className="space-y-4">
                  <h4 className="text-[9px] tracking-[0.3em] uppercase text-[#c5a059]">Scent Profile</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {product.notes.map(note => (
                      <span key={note} className="text-sm font-serif italic text-white/40">{note}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full bg-[#f5f5f0] text-black py-5 text-[9px] tracking-[0.5em] uppercase font-bold hover:bg-[#c5a059] transition-colors duration-500"
                >
                  Acquire Specimen
                </button>
                <p className="text-[8px] tracking-[0.2em] text-white/20 uppercase text-center italic">
                  Crafted in limited quantities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
