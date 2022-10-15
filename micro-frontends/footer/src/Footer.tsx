import React, { useState } from 'react';
import { ErrorBoundary, ErrorModal, Button } from '@micro-observability/ui';

import { FooterContainer } from './FooterContainer';
import { Title } from './Title';
import packageJson from '../package.json';

const Footer = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [details, setDetails] = useState({ version: packageJson.version });

  return (
    <FooterContainer>
      <Title>Footer v{details.version}</Title>
      <div>
        <Button onClick={() => setDetails(null)}>
          Component Error
        </Button>
        <Button onClick={() => setIsModalDisplayed(true)}>
          Modal Error
        </Button>
      </div>
      <ErrorModal
        isOpen={isModalDisplayed}
        onClose={() => setIsModalDisplayed(false)}
        meta={{
          moduleName: packageJson.name,
          moduleVersion: packageJson.version,
          componentSource: 'Footer',
        }}
      />
    </FooterContainer>
  );
};

const FooterWithBoundary = () => (
  <ErrorBoundary
    name="Footer"
    packageName={packageJson.name}
    packageVersion={packageJson.version}
  >
    <Footer />
  </ErrorBoundary>
);

export { FooterWithBoundary as Footer };