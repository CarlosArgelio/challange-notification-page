import { createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NotificationContext = createContext({} as any);

export const NotificationProvider = ({
  children,
}: React.HTMLAttributes<ChildNode>) => {
  // const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <NotificationContext.Provider
      value={{
        // notifications,
        // setNotifications,
        count,
        setCount,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
