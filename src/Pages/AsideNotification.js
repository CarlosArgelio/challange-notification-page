import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ButtonMark, Counter, NotificationCard } from "./../Components";
import { NotificationProvider } from "./../Context";
export const Notification = () => {
    return (_jsx(_Fragment, { children: _jsx(NotificationProvider, { children: _jsxs("section", { className: "py-6 px-4", children: [_jsxs("div", { className: "flex justify-between py-6 px-4 mb-6", children: [_jsxs("h3", { className: "font-[800] text-very-dark-blue text-[20px] -tracking-tight", children: ["Notifications ", _jsx(Counter, {})] }), _jsx(ButtonMark, {})] }), _jsx("div", { className: "\n            desktop:max-w-[343px] desktop:m-auto desktop:text-base\n            tablet:max-w-[343px] tablet:m-auto", children: _jsx(NotificationCard, {}) })] }) }) }));
};
