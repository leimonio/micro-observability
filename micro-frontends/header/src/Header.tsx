import React, { useState } from 'react';
import { Button, ErrorModal, ErrorBoundary } from '@micro-observability/ui';
import { HeaderContainer } from './HeaderContainer';
import { Title } from './Title';

import packageJson from '../package.json';

function Header() {
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);
    const [details, setDetails] = useState({ version: packageJson.version });

    return (
        <HeaderContainer>
            <Title>Menu v{details.version}</Title>
            <div>
              <Button onClick={() => setDetails(null)}>Component Error</Button>
              <Button onClick={() => setIsModalDisplayed(true)}>Modal Error</Button>
            </div>
            <ErrorModal 
                isOpen={isModalDisplayed}
                onClose={() => setIsModalDisplayed(false)}
                meta={{
                    moduleName: packageJson.name,
                    moduleVersion: packageJson.version,
                    componentSource: 'Header',
                }}
            />
        </HeaderContainer>
    );
}

const HeaderWithBoundary = () => (
  <ErrorBoundary
    name="Header"
    packageName={packageJson.name}
    packageVersion={packageJson.version}
  >
    <Header />
  </ErrorBoundary>
);

export { HeaderWithBoundary as Header };
