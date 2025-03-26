import { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import { useAddTask } from "../../hooks/useTasks";

interface AddTaskModalProps {
    projectId: string;
    isOpen: boolean;
    onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ projectId, isOpen, onClose }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [taskTitle, setTaskTitle] = useState('');
    const addTaskMutation = useAddTask();

    const handleAddTask = async () => {
        if (!taskTitle.trim()) {
            messageApi.open({
                type: 'warning',
                content: 'El título de la tarea no puede estar vacío',
            })
            return
        }

        addTaskMutation.mutate({ projectId, title: taskTitle },
            {
                onSuccess: () => {
                    messageApi.open({
                        type: 'success',
                        content: 'Tarea agregada exitosamente',
                    })
                    setTaskTitle('');
                    onClose();
                },
                onError: (error) => {
                    messageApi.open({
                        type: 'error',
                        content: error.message,
                    })
                },
            }
        );
    };

    return (
        <Modal
            title="Agregar Nueva Tarea"
            open={isOpen}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancelar
                </Button>,
                <Button key="add" type="primary" onClick={handleAddTask}>
                    Agregar
                </Button>,
            ]}
        >
            {contextHolder}
            <Input
                placeholder="Título de la Tarea"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                onPressEnter={handleAddTask}
            />
        </Modal>
    );
}

export default AddTaskModal;