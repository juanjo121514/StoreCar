import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import StoreCar  from "./StoreCar"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <StoreCar/>
    </ThemeProvider>
  </StrictMode>
)
