import React, { Component } from 'react';
import Loading from './Loading';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  // below is the basic array used a default in the entry 
  articles = [
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Anne Connolly",
      "title": "Despite 570 deaths from COVID in aged care in four weeks, Minister Richard Colbeck says the sector is not in crisis",
      "description": "When Senator Richard Colbeck, the Aged Care Minister, defended his decision to attend the cricket for three days in Hobart at Wednesday's Senate hearing he offered up numerous excuses, writes Anne Connolly.",
      "url": "http://www.abc.net.au/news/2022-02-03/covid-aged-care-deaths-colbeck/100800462",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/59a1b9c2a3e56b6c160327a6cf604079?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=484&width=862&height=485",
      "publishedAt": "2022-02-02T18:43:37Z",
      "content": "When Senator Richard Colbeck, the Aged Care Minister, defended his decision to attend the cricket for three days in Hobart at Wednesday's Senate hearing he offered up numerous excuses.\r\nOne seemed to… [+6279 chars]"
    }
  ]
  //below is to define the default value
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  //below is to define the data type
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  //below function runs automatically 
  constructor(props) {
    //inorder to use props in constructor we have to take input
    super(props);//super is used in jsx to call constructor of its parents class
    //below is defining a state variable
    this.state = {
      articles: this.articles,
      totalResults:0,
      page: 1,
      count:0
    }
    document.title=this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1) +'-Newzz';
  }
  //async makes the function wait till await is completed
  fetchit = async () => {
    this.props.setstate(10);
    //here `` is used to enter variable also $ is added for variable in link
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce371018edc442d68cba28d77bd025ce&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    //below is request to update state variables
    let fetching = await fetch(url);//fetches the url 
    this.props.setstate(100);
    let parsed_data = await fetching.json();//gettig parsed value
    // console.log(parsed_data);//just viewing the object
    this.setState({
      articles: this.state.articles.concat(parsed_data.articles),
      totalResults:parsed_data.totalResults,
      count:1
    })
  }
  //this function is called only when the component is mounted
  // basically after one cycle of rendering
  // async componentDidMount() {
  //   //this.props.setstate(10);
  //   this.fetchit();
  //   this.props.setstate(30);
  // }
  fetchMoreData=async ()=>
  {
    this.setState({ page: this.state.page + 1 });
    this.fetchit();
  };
  // //Below is to go to next page
  // handleonclick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   console.log(this.state.page)
  //   this.fetchit();
  // }
  // //below is to go back to previous
  // handlepreviousclick = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.fetchit();
  // }
  render() {

    return <div className='container my-3'>
      {/* //below will only show when loading */}
      {/* {this.state.loading ? <Loading /> : ""} */}
      <h2 className='text-center' style={{marginTop:'100px'}}>{this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1)} News</h2>
      
        {/* below we used  */}
        <div className='container'>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Loading/>}
        >
        <div className='container'>
        <div className='row my-3'>
        {this.state.articles.map((element) => {
          // md-4 is used to arrange them in four column spaces
          //here we have key for div, this is to uniquely map each element 
          return <div className='col-md-4' key={element.url}>
            <Newsitem title={element.title} desc={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}</div>
        </div>
        </InfiniteScroll></div>

      {/* below is bootstrap flex property to get the tags side by side */}
      {/* <div className='container d-flex justify-content-between'>
        {/* below we took the disabled, hidden to make it better */}
        {/* <button type="button" disabled={this.state.page < 2 ? true : false} onClick={this.handlepreviousclick} className="btn btn-dark">&larr; Previous</button> */}
        {/* <button type="button" hidden={this.state.page < (this.state.num / this.props.pagesize) ? false : true} onClick={this.handleonclick} className="btn btn-dark">Next &rarr;</button> */}
      {/* </div> */}
    </div>;
  }
}

export default News;
