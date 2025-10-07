
import React from 'react';
import type { Caption } from '../types';
import { TagIcon, TextIcon } from './IconComponents';

interface VideoCaptionProps {
  caption: Caption;
}

const VideoCaption: React.FC<VideoCaptionProps> = ({ caption }) => {
  return (
    <section className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Descripción del video (Caption)</h2>
      <div className="space-y-4">
        <div>
            <h3 className="text-lg font-semibold flex items-center mb-2"><TextIcon />Texto</h3>
            <p className="text-gray-300 bg-gray-900/50 p-4 rounded-lg">{caption.text}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold flex items-center mb-2"><TagIcon />Hashtags</h3>
            <p className="text-pink-400 break-words bg-gray-900/50 p-4 rounded-lg">{caption.hashtags}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoCaption;
