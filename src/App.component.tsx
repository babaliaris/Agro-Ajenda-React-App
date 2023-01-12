import React from 'react';
import * as Router from 'react-router-dom';
import TopBar from './components/top-bar/TopBar.component';
import * as ReactI18n from 'react-i18next';
import { TranslationKeys } from './core/i18n';
import {ICONS} from './core/icons';


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

      <Router.Outlet/>
    </React.Fragment>
  );
}

export default App;
