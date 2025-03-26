import { Row, Button } from "antd";
import { useState, useEffect } from "react";
import TaskColumn from "./TaskColumn";
import AddTaskModal from "./AddTaskModal";
import { Task } from "../../types/kanban";

interface KanbanBoardProps {
  projectId: string;
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ projectId, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        + Agregar Tarea
      </Button>

      <AddTaskModal
        projectId={projectId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Row gutter={16} className="mt-4">
        <TaskColumn status="pending" projectId={projectId} tasks={tasks} />
        <TaskColumn status="in-progress" projectId={projectId} tasks={tasks} />
        <TaskColumn status="completed" projectId={projectId} tasks={tasks} />
      </Row>
    </div>
  );
};

export default KanbanBoard;