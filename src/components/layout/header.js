import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu } from 'semantic-ui-react'

import * as Styles from './header.module.css'

const menuItems = [
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Works',
    link: '/category/game'
  }
]

const Header = () => {
  const items = menuItems.map((item) => (
    <Menu.Item key={item.name}>
      <Link className={Styles.link} to={item.link}>
        {item.name}
      </Link>
    </Menu.Item>
  ))

  return (
    <Menu className={Styles.navbar} secondary>
      <Menu.Item>
        <Link to="/">
          <StaticImage
            src="../images/arrow2nd-icon.png"
            width={48}
            alt="icon"
          />
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">{items}</Menu.Menu>
    </Menu>
  )
}

export default Header