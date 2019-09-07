import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import JournalList from './containers/JournalListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <JournalList/>
        </CustomLayout>
      </div>
    );
  }
}

export default App;