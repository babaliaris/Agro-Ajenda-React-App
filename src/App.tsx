import React from 'react';
import styles from './App.module.css'
import * as Router from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import * as ReactI18n from 'react-i18next';
import { TranslationKeys } from './core/i18n';
import {ICONS} from './core/icons';
import Toolbar from './components/toolbar/Toolbar';


function App()
{
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
      </div>

    </React.Fragment>
  );
}

export default App;
