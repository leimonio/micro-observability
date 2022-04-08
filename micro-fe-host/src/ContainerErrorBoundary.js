import React from 'react';
import errorConfig from './error.config';
import { getUserId } from './getUserId';
import './ContainerErrorBoundary.css';

class ContainerErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo = {}) {
    window?.newrelic?.noticeError(error, {
      ...errorInfo,
      ...errorConfig,
      userId: getUserId(),
      errorType: 'ErrorBoundary',
      componentSource: this.props.name,
    })

    // window?.newrelic?.noticeError(error, {
    //     moduleName: 'micro-fe-host',
    //     moduleVersion: '1.0.0',
    //     errorType: 'ErrorBoundary',
    //     componentSource: 'Profile'
    // });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='ErrorBoundary'>
          <div>
            <h3>Error in the Micro-FE container</h3>
          </div>
          <button className='Button' onClick={() => this.setState(() => ({ hasError: false }))}>Reset</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ContainerErrorBoundary;