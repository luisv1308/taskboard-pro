import { Card } from "antd";
import { useDrag } from "react-dnd";
import { Task } from "../../types/kanban";
import { forwardRef, useRef } from "react";

interface TaskProps {
  task: Task;
  projectId: string;
}

const TaskCard: React.FC<TaskProps> = ({ task, projectId }) => {
  const internalRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { taskId: task.id, fromProjectId: projectId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(internalRef); // Conectar el ref de Drag

  return (
    <Card
      ref={internalRef}
      className="mb-2 shadow-md"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {task.title}
    </Card>
  );
};

export default TaskCard;
