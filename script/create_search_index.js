const fs = require('fs')
const path = require('path')

const sortTitle = (a, b) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

const getFilename = dirname => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) reject(err)

      return resolve(
        filenames.map(filename => path.resolve(`${dirname}/${filename}`))
      )
    })
  })
}

const index = []
getFilename('./data/talk/')
  .then(filenames => {
    filenames.forEach(filename => {
      const data = fs.readFileSync(filename, 'utf8')
      const talk = JSON.parse(data)

      index.push({
        title: talk.title,
        id: talk.id,
        presenter: talk.presenter.name || '',
        url: `/talk/${talk.slug}`,
        description: talk.description || '',
      })
    })
  })
  .then(() => {
    const sorted = index.sort(sortTitle)
    const filename = path.resolve('./static/index.json')

    fs.writeFileSync(filename, JSON.stringify(sorted, 0, 2))
  })
