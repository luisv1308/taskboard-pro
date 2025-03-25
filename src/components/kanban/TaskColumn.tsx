import { Col } from "antd";
import { useDrop } from "react-dnd";
import useProjectStore from "../../store/useProjectStore";
import TaskCard from "./TaskCard";
import { forwardRef, useRef } from "react";

interface ColumnProps {
  // Definición de las propiedades de la columna
  status: "pending" | "in-progress" | "completed";
  projectId: string;
}

const TaskColumn: React.FC<ColumnProps> = ({ status, projectId }) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const { projects, moveTask } = useProjectStore(); // Acceso a la función moveTask desde el store
  const project = projects.find((p) => p.id === projectId); // Encuentra el proyecto con el ID proporcionado

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: { taskId: string; fromProjectId: string }) =>
      moveTask(item.taskId, item.fromProjectId, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(internalRef);

  return (
    <Col span={8}>
        <div ref={internalRef} className={`p-4 bg-gray-200 ${isOver ? "bg-gray-300" : ""} rounded-md`}>
            <h2 className="text-lg font-bold text-center mb-2">{status.toUpperCase()}</h2>
            {project?.tasks
                .filter((task) => task.status === status)
                .map((task) => (
                    <TaskCard key={task.id} task={task} projectId={projectId} />
                ))}
        </div>
    </Col>
  );
};

export default TaskColumn;
