import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          for a Chotu Sa Baby ,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        HAPPIEST BIRTHDAY BABY 
        Bhai I am genuinely very blessed to have you as my GIRLFRIEND and baby YOU ARE A GREEN FOREST , YOU ARE MY IDEAL GIRLFRIEND and literally YOU ARE THE BEST THING EVER HAPPENED TO ME and bhai  God was truly by my side when I fell for you for the first time, and since then, I’ve fallen for you a little more every single day . Baby today I'll make sure that you are the happiest girl alive(Bs aapki mummy na aaye😭) vaise to I want you to feel the same everyday but let's prioritize 15th May a lil more.
        I HATE YOU THE MOST JAANU 😘


        From
        Aapka GAYMARD
  
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          happy birthday once again Cutu 
        </p>
      </motion.div>
    </div>
  );
};

export default Message;