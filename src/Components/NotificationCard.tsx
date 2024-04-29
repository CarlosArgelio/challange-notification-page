import { useContext } from "react";
import { NotificationContext } from "./../Context";

export const NotificationCard = () => {
  const context = useContext(NotificationContext);

  const { notifications, setNotifications } = context;

  const handleChangeStatusNotification = (id: number) => {
    const changeNotificacionStatus = notifications.map((item) => {
      if (item.id === id) {
        return { ...item, status: true };
      }
      return item;
    });

    setNotifications(changeNotificacionStatus);
  };

  return (
    <>
      {notifications.map((item, index) => {
        return (
          <div
            key={(index + 1).toString()}
            className={`flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative ${
              item.status ? "" : "bg-very-ligth-graying-blue"
            }`}
            onClick={() => handleChangeStatusNotification(item.id)}
          >
            {/* Avatar User */}
            <img
              src={item.avatar}
              alt={`Avatar user ${item.name}`}
              className="w-10 h-10"
            />
            {/* Content */}
            <div>
              <p>
                {/* Name user */}{" "}
                <span className="font-bold text-very-dark-blue hover:text-primary-blue">
                  {item.name}
                </span>{" "}
                {/* Action */}
                <span>{item.action}</span> {/* Site */}
                {item.site ? (
                  <span className="font-semibold hover:text-primary-blue">
                    {item.site}
                  </span>
                ) : null}{" "}
                {/* Status */}
                {item.status ? null : (
                  <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span>
                )}{" "}
              </p>
              {/* Time */}
              <span className="text-grayish-blue font-medium">{item.time}</span>

              {/* Message */}
              {item.message ? (
                <p className="border border-ligth-grayish-blue-2 p-1 rounded-lg hover:bg-ligth-grayish-blue-1">
                  {item.message}
                </p>
              ) : null}
            </div>
            {/* Image Ref */}
            {item.imgRef ? (
              <img
                src={item.imgRef}
                alt=""
                className="w-10 h-10 absolute right-4"
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
};
