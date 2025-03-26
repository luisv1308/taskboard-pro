import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { useRef } from "react";

interface TaskColumnProps {
  status: "pending" | "in-progress" | "completed";
  projectId: string;
  tasks: any[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, projectId, tasks }) => {
  const internalRef = useRef<HTMLDivElement>(null);
  // 📌 Configurar React DnD para permitir soltar tareas en esta columna
  const [{ isOver }, dropRef] = useDrop({
    accept: "TASK",
    drop: () => ({ status }), // 📌 Define a qué estado se moverá la tarea
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  dropRef(internalRef);
  return (
    <div
      ref={internalRef} // 📌 Hacer que la columna acepte drops
      className={`w-1/3 p-2 border rounded-md transition-all ${
        isOver ? "bg-gray-300" : "bg-gray-100"
      }`}
    >
      <h2 className="text-lg font-bold text-center capitalize">{status}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} projectId={projectId} />
        ))}
    </div>
  );
};

export default TaskColumn;
