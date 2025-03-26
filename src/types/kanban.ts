export interface Task {
    id: string;
    title: string;
    status: 'pending' | 'in-progress' | 'completed';
    project_id: string;
}

export interface Project {
    id: string;
    name: string;
    tasks: Task[];
}