import { avatars, ImageGhess } from "./../assets/images";

export const NotificationCard = () => {
  return (
    <>
      {NOTIFICATIONS.map((item, index) => {
        return (
          <div
            id={(index + 1).toString()}
            className={`flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative ${
              item.status ? "" : "bg-very-ligth-graying-blue"
            }`}
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
                src={ImageGhess}
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
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
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
