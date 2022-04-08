import React from 'react';
import errorConfig from './error.config';
import './ModuleErrorBoundary.css';
import { getUserId } from './getUserId';

class ModuleErrorBoundary extends React.Component {
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
      errorType: 'ErrorBoundary',
      componentSource: this.props.name,
      userId: getUserId(),
    })

    // window?.newrelic?.noticeError('error_modal_displayed', {
    //     moduleName: 'micro-fe-module',
    //     moduleVersion: '0.1.0',
    //     errorType: 'ErrorBoundary',
    //     componentSource: 'Profile'
    // });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='ErrorBoundary'>
          <div>
            <h3>Error in the Micro-FE module {this.props.name}</h3>
          </div>
          <button className='Button' onClick={() => this.setState(() => ({ hasError: false }))}>Reset</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ModuleErrorBoundary;