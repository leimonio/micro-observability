import React, { useState } from 'react';
import errorConfig from './error.config';
import './Footer.css';

import ErrorModal from './ErrorModal';
import ModuleErrorBoundary from './ModuleErrorBoundary';

const Footer = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [details, setDetails] = useState({ version: errorConfig.moduleVersion });

  return (
    <footer className='Footer'>
      <h3>Footer v{details.version}</h3>
      <div>
        <button className="Button" onClick={() => setDetails(null)}>Component Error</button>
        <button className="Button" onClick={() => setIsModalDisplayed(true)}>Modal Error</button>
      </div>
      <ErrorModal 
        isOpen={isModalDisplayed}
        onClose={() => setIsModalDisplayed(false)}
        meta={{
          ...errorConfig,
          componentSource: 'Footer',
        }}
      />
    </footer>
  );
};

const FooterWithBoundary = (props) => (
  <ModuleErrorBoundary name="Footer">
    <Footer {...props} />
  </ModuleErrorBoundary>
);

export { FooterWithBoundary as default, Footer };