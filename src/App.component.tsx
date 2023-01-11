import React from 'react';
import * as Router from 'react-router-dom';
import TopBar from './components/top-bar/TopBar.component';


function App()
{

  return (
    <React.Fragment>
      <TopBar title='AgroAjenda' logo='logo'>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
      </TopBar>

      <Router.Outlet/>
    </React.Fragment>
  );
}

export default App;
