import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: {
        q: "",
        type: "full",
        print: "all"
      }
    }
  }

  updateSearch = (key,value) => {
    const search = this.state.search;
    search[key] = value;
    this.setState({search});
  }

  handleSearch = (e) => {
    e.preventDefault();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search.q}&filter=${this.state.search.type}&printType=${this.state.search.print}&key=${'AIzaSyBMrSnn4mz2buerbDQm9xrerbbXeWxjm1Q'}`;
    const options = {
      method: 'GET'
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({books:data.items}); 
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

render() {
  return (
    <main className="App-header">
      <header>Google Book Search</header>
      <Search searchHandler={this.handleSearch} search={this.state.search} updateSearch={this.updateSearch} />
      <section>
        <List books={this.state.books} />
      </section>
    </main>
  )
}
}