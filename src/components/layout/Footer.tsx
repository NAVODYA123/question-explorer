import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export const Footer = () => {
  return (
    <Box
      component="footer"
      py={2}
      textAlign="center"
      width={"100%"}
      sx={{ bgcolor: "primary.light", height: "50px", marginTop: "auto" }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} questions explorer app
      </Typography>
    </Box>
  );
};
