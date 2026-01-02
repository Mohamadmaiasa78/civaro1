
import React from 'react';

interface CategoryItem {
  name: string;
  image: string;
}

const CATEGORIES: CategoryItem[] = [
  { name: 'Face', image: 'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSmJOf2nvunSTtHxEa2WvniplxUi01-cSiuvK2jUqjKA2Naa4s3xNyz4dpDttTJpuukWQKa6GnpFswDp1YHL7NyqbgkApCNL88b9rPuvKCm1sVsFWZySdlZpUBUnw6id28vChCGbfq6ytYdae4F3vpT7u1n_ZzbrKbW2GYQiDTWErEOH7m2K7BVP-7iwRLmGBABBrVwjmG99bbjm_x5fIDQUreTxmimq4nmdLFC3R-V_4wuSz2C-fmdZeUEnM9VDnPhdo7JjF4BLKq3ekdlwjW9Xk2kjblOELjN-OuPmYQmVTi7rHqdaUxUx9i_FJFP7lXfRSz94qte48GqCBMcK_ZGY3gLSm6gMTaqg0EzB85dnRblkKOeNst0DFd9ScB5sHSmsmWScOQS0tPNEEWczbusdnTidb4Q4fUZbuPidzWILlcuTqwabqdtd-PGmMrRLLrhCyE19uIZBKuThl1tTyYwhIJqti3Bg9a7oMVn-kIlQZLTeT_Y_AVNDh1piCrGcnUZZqCvD2yRpDVfjdpnwDY8p9IvD6dVCOk5Y42R60j1HSLz9nF9zgatmGYdm7d3hNvcyLgS1MvuqK860_Lvr48pSXN6n7C6hAM7WfcsTFZmPce-4PXXH6ruxS_jRF0hlhnly5oI6Ifx3jvWTeVJmxv4WRun_8ypVFsvZI2_uCA8AChjmN7ZGL1Vc8WWfPCcE-ohewXR4IAUe17sAZKs_Q_pGaNCXAeu7rjjuWrPyK67P_smURK9SCUEnEWiAU_1jGmL0Zk2LB4vlRKEBm7y1mbYNL3zto6FdJDjgeIkRCc8rDSZhi0lK1pB9uTimtPPy5DKL93DNorFuHcrJbENvn_vsOQzvVSxpNJ3BbeHJuj7Wax17HyNFmRKuL8GprZKGWrPcP6AD2zrHf8p-OKN9WfRz5uyZGTEefDg1VZKLwOeFn_bs-PV--gNbcG4ESOfLDR0TIk2EdWcwEZsfXzddBdieStYw1RvJggEmBKyY-74pF9G8ws_Hdw7AEDf7TWqBYz6egKLexe_SieOIqbJAGq0_arTqAZ_uac6ILE_G7K-Ls9ttsEvzHnebzq8Q49wrCP-He-7etF0vgP86X0gZbA5j2-5rMaYJ1naaJaomWzn_MFjb-6Mo9Qe66r98WwYuPv8idlxx8D8Rb0hO_xwfHxqTdlPzTgLRlFKh1iVtQGyB2fzlf2mhTkrYGABjlTUbPwUFKoHmPhEocXjE0FH1B1Z1fWSD=s1024-rj' },
  { name: 'Cleansing', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300' },
  { name: 'Body', image: 'https://images.unsplash.com/photo-1631730359585-38a4935ccbb2?auto=format&fit=crop&q=80&w=300' },
  { name: 'Multi-use', image: 'https://images.unsplash.com/photo-1603006905393-d2325372338c?auto=format&fit=crop&q=80&w=300' },
  { name: 'Deodorant', image: 'https://images.unsplash.com/photo-1594125350485-3bb334c4426b?auto=format&fit=crop&q=80&w=300' },
  { name: 'Specimen', image: 'https://images.unsplash.com/photo-1503706652255-ff3a58d63748?auto=format&fit=crop&q=80&w=300' },
];

export const CategoryStrip: React.FC<{ onCategoryClick: (cat: string) => void }> = ({ onCategoryClick }) => {
  return (
    <section className="py-24 bg-[#121212] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-[10px] tracking-[0.5em] uppercase text-[#c5a059] mb-20 font-medium">Explore the Selection</h3>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 md:gap-x-16">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => onCategoryClick(cat.name === 'Specimen' ? 'Lifestyle' : cat.name)}
              className="flex flex-col items-center group space-y-6"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                {/* Visual Backdrop Circle (Reference: Blue tint) */}
                <div className="absolute inset-0 rounded-full bg-[#1a2233]/40 group-hover:bg-[#c5a059]/10 transition-colors duration-700"></div>
                
                {/* Gold ring accent */}
                <div className="absolute inset-[-6px] rounded-full border border-white/5 group-hover:border-[#c5a059]/40 transition-all duration-700 scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 group-hover:text-[#c5a059] transition-colors duration-300 font-medium">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
