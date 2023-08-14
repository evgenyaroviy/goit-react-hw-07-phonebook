export const handleFulfieldContacts = (state, { payload }) => {
  state.items = payload
  
}
export const handleFulfield = (state) => {
  state.isLoading = false
}

export const handlePending = (state) => {
  state.isLoading = true
  state.error = ''
}

export const handleRejected = (state, {error}) => {
  state.isLoading = false
  state.error = error.message
}