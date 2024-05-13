"use server";

import db from "@/app/lib/prisma";
import { revalidateTag } from "next/cache";

export async function createSession(prevState: any, formData: FormData) {
  const rawFormData = {
    sessionTitle: formData.get("sessionTitle"),
  };

  if (typeof rawFormData.sessionTitle !== "string") {
    throw new Error("Invalid type of session title");
  }

  try {
    const createdSession = await db.session.create({
      data: {
        title: rawFormData.sessionTitle,
        creatorId: 1,
        statusId: 3,
      },
    });

    revalidateTag("sessions");

    return {
      data: createdSession,
      success: true,
      message: "Session created successfully! 🎉",
    };
  } catch (error) {
    return {
      data: error?.toString(),
      success: false,
      message: "Failed to create session. 😢",
    };
  }
}
