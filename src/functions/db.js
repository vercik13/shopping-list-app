import { getSupabase } from "./supabase";

export const getRecipesItems = () => {
  const supabase = getSupabase();

  return supabase.from("recipes").select("*");
};
// export const getRecipesItems = () => {
//   const supabase = getSupabase();

//   return supabase.from("recipes").select("*");
// };

export const getRecipesItemsById = (id) => {
  const supabase = getSupabase();

  return supabase.from("recipes").select("*").eq("id", id).single();
};

export const addRecipesItem = (name, ingrediens, progress, done) => {
  const supabase = getSupabase();

  return supabase.from("recipes").insert({
    name: name,
    ingrediens: ingrediens,
    progress: progress,
    done: done,
  });
};

export const updateRecipesItem = (id, done) => {
  const supabase = getSupabase();

  return supabase
    .from("recipes")
    .update({
      done: done,
    })
    .eq("id", id);
};
