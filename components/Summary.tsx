
import React from 'react';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resumen de la Acción de Hoy</h2>
      <p className="text-gray-300">{summary}</p>
    </section>
  );
};

export default Summary;
