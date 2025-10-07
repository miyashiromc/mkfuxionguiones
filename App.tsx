
import React from 'react';
import { scriptData } from './constants';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Summary from './components/Summary';
import ScriptStoryboard from './components/ScriptStoryboard';
import AudioDetails from './components/AudioDetails';
import VideoCaption from './components/VideoCaption';
import TeamTasks from './components/TeamTasks';
import Closing from './components/Closing';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Header title={scriptData.title} />
        
        <main className="space-y-12">
          <Introduction
            greeting={scriptData.introduction.greeting}
            strategy={scriptData.introduction.strategy}
          />

          <Summary summary={scriptData.summary} />

          <AudioDetails audioCues={scriptData.audio} protagonistNote={scriptData.protagonistNote} />

          <ScriptStoryboard scenes={scriptData.scenes} />

          <VideoCaption caption={scriptData.caption} />
          
          <TeamTasks tasks={scriptData.tasks} />

          <Closing text={scriptData.closing} />
        </main>
        
        <footer className="text-center text-gray-500 text-sm py-8">
            <p>MK Fuxion Creative Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
