import React, { Component } from "react";
import "./App.css";
import SearchAppBar from "./Components/Layout/header";
import SearchResults from "./Components/searchresults";
import MyList from "./Components/mylist";
import axios from "axios";
import MyListProvider from "./Components/mylist/mylistprovider";


class App extends Component {
  state = {
    searchfor: "",
    res: [],
  };

  searchHandler = e => {
    this.setState({ searchfor: e.target.value });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      let apiKey = "7162df2fd005697749ada799f6d12790";
      this.setState({ searchfor: e.target.value });

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${
            e.target.value
          }`
        )
        .then(res => {
          this.setState({
            res: res.data
          });
        });
    }
  };

  render() {
    return (
      <div className="App ">
        <SearchAppBar
          searchHandler={this.searchHandler}
          handleKeyDown={this.handleKeyDown}
          searchFor={this.state.searchfor}
        />
        <MyListProvider>
          <MyList />
          <SearchResults results={this.state.res} />
        </MyListProvider>
      </div>
    );
  }
}

export default App;
