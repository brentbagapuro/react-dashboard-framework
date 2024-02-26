import { Fragment } from "react"
import GridColumn, { GridColumnType } from "./GridColumn"
import "./Grid.css"

interface ConfigColumn extends GridColumnType {
  size: number
}

type GridProps = {
  columns: ConfigColumn[]
}

const Grid: React.FC<GridProps> = ({ columns }) => {
  const gridTemplateColumns = columns
    .map((column: ConfigColumn) => `${column.size}fr`)
    .join(" ")

  return (
    <div className="grid-container" style={{ gridTemplateColumns }}>
      {columns.map((column: ConfigColumn, i: number) => (
        <Fragment key={i}>
          <GridColumn heading={column.heading} widgets={column.widgets} />
        </Fragment>
      ))}
    </div>
  )
}

export default Grid
