import { useState, useEffect, Fragment } from "react"
import axios from "axios"
import List from "./List"
import Number from "./Number"

export type WidgetType = {
  title: string
  subtitle?: string
  type: string
  api: string
}

const Widget: React.FC<WidgetType> = ({ title, subtitle, type, api }) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [api])

  return (
    <div style={{ width: "100%" }}>
      {!loading && data ? (
        <Fragment>
          {type === "list" && (
            <List
              title={title}
              subtitle={subtitle ?? ""}
              listItems={data.results.map((res: any) => res.name)}
            />
          )}
          {type === "number" && (
            <Number title={title} count={data.pokemon_species_details.length} />
          )}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Widget
