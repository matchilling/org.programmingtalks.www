import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = () => (
  <header>
    <div className="row">
      <Link to="/" title="programming talks">
        <h1 className="logo">programmingtalks.org</h1>
      </Link>
    </div>
  </header>
)

export default Header
