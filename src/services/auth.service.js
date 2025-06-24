import {supabase} from "./supabaseClient.js";

export const signInWithEmail = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { data, error };
};

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
};

export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
};

export const getUserName = async (id) => {
    const { data } = await supabase.from("user_info").select('user_name').eq('user_id', id).single();

    if (data === null)
        return;

    return data.user_name;
}

export const onAuthStateChange = (callback) => {
    return supabase.auth.onAuthStateChange((_event, session) => {
        callback(session?.user ?? null);
    });
};