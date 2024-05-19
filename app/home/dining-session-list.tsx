import Diversity3Icon from "@mui/icons-material/Diversity3";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Session, SessionStatus } from "@prisma/client";
import Link from "next/link";

export default function DiningSessionList({
  diningSessions,
}: {
  diningSessions: (Session & { status: SessionStatus })[];
}) {
  return (
    <div>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dining Sessions
          </ListSubheader>
        }
      >
        {diningSessions.map((session) => (
          <ListItem key={session.id}>
            <ListItemButton
              LinkComponent={Link}
              href={`/sessions/${session.id}`}
            >
              <ListItemIcon>
                <Diversity3Icon />
              </ListItemIcon>

              <ListItemText
                primary={`${session.title} - ${session.status.name}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
