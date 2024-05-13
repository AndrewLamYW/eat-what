"use client";

import { createSession } from "@/app/actions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useCallback, useMemo, useState } from "react";
import { useFormState } from "react-dom";

const titleInputMaxChars = 10;

const initialState: { message?: string; success?: boolean; data?: unknown } = {
  message: "",
};

export default function CreateSessionForm() {
  const [formState, formAction] = useFormState(createSession, initialState);
  const [error, setError] = useState(false);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > titleInputMaxChars) setError(true);
      else setError(false);
    },
    []
  );

  const titleHelperText = useMemo(
    () =>
      error
        ? `Title length must not over ${titleInputMaxChars} characters.`
        : "",
    [error]
  );

  return (
    <Container maxWidth="md" component="form" action={formAction}>
      <Card>
        <CardContent sx={{ p: { sm: 4, md: 5, textAlign: "center" } }}>
          <Typography variant="h2" gutterBottom>
            <b>What are we eating?</b>
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Set your intention and invite your friends to join you! 🖐🏻 🖐🏼 🖐🏽 🖐🏾
            🖐🏿
          </Typography>

          <Stack spacing={4}>
            <TextField
              error={error}
              helperText={titleHelperText}
              label="Session Title"
              name="sessionTitle"
              onChange={handleTitleChange}
              variant="filled"
            />

            {formState.message && (
              <Typography
                variant="body1"
                sx={{
                  color: formState.success ? "success.main" : "error.main",
                }}
                gutterBottom
              >
                {formState.message}
              </Typography>
            )}

            <Box>
              <Button variant="contained" type="submit" disabled={error}>
                CREATE SESSION
              </Button>
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
  );
}
