export interface Task {
    id: string;
    title: string;
    order: number;
    columnId: string;
    status: 'pending' | 'in-progress' | 'completed';
}

export interface Project {
    id: string;
    title: string;
    tasks: Task[];
}