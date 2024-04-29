import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { NotificationContext } from "./../Context";
export const NotificationCard = () => {
    const context = useContext(NotificationContext);
    const { notifications, setNotifications } = context;
    const handleChangeStatusNotification = (id) => {
        const changeNotificacionStatus = notifications.map((item) => {
            if (item.id === id) {
                return { ...item, status: true };
            }
            return item;
        });
        setNotifications(changeNotificacionStatus);
    };
    return (_jsx(_Fragment, { children: notifications.map((item, index) => {
            return (_jsxs("div", { className: `flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative ${item.status ? "" : "bg-very-ligth-graying-blue"}`, onClick: () => handleChangeStatusNotification(item.id), children: [_jsx("img", { src: item.avatar, alt: `Avatar user ${item.name}`, className: "w-10 h-10" }), _jsxs("div", { children: [_jsxs("p", { children: [" ", _jsx("span", { className: "font-bold text-very-dark-blue hover:text-primary-blue", children: item.name }), " ", _jsx("span", { children: item.action }), " ", item.site ? (_jsx("span", { className: "font-semibold hover:text-primary-blue", children: item.site })) : null, " ", item.status ? null : (_jsx("span", { className: "inline-block w-2 h-2 bg-primary-red rounded-full ml-2" })), " "] }), _jsx("span", { className: "text-grayish-blue font-medium", children: item.time }), item.message ? (_jsx("p", { className: "border border-ligth-grayish-blue-2 p-1 rounded-lg hover:bg-ligth-grayish-blue-1", children: item.message })) : null] }), item.imgRef ? (_jsx("img", { src: item.imgRef, alt: "", className: "w-10 h-10 absolute right-4" })) : null] }, (index + 1).toString()));
        }) }));
};
