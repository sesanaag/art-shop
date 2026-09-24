import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "artwork",
        label: "Artwork",
        path: "content/artworks",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Price (£)",
            required: true,
          },
          {
            type: "boolean",
            name: "soldOut",
            label: "Sold Out",
            description: "Toggle on if this 1-of-1 piece is no longer available.",
          },
          {
            type: "image",
            name: "images",
            label: "Artwork Images",
            list: true,
          },
        ],
      },
    ],
  },
});
