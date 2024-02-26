import "./Number.css"

type NumberProps = {
  title: string
  count: number
}

const Number: React.FC<NumberProps> = ({ title, count }) => {
  return (
    <div className="Number">
      <h4>{title}</h4>
      <p>{count}</p>
    </div>
  )
}

export default Number
