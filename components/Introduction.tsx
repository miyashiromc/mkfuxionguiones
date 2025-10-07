
import React from 'react';

interface IntroductionProps {
  greeting: string;
  strategy: string;
}

const Introduction: React.FC<IntroductionProps> = ({ greeting, strategy }) => {
  return (
    <section className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introducción y Estrategia</h2>
      <div className="space-y-4 text-gray-300">
        <p>{greeting}</p>
        <p>{strategy}</p>
      </div>
    </section>
  );
};

export default Introduction;
