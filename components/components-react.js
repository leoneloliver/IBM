// components 
var Header = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="h-container">
          <div className="logo">flick<span className="letter">r</span></div>
          <div className="search-container">
            <input type="text" placeholder={this.props.search} data-search />
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
});
React.render(<Header search="search"/>,document.querySelector("component-header"));

var Grid = React.createClass({
  render: function(){
    return (
      <div className="h-container">
        <div className="list-container">
          <div id="viewlist">{this.props.textlist}&nbsp;&nbsp;<i className="fa fa-th-list" aria-hidden="true"></i></div>
          <div id="viewgrid">{this.props.textgrid}&nbsp;&nbsp;<i className="fa fa-th-large" aria-hidden="true"></i></div>  
        </div>
      </div>
    )
  }
});
React.render(<Grid textlist="List" textgrid="Grid"/>,document.querySelector("component-btn"));

var AppList = React.createClass({
  getInitialState: function() {
    return {
      flickr_result: []
    }
  },
  componentDidMount: function() {
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            flickr_result: result.data.photos.photo
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <div className="container">
        <div className="title-in">Album Gallery&nbsp;<span className="term"></span></div>
          <div className="masonry" id="grid-view">
            {this.state.flickr_result.map(function(flickr) {
              var urlLarge = 'https://farm' + flickr.farm + '.staticflickr.com/' + flickr.server + '/' + flickr.id + '_' + flickr.secret + '.jpg';
              return (
                <div className="hides item bgload" data-filter-item data-filter-name={flickr.title.toLowerCase()}>
                  <img src={urlLarge} className='fade'/>
                  <div className="title">{flickr.title}</div>
                </div>
              );
            })}
          </div>
      </div>
    )      
  }
});
React.render(<AppList source="https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1" />, document.querySelector("component-flickr"));

var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer">
        <div className="list-container-footer">
          {this.props.credits}&nbsp;<span className="heart"><i className="fa fa-heart" aria-hidden="true"></i></span>&nbsp;{this.props.who}
        </div>
      </div>
    )
  }
});
React.render(<Footer credits="Developed with " who=" by Leonel"/>, document.querySelector('component-footer'));

var Modal = React.createClass({
  render: function(){
    return (
      <div className="full-modal">
        <div className="modal-containner">
          <div className="close-window"><i className="fa fa-times" aria-hidden="true"></i></div>
          <img />
          <div className="text-modal"></div>
        </div>
      </div>
    )
  }
});
React.render(<Modal />, document.querySelector('component-modal'));
