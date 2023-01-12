import React from 'react';
import styles from './App.module.css'
import {Logger} from './core/logger';
import * as Router from 'react-router-dom';
import TopBar from './components/topbar/TopBar.component';
import * as ReactI18n from 'react-i18next';
import { TranslationKeys } from './core/i18n';
import {ICONS} from './core/icons';
import Toolbar from './components/toolbar/Toolbar.component';
import DisplayList from './components/display-list/DisplayList';

interface Person {id: number, name: string};
let data: Person[] = [];

function App()
{

  React.useEffect(()=>
  {
    data = [];

    for (let i = 0; i < 20; i++)  
      data.push({id: i, name: `Name ${i}`});

  }, []);

  const {t} = ReactI18n.useTranslation();

  return (
    <React.Fragment>

      <TopBar title={t(TranslationKeys.title)} logo={ICONS.logo}>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
      </TopBar>

      <Toolbar/>

      <div className={styles.outlet_area}>
        <Router.Outlet/>
        <DisplayList
          data={data}
          getKey={(item:Person)=>item.id}
          getLogo={(item: Person)=>ICONS.logo}
          getText={(item: Person)=>item.name}
          onClick={(item)=>Logger.info(item)}
          onEdit={()=>Logger.info("onEdit")}
          onDelete={()=>Logger.info("onDelete")}
          />
      </div>

    </React.Fragment>
  );
}

export default App;
