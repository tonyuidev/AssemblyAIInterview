import React from 'react';
import BasicHeader from './components/header/BasicHeader';
import CheckEqualityComponent from './components/check-equality-widget/CheckEqualityWidget';

import './styles/tplVars.scss';
import './App.scss';
import './styles/flexGrid.scss';
import './styles/forms.scss';
import './styles/buttons.scss';

function App() {
  return (
    <div className="App">

      <BasicHeader />

      <div className="flex-centered">

        <CheckEqualityComponent></CheckEqualityComponent>

      </div>

    </div>
  );
}

export default App;
