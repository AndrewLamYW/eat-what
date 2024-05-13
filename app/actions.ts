"use server";

import { diningSessionStatus } from "@/app/constants";
import db from "@/app/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";

export async function createSession(prevState: any, formData: FormData) {
  const { userId } = auth();

  const rawFormData = {
    sessionTitle: formData.get("sessionTitle"),
  };

  if (typeof rawFormData.sessionTitle !== "string") {
    throw new Error("Invalid type of session title");
  }

  if (!userId) {
    return {
      data: null,
      success: false,
      message: "You must be signed in to create a session. 🚫",
    };
  }

  try {
    const createdSession = await db.session.create({
      data: {
        title: rawFormData.sessionTitle,
        creatorId: userId,
        statusId: diningSessionStatus.active.id,
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
