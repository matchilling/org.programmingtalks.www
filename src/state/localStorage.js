export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')

    return null !== serializedState ? JSON.parse(serializedState) : undefined
  } catch (error) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.error(error)
  }
}
