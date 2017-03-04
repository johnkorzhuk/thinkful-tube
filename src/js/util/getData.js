import $ from 'jquery'

const { API_KEY } = process.env

export default (query) =>
  new Promise((resolve, reject) => {
    $.ajax({
      dataType: 'json',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        key: API_KEY,
        q: query
      },
      success (data) {
        resolve(data)
      },
      error (jqXHR, textStatus, err) {
        reject(err)
      }
    })
  })
