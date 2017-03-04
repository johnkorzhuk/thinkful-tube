import $ from 'jquery'

export default (query) =>
  new Promise((resolve, reject) => {
    $.ajax({
      dataType: 'json',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        key: 'AIzaSyCGN6oR8rDeUMXD0dVXFNehwE1m9z4bolY',
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
