import { supabase } from "@/utils/supabase";

const TABLE_NAME = "view";

export const fetchViews = async () => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const sendView = async ({
  data,
}: {
  data: {
    name: string;
    email: string;
    message: string;
  };
}) => {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .insert({ name: data.name, email: data.email, message: data.message });
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
  }
};
