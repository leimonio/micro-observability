import React, { useEffect } from 'react';
import Portal from './Portal';
import errorConfig from './error.config';
import { getUserId } from './getUserId';
import './ErrorModal.css';

const ErrorModal = ({ isOpen, onClose, meta = {} }) => {    
    if(!isOpen) return null;

    useEffect(() => {
        window?.newrelic?.addPageAction('error_modal_displayed', {
            ...errorConfig,
            ...meta,
            userId: getUserId(),
        });

        // window?.newrelic?.addPageAction('error_modal_displayed', {
        //     moduleName: 'micro-fe-module',
        //     moduleVersion: '0.1.0',
        //     componentSource: 'Profile'
        // });
    }, []);

    return (
        <Portal>
            <div className='Modal'>
                <button onClick={onClose}>X Close</button>
                <h1>ERROR</h1>
                <p>An error occured {meta.componentSource ? `in ${meta.componentSource}` : ''}</p>
            </div>
        </Portal>
    );
};

export default ErrorModal;