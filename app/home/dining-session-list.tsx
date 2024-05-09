import { Session, SessionStatus } from "@prisma/client";

export default function DiningSessionList({
  diningSessions,
}: {
  diningSessions: (Session & { status: SessionStatus })[];
}) {
  return (
    <div>
      <h2>Dining Sessions</h2>
      <ul>
        {diningSessions.map((session) => (
          <li key={session.id}>
            {session.title} - {session.status.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
