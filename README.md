# flickr
Flickr APP

It is Flickr APP prototype <br>
[Demo here](https://flickrapp.netlify.com/) 

## Technologies
- HTML
- CSS, Pre processing SASS & SMACSS methodology
- Javascript & jQuery
- Reactjs

## Javascript dependencies:
```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>
   <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.8.1/axios.min.js"></script>
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```

## Required Information for the API
- Flickr API Key: `a5e95177da353f58113fd60296e1d250` (you can also use your own key)
- Nasa's user id: `24662369@N07`

## Specification to retrieve public photos
Endpoint: `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos`

Requirements:
- `&api_key=APIKEY`
- `&user_id=USER_ID`

Optional Parameters
- `&format=json`
- `&nojsoncallback=1`

Full URL:  `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=API_KEY&user_id=USER_ID&format=json&nojsoncallback=1`
