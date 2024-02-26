import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Grid from "."

vi.mock("./GridColumn", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="mock-grid-column" />),
}))

const mockColumns = [
  {
    size: 1,
    heading: "Column 1",
    widgets: [],
  },
  {
    size: 2,
    heading: "Column 2",
    widgets: [],
  },
]

describe("Grid Component", () => {
  it("renders grid with correct number of columns", () => {
    render(<Grid columns={mockColumns} />)
    expect(screen.getAllByTestId("mock-grid-column")).toHaveLength(2)
  })
})
