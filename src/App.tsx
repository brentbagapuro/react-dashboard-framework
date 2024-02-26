import { Grid } from "components/ui"
import { configuration } from "assets/config"

const App = () => (
  <div style={{ width: "100%" }}>
    <Grid columns={configuration.columns} />
  </div>
)

export default App
