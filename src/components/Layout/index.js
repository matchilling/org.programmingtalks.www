import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import Header from '../PageHeader'
import Footer from '../PageFooter'

import '../../styles/index.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Programming Talks"
      meta={[
        {
          name: 'description',
          content:
            'An unopinionated, curated list of the best programming talks out there.',
        },
      ]}
    />
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
