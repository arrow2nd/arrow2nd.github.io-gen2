/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, desc, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            originUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    originUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  // URL末尾のスラッシュを削除
  const siteUrl = originUrl.slice(0, -1)

  const seo = {
    title: title || defaultTitle,
    description: defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={title ? titleTemplate : ''}>
      <html lang="ja" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: ``,
  image: ``,
  article: false
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  article: PropTypes.bool
}

export default SEO
