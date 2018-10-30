require('dotenv').config()

const https = require('https')
const fs = require('fs')
const querystring = require('querystring')
const readline = require('readline')
const String = require('../src/utils/string')
const uuid = require('uuid')

if (!process.env.YOUTUBE_API_KEY) {
  throw new Error('Environment variable "YOUTUBE_API_KEY" is not set.')
}

const presets = { id: '', presenter: '', title: '', tag: '' }
for (var i = 0; i < process.argv.length; i++) {
  const arg = process.argv[i]

  if (arg === '--id')
    presets.id = process.argv[i + 1]

  if (arg === '--presenter')
    presets.presenter = process.argv[i + 1]

  if (arg === '--title')
    presets.title = process.argv[i + 1]

  if (arg === '--tag')
    presets.tag = process.argv[i + 1]
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const download = videoId =>
  new Promise((resolve, reject) => {
    https.get(
      {
        host: 'www.googleapis.com',
        path:
          '/youtube/v3/videos?' +
          querystring.stringify({
            id: videoId,
            key: process.env.YOUTUBE_API_KEY,
            part: 'id,snippet,contentDetails,statistics',
          }),
        protocol: 'https:',
      },
      response => {
        let body = ''
        response.on('data', data => (body += data))
        response.on('end', () => {
          resolve(body.length > 0 ? JSON.parse(body) : {})
        })
      }
    )
  })

const mapper = data => {
  const title = presets.title || data.snippet.title

  const tag = []
  if (presets.tag)
    tag.push(tag)
  if (data.snippet.tags.length > 0)
    tag.concat(data.snippet.tags)

  return {
    description: data.snippet.description,
    id: uuid.v4(),
    meta: {
      commentCount: data.statistics.commentCount,
      dislikeCount: data.statistics.dislikeCount,
      duration: data.contentDetails.duration,
      favoriteCount: data.statistics.favoriteCount,
      likeCount: data.statistics.likeCount,
      viewCount: data.statistics.viewCount,
    },
    presenter: {
      name: presets.presenter || null,
    },
    slug: String.slugify(title),
    source: {
      id: data.id,
      provider: 'youtube',
    },
    tag,
    title,
    thumbnails: {
      default: data.snippet.thumbnails.default,
      medium: data.snippet.thumbnails.medium,
      high: data.snippet.thumbnails.high,
    },
    type: 'video',
  }
}

const write = talk =>
  new Promise((resolve, reject) => {
    const path = `./data/talk/${talk.source.id}.json`
    return fs.writeFile(path, JSON.stringify(talk, null, 2), error => {
      if (error) reject(error)
      else resolve(path)
    })
  })

const videoId = () =>
  new Promise((resolve, reject) => {
    if (presets.id)
      return resolve(presets.id)

    for (let i = 0; i < process.argv.length; i += 1) {
      if (2 === i) return resolve(process.argv[i])
    }

    rl.question('Enter youtube video source reference: ', id => {
      return /^[a-zA-Z0-9\_\-]{11}$/.test(id)
        ? resolve(id)
        : reject('Invalid video source reference.')
    })
  })

const end = err => {
  rl.close()
  if (err) throw new Error(err)
}

videoId()
  .then(download)
  .then(res => res.items[0])
  .then(mapper)
  .then(write)
  .then(path => {
    process.stdout.write(`File successfully written to "${path}".\n`)
  })
  .then(end)
  .catch(end)
