"use client";
import { Box } from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef,
} from "mui-tiptap";

import StarterKit from "@tiptap/starter-kit";

export const CustomRichTextEditor = () => {
  return (
    <Box>
      <RichTextEditor
        // ref={rteRef}
        extensions={[StarterKit]} // Or any Tiptap extensions you wish!
        content="<p>Hello world</p>" // Initial content for the editor
        // Optionally include `renderControls` for a menu-bar atop the editor:
        immediatelyRender={false}
        renderControls={() => (
          <MenuControlsContainer>
            <MenuSelectHeading />
            <MenuDivider />
            <MenuButtonBold />
            <MenuButtonItalic />
            {/* Add more controls of your choosing here */}
          </MenuControlsContainer>
        )}
      />
    </Box>
  );
};
