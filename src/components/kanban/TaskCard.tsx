import { useDrag } from "react-dnd";
import { useMoveTask } from "../../hooks/useTasks";
import { Card } from "antd";
import { useRef } from "react";

interface TaskCardProps {
  task: { id: string; title: string; status: string };
  projectId: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const moveTaskMutation = useMoveTask();
  const internalRef = useRef<HTMLDivElement>(null);
  // 📌 Hacer que la tarjeta sea arrastrable con React DnD
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: { id: task.id, status: task.status },
    end: (item, monitor) => {
      const dropResult: { status: string } | null = monitor.getDropResult();
      if (item && dropResult) {
        const toStatus = dropResult.status as "pending" | "in-progress" | "completed";
        if (toStatus === "pending" || toStatus === "in-progress" || toStatus === "completed") {
          moveTaskMutation.mutate({ taskId: item.id, toStatus });
        } else {
          console.error(`Invalid status: ${toStatus}`);
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragRef(internalRef);
  
  return (
    <Card
      ref={internalRef} // 
      className="mb-2 shadow-md"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {task.title}
    </Card>
  );
};

export default TaskCard;
