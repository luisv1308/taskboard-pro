import { Row } from "antd";
import TaskColumn from "./kanban/TaskColumn";
import React from "react";

interface KanbanBoardProps {
    projectId: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ projectId }) => {
    return (
        <Row gutter={16} className="mt-4s">
            <TaskColumn status="pending" projectId={projectId} />
            <TaskColumn status="in-progress" projectId={projectId} />
            <TaskColumn status="completed" projectId={projectId} />
        </Row>
    );
};

export default KanbanBoard;