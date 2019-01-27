import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { Sentry } from '@sentry/browser'

import Header from '../PageHeader'
import Footer from '../PageFooter'

import '../../styles/index.scss'

const Layout = ({ children }) => {
  try {
    return (
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
  } catch (error) {
    Sentry.captureException(error)
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
