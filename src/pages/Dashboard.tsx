import { useEffect } from 'react';
import useProjectStore from '../store/useProjectStore';
import { Button, Input } from 'antd';
import { useState } from 'react';
import KanbanBoard from '../components/kanban/KanbanBoard';

const Dashboard = () => {
  const { projects, fetchProjects, addProject } = useProjectStore();
  const [name, setName] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    if (name.trim() === '') return;
    await addProject(name);
    setName('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tus Proyectos</h1>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del proyecto" />
      <Button onClick={handleAddProject}>Crear Proyecto</Button>

      {projects.map((project) => (
        <div key={project.id} className="mt-4">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <KanbanBoard projectId={project.id} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
