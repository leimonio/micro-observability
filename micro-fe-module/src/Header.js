import React, { useState } from 'react';
import errorConfig from './error.config';
import './Header.css';

import ErrorModal from './ErrorModal';
import ModuleErrorBoundary from './ModuleErrorBoundary';

const Header = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [details, setDetails] = useState({ version: errorConfig.moduleVersion });

  return (
    <header className='Header'>
      <h3>Menu v{details.version}</h3>
      <div>
        <button className="Button" onClick={() => setDetails(null)}>Component Error</button>
        <button className="Button" onClick={() => setIsModalDisplayed(true)}>Modal Error</button>
      </div>
      <ErrorModal 
        isOpen={isModalDisplayed}
        onClose={() => setIsModalDisplayed(false)}
        meta={{
          ...errorConfig,
          componentSource: 'Header',
        }}
      />
    </header>
  );
};

const HeaderWithBoundary = (props) => (
  <ModuleErrorBoundary name="Header">
    <Header {...props} />
  </ModuleErrorBoundary>
);

export { HeaderWithBoundary as default, Header };