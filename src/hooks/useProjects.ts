import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

const fetchProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*, tasks(*)");
  if (error) throw new Error(error.message);
  return data || [];
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  });
};
