"use server";

export async function createSession(prevState: any, formData: FormData) {
  const rawFormData = {
    sessionTitle: formData.get("sessionTitle"),
  };

  // mutate data
  // revalidate cache

  if (typeof rawFormData.sessionTitle !== "string") {
    throw new Error("Invalid session title");
  }

  return {
    message: rawFormData.sessionTitle,
  };
}
