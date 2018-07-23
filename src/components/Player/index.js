import PropTypes from 'prop-types'
import React from 'react'
import YouTube from 'react-youtube'

import './index.scss'

class Player extends React.Component {
  static defaultProps = {
    className: null,
    id: 'player',
    opts: {},
    onEnd: () => undefined,
    onError: () => undefined,
    onPause: () => undefined,
    onPlay: () => undefined,
    onPlaybackQualityChange: () => undefined,
    onPlaybackRateChange: () => undefined,
    onReady: () => undefined,
    onStateChange: () => undefined,
    videoId: null,
  }

  constructor() {
    super()

    this.state = {
      width: 854,
      height: 450,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
      },
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    if (854 <= window.innerWidth) {
      this.setState({ height: 450, width: 854 })
    } else {
      this.setState({ height: 225, width: window.outerWidth })
    }
  }

  render() {
    return (
      <div className="row player">
        <YouTube
          videoId={this.props.videoId}
          id={this.props.id}
          className={this.props.className}
          opts={this.state}
          onReady={this.props.onReady}
          onPlay={this.props.onPlay}
          onPause={this.props.onPause}
          onEnd={this.props.onEnd}
          onError={this.props.onError}
          onStateChange={this.props.onStateChange}
          onPlaybackRateChange={this.props.onPlaybackRateChange}
          onPlaybackQualityChange={this.props.onPlaybackQualityChange}
        />
      </div>
    )
  }
}

Player.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  opts: PropTypes.object,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onError: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func,
  videoId: PropTypes.string,
}

export default Player
