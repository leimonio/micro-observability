import React from 'react';
import { Button } from '../Button/Button';
import { ErrorBoundaryContainer, Title } from './ErrorBoundaryStyles';
import { trackError } from '@micro-observability/utils';


type ErrorBoundaryProps = {
    name: string;
    packageName: string;
    packageVersion: string;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo = {}) {
    trackError(error, {
      ...errorInfo,
      packageName: this.props.packageName,
      packageVersion: this.props.packageVersion,
      componentSource: this.props.name,
      errorType: 'ErrorBoundary',
    })
  }

  render() {
    if (this.state.hasError) {
        return (
            <ErrorBoundaryContainer>
                <div>
                    <Title>Error in the Micro-FE module {this.props.name}</Title>
                </div>
                <Button onClick={() => this.setState(() => ({ hasError: false }))}>
                    Reset
                </Button>
            </ErrorBoundaryContainer>
        );
    }

    return this.props.children; 
  }
}

export { ErrorBoundary };