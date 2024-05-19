import { getDiningSessionDetails } from "@/app/lib/data";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default async function SessionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const sessionDetails = await getDiningSessionDetails({ id: params.id });

  return (
    <Container>
      <Typography variant="h5">{sessionDetails?.title}</Typography>

      <Stack direction="row" spacing={2} alignItems="center" my={4}>
        <Avatar
          alt={sessionDetails?.creatorId}
          src="/static/images/avatar/1.jpg"
        />

        <Box>
          <Box>Hosted By</Box>
          <Box>{sessionDetails?.creatorId}</Box>
        </Box>
      </Stack>

      <Box>Status: {sessionDetails?.status?.name}</Box>
    </Container>
  );
}
