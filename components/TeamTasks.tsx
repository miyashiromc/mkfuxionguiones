
import React from 'react';
import type { Task } from '../types';

interface TeamTasksProps {
  tasks: Task[];
}

const TeamTasks: React.FC<TeamTasksProps> = ({ tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Tareas Sugeridas para el Dúo Dinámico</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {tasks.map((task, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white">{task.name}</h3>
            <p className="text-md font-semibold text-pink-400 mb-3">{task.role}</p>
            <p className="text-gray-300">{task.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamTasks;
