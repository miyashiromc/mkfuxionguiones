
import React, { useState } from 'react';
import type { Scene } from '../types';
import { CameraIcon, MicIcon, TextIcon, CheckCircleIcon } from './IconComponents';

interface ScriptStoryboardProps {
  scenes: Scene[];
}

const SceneCard: React.FC<{ scene: Scene; isActive: boolean; isCompleted: boolean; onToggleComplete: () => void; }> = ({ scene, isActive, isCompleted, onToggleComplete }) => {
  return (
    <div className={`transition-all duration-300 border-2 rounded-xl overflow-hidden ${isActive ? 'border-cyan-400 shadow-cyan-400/20 shadow-2xl scale-105' : 'border-gray-700'}`}>
        <div className={`p-4 bg-gray-800 flex justify-between items-center`}>
            <div>
                <p className="text-sm font-semibold text-pink-400">{scene.time}</p>
                <h3 className="text-lg font-bold text-white">{scene.title}</h3>
            </div>
            <button onClick={onToggleComplete} className="flex items-center space-x-2 text-sm">
                <CheckCircleIcon completed={isCompleted} />
                <span className={`${isCompleted ? 'text-green-400' : 'text-gray-400'}`}>{isCompleted ? 'Completado' : 'Marcar'}</span>
            </button>
        </div>
        <div className="p-4 bg-gray-800/50 space-y-4">
            {scene.visual && (
                <div>
                    <h4 className="text-md font-semibold text-white flex items-center"><CameraIcon />Visual</h4>
                    <p className="text-gray-300 ml-8 whitespace-pre-line">{scene.visual}</p>
                </div>
            )}
            {scene.voice && (
                <div>
                    <h4 className="text-md font-semibold text-white flex items-center"><MicIcon />Voz</h4>
                    <p className="text-gray-300 ml-8 italic whitespace-pre-line">{scene.voice}</p>
                </div>
            )}
            {scene.onScreenText && (
                <div>
                    <h4 className="text-md font-semibold text-white flex items-center"><TextIcon />Texto en Pantalla</h4>
                    <p className="text-gray-300 ml-8 font-black text-cyan-300 text-center py-2 bg-black/30 rounded-md whitespace-pre-line">{scene.onScreenText}</p>
                </div>
            )}
            {scene.keywords && (
                 <div>
                    <h4 className="text-md font-semibold text-white flex items-center"><TextIcon />Palabras Clave</h4>
                    <div className="flex justify-center items-center gap-4 mt-2">
                        {scene.keywords.map(kw => (
                            <span key={kw} className="bg-pink-500/80 text-white font-bold text-sm px-3 py-1 rounded-full">{kw}</span>
                        ))}
                    </div>
                 </div>
            )}
        </div>
    </div>
  );
}

const ScriptStoryboard: React.FC<ScriptStoryboardProps> = ({ scenes }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [completedScenes, setCompletedScenes] = useState<number[]>([]);

  const handleToggleComplete = (index: number) => {
    setCompletedScenes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const totalDuration = 58;

  return (
    <section>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Guion Detallado (Storyboard)</h2>
      
      <div className="sticky top-4 z-10 bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl mb-8 border border-gray-700">
        <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-cyan-400">{String(currentTime).padStart(2, '0')}s</span>
            <input 
                type="range"
                min="0"
                max={totalDuration}
                value={currentTime}
                onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg"
                style={{accentColor: '#ec4899'}} // A fallback for some browsers
            />
             <span className="text-lg font-bold text-gray-400">{totalDuration}s</span>
        </div>
      </div>
      
      <div className="space-y-8">
        {scenes.map((scene, index) => (
          <SceneCard 
            key={index} 
            scene={scene}
            isActive={currentTime >= scene.duration[0] && currentTime <= scene.duration[1]}
            isCompleted={completedScenes.includes(index)}
            onToggleComplete={() => handleToggleComplete(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ScriptStoryboard;
