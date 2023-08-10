import supabase from "./index.ts";

export async function signUp() {
  const response = await supabase.auth.signUp({
    email: "apaulclindo@gmail.com",
    password: "sale2010",
  });
  return response;
}

export async function signInWithGithub() {
  const response = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  return response;
}
export async function signInWithPassword() {
  const response = await supabase.auth.signInWithPassword({
    email: "apaulclindo@gmail.com",
    password: "sale2010",
  });
  return response;
}

export async function signOut() {
  const response = await supabase.auth.signOut();
  return response;
}

export async function getUser() {
  const response = await supabase.auth.getUser();
  return response;
}
