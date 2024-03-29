import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "./components/Layout/index.tsx"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
