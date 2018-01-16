import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


//const API_KEY = 'AIzaSyDE5n-vkX3UMwxXIepyidDGhZOxdNgYTlI';

class App extends Component{
  render(){
    return(
    <SearchBar />
    );
  }

}
//test
ReactDOM.render(<App />, document.querySelector('.container'));
