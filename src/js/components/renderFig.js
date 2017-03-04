export default (state) => {
  let html = ''
  state.forEach((videoDetails) => {
    html += `
      <figure>
        <a href="https://www.youtube.com/watch?v=${videoDetails.videoId}">
          <img src=${videoDetails.url} alt="Thumbnail of ${videoDetails.title} from ${videoDetails.channelTitle}'s youtube channel"/>
          <figcaption>${videoDetails.title}</figcaption>
        </a>
      </figure>
    `
  })

  return html
}

