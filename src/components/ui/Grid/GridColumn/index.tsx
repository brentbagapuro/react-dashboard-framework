import { Fragment } from "react"
import RowContainer from "./RowContainer"
import Widget, { WidgetType } from "components/ui/Widget"
import "./GridColumn.css"

export type GridColumnType = {
  heading: string
  widgets: WidgetType[]
}

const GridColumn: React.FC<GridColumnType> = ({ heading, widgets }) => {
  return (
    <div className="GridColumn">
      <RowContainer>
        <h4>{heading}</h4>
      </RowContainer>

      {widgets.map((widget: WidgetType, i: number) => (
        <Fragment key={i}>
          <RowContainer>
            <Widget {...widget} />
          </RowContainer>
        </Fragment>
      ))}
    </div>
  )
}

export default GridColumn
