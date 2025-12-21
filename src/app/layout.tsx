import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppThemeProvider } from "@/provider/ThemeProvider";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <Box display="flex" minHeight="100vh" flexDirection="column">
            <Header />

            <Box
              component="main"
              flexGrow={1}
              py={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Container sx={{ m: 0, maxWidth: "0" }}>{children}</Container>
            </Box>

            <Footer />
          </Box>
        </AppThemeProvider>
      </body>
    </html>
  );
}
