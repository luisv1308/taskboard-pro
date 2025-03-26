import { useMutation } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";
import { queryClient } from "../lib/reactQueryClient";

const addTask = async (projectId: string, title: string) => {
  const { error } = await supabase
    .from("tasks")
    .insert([{ project_id: projectId, title, status: "pending" }]);

  if (error) throw new Error(error.message);
};

export const useAddTask = () => {
  return useMutation({
    mutationFn: ({ projectId, title }: { projectId: string; title: string }) =>
      addTask(projectId, title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] }); // 🔄 Refrescar proyectos después de agregar una tarea
    },
  });
};


const moveTask = async (taskId: string, toStatus: "pending" | "in-progress" | "completed") => {
    const { error } = await supabase
      .from("tasks")
      .update({ status: toStatus })
      .eq("id", taskId);
  
    if (error) throw new Error(error.message);
  };
  
  export const useMoveTask = () => {
    return useMutation({
      mutationFn: ({ taskId, toStatus }: { taskId: string; toStatus: "pending" | "in-progress" | "completed"  }) =>
        moveTask(taskId, toStatus),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] }); // 🔄 Refrescar proyectos después de mover una tarea
      },
    });
  };
  