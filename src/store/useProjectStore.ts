import { create } from "zustand";
import { Project } from "../types/kanban";
import { supabase } from "../lib/supabaseClient";

interface ProjectStore {
  projects: Project[];
  fetchProjects: () => Promise<void>;
  addProject: (name: string) => Promise<void>;
}

const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],

  fetchProjects: async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      set({ projects: data });
    }
  },

  addProject: async (name: string) => {
    const { data, error } = await supabase.from("projects").insert([{ name }]).select("*");
    if (error) {
      console.error("Error adding project:", error);
    } else {
      set((state) => ({ projects: [...state.projects, ...data] }));
    }
  },
}));

export default useProjectStore;