
import React from 'react';
import { MailOpen, Sparkles, Heart, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
  to: string;
}

const EnvelopeOverlay: React.FC<EnvelopeProps> = ({ onOpen, to }) => {
  return (
    <div className="w-full min-h-screen bg-[#fcfaf2] batik-pattern overflow-x-hidden">
      {/* Hero Cover (First Viewport) */}
      <section className="h-screen relative flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 -translate-x-12 -translate-y-12 border-[40px] border-[#8b6e4e] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 translate-x-20 translate-y-20 border-[50px] border-[#8b6e4e] rounded-full"></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <div className="w-24 h-24 mx-auto border-2 border-[#8b6e4e] rounded-full flex items-center justify-center mb-8 p-1 bg-white shadow-2xl relative">
             <div className="w-full h-full rounded-full bg-[#8b6e4e] flex items-center justify-center text-white">
                <Heart fill="white" size={32} />
             </div>
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute inset-0 border-2 border-[#8b6e4e] rounded-full"
             />
          </div>
          
          <p className="font-serif-elegant uppercase tracking-[0.5em] text-[#8b6e4e] text-xs mb-4">Undangan Pernikahan</p>
          <h1 className="font-traditional text-6xl md:text-8xl text-[#4a3728] leading-tight mb-4">Sekar & Aditya</h1>
          
          <div className="w-24 h-[1px] bg-[#c4a484] mx-auto mb-10"></div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#8b6e4e]/60 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll kebawah</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Guest Card Section (Second Viewport - Scrollable) */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-lg w-full">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/95 backdrop-blur-xl border border-[#c4a484]/50 p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center group"
          >
            {/* Corner Decor */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-[#8b6e4e]">
               <Sparkles size={80} />
            </div>
            
            <p className="text-sm text-[#4a3728]/70 mb-6 italic font-serif-elegant">Spesial Mengundang Bapak/Ibu/Saudara/i</p>
            
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-serif-elegant text-[#4a3728] font-bold mb-4 break-words px-2">{to}</h2>
              <div className="h-[2px] w-20 bg-[#c4a484]/50 mx-auto"></div>
            </div>

            <p className="text-xs text-[#4a3728]/60 uppercase tracking-[0.3em] leading-relaxed mb-12 max-w-xs mx-auto">
              Merupakan suatu kebahagiaan bagi kami apabila Anda berkenan hadir di hari istimewa kami.
            </p>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="group relative flex items-center justify-center gap-4 bg-[#722f37] text-white px-14 py-6 rounded-full font-bold shadow-2xl transition-all duration-500 overflow-hidden mx-auto"
            >
              <div className="absolute inset-0 bg-[#4a3728] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
              <MailOpen size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 tracking-[0.2em] uppercase text-sm font-traditional">Buka Undangan</span>
            </motion.button>
          </motion.div>

          <p className="mt-12 text-center text-[10px] text-[#8b6e4e]/40 uppercase tracking-[0.4em]">Silakan klik tombol diatas untuk melihat isi undangan</p>
        </div>
      </section>
    </div>
  );
};

export default EnvelopeOverlay;
