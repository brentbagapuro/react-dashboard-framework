import { render, screen, waitFor } from "@testing-library/react"
import { Mock, beforeEach, describe, expect, it, vi } from "vitest"
import axios from "axios"
import Widget, { WidgetType } from "."

vi.mock("axios")

const mockData = {
  results: [{ name: "Blue" }, { name: "Purple" }, { name: "Red" }],
  pokemon_species_details: [{}, {}, {}],
}

const mockWidgetProps: WidgetType = {
  title: "Test Widget",
  type: "list",
  api: "https://example.com/api",
}

describe("Widget Component", () => {
  beforeEach(() => (axios.get as Mock).mockResolvedValue({ data: mockData }))

  it("renders a list widget correctly", async () => {
    render(<Widget {...mockWidgetProps} />)

    await waitFor(() => {
      expect(screen.getByText("Blue")).toBeTruthy()
      expect(screen.getByText("Purple")).toBeTruthy()
      expect(screen.getByText("Red")).toBeTruthy()
    })
  })

  it("renders a number widget correctly", async () => {
    render(
      <Widget
        title={mockWidgetProps.title}
        type="number"
        api={mockWidgetProps.api}
      />,
    )

    await waitFor(() => {
      expect(screen.getByText("3")).toBeInTheDocument()
    })
  })

  it("renders loading state initially", async () => {
    render(<Widget {...mockWidgetProps} />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
})
