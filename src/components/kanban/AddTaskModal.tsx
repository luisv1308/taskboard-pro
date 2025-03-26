import { useState } from "react";
import { Modal, Input, Button } from "antd";
import useProjectStore from "../../store/useProjectStore";

interface AddTaskModalProps {
    projectId: string;
    isOpen: boolean;
    onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ projectId, isOpen, onClose }) => {
    const { addTask } = useProjectStore(); // Acceso a la función addTask desde el store
    const [taskTitle, setTaskTitle] = useState('');

    const handleAddTask = async () => {
        if (taskTitle.trim() === '') return;
        await addTask(projectId, taskTitle);
        setTaskTitle(''); // Limpiar el campo de entrada después de agregar la tarea
        onClose(); // Cerrar el modal después de agregar la tarea
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