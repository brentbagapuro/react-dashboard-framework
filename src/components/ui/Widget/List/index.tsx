import "./List.css"

type ListProps = {
  title: string
  subtitle: string
  listItems: string[]
}

const List: React.FC<ListProps> = ({ title, subtitle, listItems }) => {
  return (
    <div className="List">
      <h4>{title}</h4>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      <ul className="list-items">
        {listItems.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
