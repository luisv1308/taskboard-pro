import { Row, Button } from "antd";
import { useState, useEffect } from "react";
import TaskColumn from "./TaskColumn";
import AddTaskModal from "./AddTaskModal";
import useProjectStore from "../../store/useProjectStore";

interface KanbanBoardProps {
  projectId: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ projectId }) => {
  const { fetchTasks } = useProjectStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks(projectId);
  }, [projectId]);

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
        <TaskColumn status="pending" projectId={projectId} />
        <TaskColumn status="in-progress" projectId={projectId} />
        <TaskColumn status="completed" projectId={projectId} />
      </Row>
    </div>
  );
};

export default KanbanBoard;