import $ from 'jquery'

import getData from './js/util/getData'
import renderFig from './js/components/renderFig'
import { getVideoThumbnails, setResults } from './state'

$(() => {
  $('.js-search-form').submit((e) => {
    e.preventDefault()
    const query = $('.js-search').val()

    getData(query).then((data) => {
      setResults(data.items)
      $('.js-results').html(renderFig(getVideoThumbnails()))
    }).catch((e) => console.log(e))
  })
})
