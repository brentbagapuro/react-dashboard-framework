import SideMenu from "./SideMenu"
import "./Layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <SideMenu />
      <main>{children}</main>
    </div>
  )
}

export default Layout
