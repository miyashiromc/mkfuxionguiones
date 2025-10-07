
export interface Scene {
  time: string;
  duration: [number, number];
  title: string;
  visual: string;
  onScreenText?: string;
  voice?: string;
  keywords?: string[];
}

export interface AudioCue {
  time: string;
  description: string;
}

export interface Task {
  name: string;
  role: string;
  description: string;
}

export interface Caption {
  text: string;
  hashtags: string;
}

export interface ScriptData {
  title: string;
  introduction: {
    greeting: string;
    strategy: string;
  };
  summary: string;
  audio: AudioCue[];
  protagonistNote: string;
  scenes: Scene[];
  caption: Caption;
  tasks: Task[];
  closing: string;
}
