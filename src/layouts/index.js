import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import Header from '../components/PageHeader'
import Footer from '../components/PageFooter'

import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
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
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
