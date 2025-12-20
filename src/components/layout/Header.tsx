"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Questions Explorer App
        </Typography>
        <Link href="/" style={{ color: "inherit" }}>
          <HomeIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
