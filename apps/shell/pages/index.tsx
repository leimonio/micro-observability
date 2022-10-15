import React from "react";
import Head from "next/head";
import { useState } from "react";
import { Host } from "@leanjs/next";
import { Button, ErrorModal, ErrorBoundary } from "@micro-observability/ui";

import { Header, Title, HeaderContainer, ProfileContainer, FooterContainer } from '../components/HomeStyles';
import packageJson from '../package.json';

const Home = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [details, setDetails] = useState({ version: packageJson.version });

  return (
    <>
      <Head>
        <title>Lean Observability</title>
        <script type="text/javascript" src="/static/newrelic.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Header>
          <Title>My Account v{details.version}</Title>
          <div>
            <Button onClick={() => setDetails(null)}>Component Error</Button>
            <Button onClick={() => setIsModalDisplayed(true)}>Modal Error</Button>
          </div>
        </Header>
        <div>
          <HeaderContainer>
            <Host app={{ packageName: "@micro-observability/header" }} />
          </HeaderContainer>
          <ProfileContainer>
            <Host app={{ packageName: "@micro-observability/profile" }} />
          </ProfileContainer>
          <FooterContainer>
            <Host app={{ packageName: "@micro-observability/footer" }} />
          </FooterContainer>
        </div>
        <ErrorModal 
          isOpen={isModalDisplayed}
          onClose={() => setIsModalDisplayed(false)}
          meta={{
            moduleName: packageJson.name,
            moduleVersion: packageJson.version,
            componentSource: 'Home',
          }} />
      </div>
    </>
  );
};

const HomeWithErrorBoundary = () => {
  return (
    <ErrorBoundary
      name="Home"
      packageName={packageJson.name}
      packageVersion={packageJson.version}
    >
      <Home />
    </ErrorBoundary>
  )
}

export default HomeWithErrorBoundary;
