import { create } from "zustand";
import { Project } from "../types/kanban";
import { Task } from "./../types/kanban";

interface ProjectStore {
  projects: Project[];
  addProject: (name: string) => void;
  addTask: (projectId: string, title: string) => void;
  moveTask: (
    taskId: string,
    fromProjectId: string,
    toStatus: "pending" | "in-progress" | "completed"
  ) => void;
}

const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  addProject: (name: string) =>
    set((state) => ({
      projects: [
        ...state.projects,
        { id: crypto.randomUUID(), title: name, tasks: [] },
      ],
    })),
  addTask: (projectId: string, title: string) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  id: crypto.randomUUID(),
                  title,
                  status: "pending",
                  order: project.tasks.length,
                  columnId: project.id,
                },
              ],
            }
          : project
      ),
    })),

  moveTask: (
    taskId: string,
    fromProjectId: string,
    toStatus: "pending" | "in-progress" | "completed"
  ) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === fromProjectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, status: toStatus } : task
              ),
            }
          : project
      ),
    })), // End of moveTask
})); // End of useProjectStore

export default useProjectStore;
