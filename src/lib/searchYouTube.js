import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 1, //possibly 6 results
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('recastly.ly: cannot fetch video', error);
    }
  });
};


export default searchYouTube;
