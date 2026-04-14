import { useState } from 'react';
import { ActionContext } from './ActionContext';

const CallProvider = ({ children }) => {
    const [action, setAction] = useState([]);
    const data = {
        action,
        setAction
    }
    return (
        <ActionContext.Provider value={data}>
            {children}
        </ActionContext.Provider>
    );
};

export default CallProvider;