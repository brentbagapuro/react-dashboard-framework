import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import GridColumn from "."

vi.mock("components/ui/Widget", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="mock-widget" />),
}))

const mockGridColumn = {
  heading: "Column 1",
  widgets: [
    {
      title: "Widget title",
      subtitle: "subtitle",
      type: "list",
      api: "https://example.com/api",
    },
  ],
}

describe("GridColumn Component", () => {
  it("renders grid with correct number of columns", () => {
    render(
      <GridColumn
        heading={mockGridColumn.heading}
        widgets={mockGridColumn.widgets}
      />,
    )
    expect(screen.getAllByTestId("mock-widget")).toHaveLength(1)
  })
})
