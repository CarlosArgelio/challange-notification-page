import { useContext } from "react";
import { NotificationContext } from "./../Context";

export const ButtonMark = () => {
  const context = useContext(NotificationContext);

  const { notifications, setNotifications } = context;

  const handleMarkAll = () => {
    const MARK_ALL = notifications.map((item) => ({ ...item, status: true }));

    setNotifications(MARK_ALL);
  };

  return (
    <>
      <p
        onClick={handleMarkAll}
        className="text-dark-grayish-blue text-sm font-medium cursor-pointer hover:text-primary-blue"
      >
        Mark all as read
      </p>
    </>
  );
};
