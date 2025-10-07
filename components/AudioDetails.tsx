
import React from 'react';
import type { AudioCue } from '../types';
import { MusicIcon } from './IconComponents';

interface AudioDetailsProps {
  audioCues: AudioCue[];
  protagonistNote: string;
}

const AudioDetails: React.FC<AudioDetailsProps> = ({ audioCues, protagonistNote }) => {
  return (
    <section className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Audio / Música</h2>
      <ul className="space-y-3 mb-4">
        {audioCues.map((cue, index) => (
          <li key={index} className="flex items-start">
            <MusicIcon />
            <div>
              <span className="font-semibold text-pink-400">{cue.time}:</span>
              <span className="ml-2 text-gray-300">{cue.description}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-400 italic mt-4">{protagonistNote}</p>
    </section>
  );
};

export default AudioDetails;
