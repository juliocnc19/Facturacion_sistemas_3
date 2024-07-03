import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useState, useEffect } from 'react';


const supabaseUrl = import.meta.env.VITE_URL_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_KEY_SUPABSE;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function useSupaBase(){
    const [client, setClient] = useState<SupabaseClient>();

  useEffect(() => {
    setClient(supabase);
  }, []);

  return client;
};
