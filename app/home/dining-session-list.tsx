import Diversity3Icon from "@mui/icons-material/Diversity3";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
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
    <Container>
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
              <ListItemAvatar>
                <Avatar>
                  <Diversity3Icon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={session.title}
                secondary={session.status.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
