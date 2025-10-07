
import React from 'react';

interface ClosingProps {
  text: string;
}

const Closing: React.FC<ClosingProps> = ({ text }) => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-cyan-400 p-6 rounded-xl shadow-2xl text-center">
      <h2 className="text-2xl font-black text-gray-900 mb-2">Cierre Motivador</h2>
      <p className="text-lg font-medium text-gray-800">{text}</p>
    </section>
  );
};

export default Closing;
