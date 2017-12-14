# IBM
Flickr APP - fed-exercise

It is Flickr APP prototype <br>
[Demo here](http://onclickmidia.net/ibm) 

## Layout
![Layout](http://onclickmidia.net/ibm/images/flickr-app.png)

## Technologies
- HTML
- CSS, SASS & SMACSS
- Javascript, jQuery
- Reactjs

## Javascript dependencies:
```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>
   <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.8.1/axios.min.js"></script>
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```

## Required Information
- Flickr API Key: `a5e95177da353f58113fd60296e1d250` (you can also use your own key)
- Nasa's user id: `24662369@N07`

## Retrieve public photos
Endpoint: `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos`

Requirements:
- `&api_key=APIKEY`
- `&user_id=USER_ID`

Optional Parameters
- `&format=json`
- `&nojsoncallback=1`

Full URL:  `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=API_KEY&user_id=USER_ID&format=json&nojsoncallback=1`
