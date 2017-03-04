import $ from 'jquery'
import './css/style.css'

$(function () {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    { 
      part: 'snippet',
      key: 'AIzaSyCGN6oR8rDeUMXD0dVXFNehwE1m9z4bolY',
      q: 'pewdiepie'
    },
    (data) => console.log(data)
  )
})


