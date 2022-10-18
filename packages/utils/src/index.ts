declare global {
    interface Window {
        newrelic: {
            noticeError: (error: any, extraInfo: any) => void;
            addPageAction: (actionName: string, actionDetails: any) => void;
        };
    }
}

export const getUserId = (): string => {
    return 'UserId-1234';
}

export const trackError = (error = {}, extraInfo = {}) => {
    window?.newrelic?.noticeError(error, {
        ...extraInfo,
        userId: getUserId(),
    })
}

export const trackAction = (actionName: string, actionDetails = {}) => {
    window?.newrelic?.addPageAction(actionName, {
        ...actionDetails,
        userId: getUserId(),
    })
}
