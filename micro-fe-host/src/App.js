import React, { useState } from 'react';
import ContainerErrorBoundary from './ContainerErrorBoundary';
import errorConfig from './error.config';
import './App.css';

import { Header, Footer, Profile, ErrorModal } from 'MFE_Module/root';

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [details, setDetails] = useState({ version: errorConfig.moduleVersion });

  return (
    <div className='App'>
      <header className='AppHeader'>
        <h1>My Account v{details.version}</h1>
        <div>
          <button onClick={() => setDetails(null)}>Component Error</button>
          <button onClick={() => setIsModalDisplayed(true)}>Modal Error</button>
        </div>
      </header>
      <div>
        <div className='HeaderContainer'>
          <Header />
        </div>
        <div className='ProfileContainer'>
          <Profile />
        </div>
        <div className='FooterContainer'>
          <Footer />
        </div>
      </div>
      <ErrorModal 
        isOpen={isModalDisplayed}
        onClose={() => setIsModalDisplayed(false)}
        meta={{
          ...errorConfig,
          componentSource: 'App',
        }} />
    </div>
  );
}

const AppWithErrorBoundary = () => {
  return (
    <ContainerErrorBoundary name='App'>
      <App />
    </ContainerErrorBoundary>
  )
}

export default AppWithErrorBoundary;
