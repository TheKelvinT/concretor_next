import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "say9s8oc",
  dataset: "production",
  title: "CONCRETOR CMS",
  apiVersion: "2023-05-11",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
export default config
