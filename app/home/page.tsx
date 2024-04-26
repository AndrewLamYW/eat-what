import { SignedIn } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function PrivateHome() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <SignedIn>
        <Container maxWidth="md">
          <Card>
            <CardContent sx={{ p: { sm: 4, md: 5, textAlign: "center" } }}>
              <Typography variant="h2" gutterBottom>
                <b>What are we eating?</b>
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Set your intention and invite your friends to join you! 🖐🏻 🖐🏼 🖐🏽
                🖐🏾 🖐🏿
              </Typography>

              <Stack spacing={4}>
                <TextField label="Session Title" variant="filled" />

                <Box>
                  <Button variant="contained">CREATE SESSION</Button>
                </Box>

                {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Date</FormLabel>

                <RadioGroup defaultValue="fix" name="radio-buttons-group">
                  <FormControlLabel
                    value="fix"
                    control={<Radio />}
                    label="Fix"
                  />
                  <FormControlLabel
                    value="multiple"
                    control={<Radio />}
                    label="Multiple options"
                  />
                  <FormControlLabel
                    value="range"
                    control={<Radio />}
                    label="Range"
                  />
                  <FormControlLabel
                    value="no-idea"
                    control={<Radio />}
                    label="No idea 🤷"
                  />
                </RadioGroup>
              </FormControl> */}
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </SignedIn>
    </Box>
  );
}
