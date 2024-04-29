import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { NotificationContext } from "./../Context";
export const ButtonMark = () => {
    const context = useContext(NotificationContext);
    const { notifications, setNotifications } = context;
    const handleMarkAll = () => {
        const MARK_ALL = notifications.map((item) => ({ ...item, status: true }));
        setNotifications(MARK_ALL);
    };
    return (_jsx(_Fragment, { children: _jsx("p", { onClick: handleMarkAll, className: "text-dark-grayish-blue text-sm font-medium cursor-pointer hover:text-primary-blue", children: "Mark all as read" }) }));
};
