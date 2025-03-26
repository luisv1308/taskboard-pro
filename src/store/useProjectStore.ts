import { create } from "zustand";
import { Project, Task } from "../types/kanban";
import { supabase } from "../lib/supabaseClient";

interface ProjectStore {
  projects: Project[];
  fetchProjects: () => Promise<void>;
  addProject: (name: string) => Promise<void>;
  addTask: (projectId: string, title: string) => Promise<void>;
  moveTask: (
    taskId: string,
    toStatus: "pending" | "in-progress" | "completed"
  ) => Promise<void>;
}

const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],

  fetchProjects: async () => {
    const { data, error } = await supabase.from("projects").select("*, tasks(*)");
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      set({ projects: data });
    }
  },

  addProject: async (name: string) => {
    const { data, error } = await supabase
      .from("projects")
      .insert([{ name }])
      .select("*");
    if (error) {
      console.error("Error adding project:", error);
    } else {
      set((state) => ({ projects: [...state.projects, ...data] }));
    }
  },

  addTask: async (projectId: string, title: string) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ project_id: projectId, title, status: "pending" }])
      .select("*");
    if (error) {
      console.error("Error adding task:", error);
    } else {
      set((state) => {
        state.projects.map((project) => {
          if (project.id === projectId) {
            project.tasks.push(data[0]);
          }
          return project;
        });
        return { ...state, projects: state.projects };
      });
    }
  },

  moveTask: async (taskId: string, toStatus: "pending" | "in-progress" | "completed") => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ status: toStatus })
      .eq("id", taskId)
      .select("*");
    if (error) {
      console.error("Error moving task:", error);
    } else {
      set((state) => {
        state.projects.map((project) => {
          project.tasks.map((task) => {
            if (task.id === taskId) {
              task.status = toStatus;
            }
            return task;
          });
          return project;
        });
        return { ...state, projects: state.projects };
      });
    }
  },
}));

export default useProjectStore;
