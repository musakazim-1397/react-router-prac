import { createContext, useState } from "react";

const NotificationContext=createContext({
    notification:null,
    setNotification:(notificationData)=>{},
    users:[]
});

export const NotificationContextProvider=({children})=>{
    const [notification,setNotification]=useState(null);

    const setNotificationHandler=(notificationData)=>{
        setNotification(notificationData);
    }
    const context = {
        notification:notification,
        setNotification:setNotificationHandler,
        users:[{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Jack"}]
    }
    return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>
}
export default NotificationContext;