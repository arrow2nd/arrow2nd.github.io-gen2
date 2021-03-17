import * as React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import * as Styles from './title.module.css'

const Title = ({ name }) => (
  <div className={Styles.title}>
    <Header as="h1" textAlign="center" content={name} />
    <div className={Styles.hr} />
  </div>
)

Title.propTypes = {
  name: PropTypes.string.isRequired
}

export default Title
