let state = {
  results: []
}

export const getResults = () => state.results

export const getVideoThumbnails = () =>
  state.results
    .map(({
      snippet: { channelTitle, thumbnails, title },
      id: { videoId }
    }) => ({
      videoId,
      channelTitle,
      title,
      url: thumbnails.medium.url
    }))

export const setResults = (data) => {
  state.results = data.filter(({ id }) => id.kind === 'youtube#video')
}
