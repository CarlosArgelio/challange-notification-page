import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import { avatars, ImageGhess } from "./../assets/images";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NotificationContext = createContext({});
export const NotificationProvider = ({ children, }) => {
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const countNotification = notifications.filter((notification) => notification.status === false);
        const countFalses = countNotification.length;
        setCount(countFalses);
    }, [notifications]);
    return (_jsx(NotificationContext.Provider, { value: {
            notifications,
            setNotifications,
            count,
            setCount,
        }, children: children }));
};
const NOTIFICATIONS = [
    {
        id: 1,
        avatar: avatars.markWebber,
        name: "Mark Webber",
        action: "reacted to your recent post",
        site: "My first tournament today!",
        type: "POST",
        status: false,
        time: "1m ago",
    },
    {
        id: 2,
        avatar: avatars.angelaGray,
        name: "Angela Gray",
        action: "followed you",
        site: "",
        type: "POST",
        status: false,
        time: "5m ago",
    },
    {
        id: 3,
        avatar: avatars.jacobThompson,
        name: "Jacob Thompson",
        action: "has joined your group",
        site: "Chess Club",
        type: "POST",
        status: false,
        time: "1d ago",
    },
    {
        id: 4,
        avatar: avatars.rizkyHasanuddin,
        name: "Rizky Hasanuddin",
        action: "sent you a private message",
        site: "",
        type: "MESSAGE",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        status: true,
        time: "5d ago",
    },
    {
        id: 5,
        avatar: avatars.kimberlySmith,
        name: "Kimberly Smith",
        action: "commented on your picture",
        site: "",
        type: "POST",
        imgRef: ImageGhess,
        status: true,
        time: "1w ago",
    },
    {
        id: 6,
        avatar: avatars.natashaPeterson,
        name: "Natasha Peterson",
        action: "reacted to your recent post",
        site: "5 end-game strategies to increase your win rate",
        type: "POST",
        status: true,
        time: "2w ago",
    },
    {
        id: 7,
        avatar: avatars.annaKim,
        name: "Anna Kim",
        action: "left the group",
        site: "Chess Club",
        type: "POST",
        status: true,
        time: "2w ago",
    },
];
