import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { NotificationContext } from "./../Context";
export const Counter = () => {
    const context = useContext(NotificationContext);
    const { count } = context;
    return (_jsx(_Fragment, { children: _jsx("span", { className: "inline-block bg-primary-blue text-white w-8 h-[30px] text-center rounded-md", children: count }) }));
};
