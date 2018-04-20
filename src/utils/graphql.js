module.exports = {
  normalizeResult: arr => {
    if (!arr) return []
    if (!arr.hasOwnProperty('edges')) return []
    if (!Array.isArray(arr.edges)) return []

    return arr.edges.map(edge => edge.node)
  },
}
