import db from "./prisma";

export async function getDiningSessions() {
  return db.session.findMany({ include: { status: true } });
}
