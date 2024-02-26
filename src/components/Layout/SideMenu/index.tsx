import { useState } from "react"
import { Button } from "components/ui"
import { BsChevronLeft } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdPerson, IoMdCog } from "react-icons/io"
import clsx from "clsx"
import "./SideMenu.css"

const navLinks = [
  {
    icon: <IoMdPerson className="menu-icon" />,
    label: "Account",
    url: "#",
  },
  {
    icon: <IoMdCog className="menu-icon" />,
    label: "Settings",
    url: "#",
  },
]

const SideMenu = () => {
  const [toggleMenuOpen, setToggleMenuOpen] = useState(true)

  return (
    <div className="SideMenu">
      <div
        className={clsx("wrapper", {
          open: toggleMenuOpen,
          minimized: !toggleMenuOpen,
        })}
      >
        <div className="menu-head menu-item">
          <h2
            className={clsx("menu-item-label", {
              "show-item-label": toggleMenuOpen,
              "hide-item-label": !toggleMenuOpen,
            })}
          >
            Dashboard
          </h2>
          <span
            className={clsx("menu-icon-button", {
              "adjust-icon-button-left": !toggleMenuOpen,
            })}
          >
            <Button onClick={() => setToggleMenuOpen(!toggleMenuOpen)}>
              {toggleMenuOpen ? (
                <BsChevronLeft className="menu-icon" />
              ) : (
                <RxHamburgerMenu className="menu-icon" />
              )}
            </Button>
          </span>
        </div>

        <ul className="NavLinks">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} className="NavLink-item">
                <span>{link.icon}</span>
                <p>{link.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
