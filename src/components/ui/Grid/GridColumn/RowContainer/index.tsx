import "./RowContainer.css"

type RowContainerProps = {
  children: React.ReactNode
}

const RowContainer: React.FC<RowContainerProps> = ({ children }) => {
  return <div className="RowContainer">{children}</div>
}

export default RowContainer
