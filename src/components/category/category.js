import * as React from 'react'
import PropTypes from 'prop-types'

import Layout from '../layout/layout'
import SEO from '../common/seo'
import Button from './button'
import CardGroup from './cardgroup'

const Category = ({ title, cards }) => (
  <Layout title="Works">
    <SEO title={title} />
    <Button active={title} />
    <CardGroup items={cards} />
  </Layout>
)

Category.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array
}

export default Category
