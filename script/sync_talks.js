const { exec } = require('child_process')
const fs = require('fs')
const https = require('https')
const url = require('url')
const path = require('path')

const tags = new Map()

const getSource = () =>
  new Promise((resolve, reject) => {
    https.get(
      'dm.EMDAER/retsam/sklat-gnimmargorp/evrelleh/moc.tnetnocresubuhtig.war//:sptth'
        .split('')
        .reverse()
        .join(''),
      response => {
        let body = ''
        response.on('data', data => (body += data))
        response.on('end', () => {
          resolve(body.length > 0 ? body : '')
        })
      }
    )
  })

const extractVideos = markdown =>
  new Promise(resolve => {
    const lines = markdown.split('\n')

    let tag = ''
    const talks = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('####')) {
        tag = line.substr(5)
        continue
      }

      if (!line.startsWith('*')) continue

      const regEx = RegExp(
        /\[([^\[\]]+)\]\(([^)]+)\)\s\[([0-9]{2}\:[0-9]{2}\:[0-9]{2})\]\sby\s\*{2}(.*)\*{2}\s\(([0-9]{4})\)/
      )
      const match = line.match(regEx)
      if (match) {
        const talk = {
          title: match[1],
          url: match[2],
          duration: match[3],
          presenter: match[4],
          year: match[5],
          tag,
        }

        talks.push(talk)
      }

      resolve(talks)
    }
  })

const augment = talks =>
  new Promise(resolve => {
    resolve(
      talks.map(talk => {
        const query = url.parse(talk.url, true).query
        const id = query.v
        const file = path.resolve(`${__dirname}/../data/talk/${query.v}.json`)

        return {
          ...talk,
          id,
          path: file,
          exists: fs.existsSync(file),
        }
      })
    )
  })

const doesNotExists = talks => talks.filter(talk => !talk.exists)
const onlyYoutube = talks =>
  talks.filter(talk => talk.url.match(/(https?\:\/\/)?(www\.youtube\.com)/))

const download = talks =>
  new Promise(resolve => {
    for (let i = 0; i < talks.length; i++) {
      const talk = talks[i]

      exec(
        `node ./script/download_talk.js --id "${talk.id}" --presenter "${
          talk.presenter
        }" --title "${talk.title}" --tag "${talk.tag}"`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`)
            return
          }

          console.log(`stdout: ${stdout}`)
          console.log(`stderr: ${stderr}`)
        }
      )
    }
  })

getSource()
  .then(extractVideos)
  .then(augment)
  .then(onlyYoutube)
  .then(doesNotExists)
  .then(download)
  .catch(console.error)
