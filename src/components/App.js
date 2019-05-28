import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 
                'Client-ID 34226e653f2e5fb09d7f12ff4b343d1d3c1e3306a2a33178a362ca1a12ab4964',
        } 
      });
    }

    render() {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    );
  }
}

export default App;



 