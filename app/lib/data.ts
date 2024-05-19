import { auth } from "@clerk/nextjs/server";
import db from "./prisma";

export async function getDiningSessions() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to view dining sessions.");
  }

  return db.session.findMany({
    where: { creatorId: userId },
    include: { status: true },
  });
}

export async function getDiningSessionDetails({ id }: { id: string }) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to view dining sessions.");
  }

  return db.session.findUnique({
    where: { id: Number(id) },
    include: { status: true },
  });
}
