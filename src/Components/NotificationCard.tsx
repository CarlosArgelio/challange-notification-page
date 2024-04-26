import { avatars, ImageGhess } from "./../assets/images";

export const NotificationCard = () => {
  return (
    <>
      <div className="flex gap-3 p-4 text-sm bg-very-ligth-graying-blue text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.markWebber} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Mark Webber
            </span>{" "}
            <span>reacted to your recent post</span>{" "}
            <span className="font-semibold hover:text-primary-blue">
              My first tournament today!
            </span>{" "}
            {/* status */}
            <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span>
          </p>
          <p className="text-grayish-blue font-medium">1m ago</p>
        </div>
      </div>

      <div className="flex gap-3 p-4 text-sm bg-very-ligth-graying-blue text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.angelaGray} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Angela Gray
            </span>{" "}
            <span>followed you</span> {/* status */}
            <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span>
          </p>
          <p className="text-grayish-blue font-medium">5m ago</p>
        </div>
      </div>

      <div className="flex gap-3 p-4 text-sm bg-very-ligth-graying-blue text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.jacobThompson} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Jacob Thompon
            </span>{" "}
            <span>has joined your group</span>{" "}
            <span className="font-bold text-primary-blue">Chess Club</span>{" "}
            {/* status */}
            <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span>
          </p>
          <p className="text-grayish-blue font-medium">1d ago</p>
        </div>
      </div>

      <div className="flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.rizkyHasanuddin} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Rizky Hasanuddin
            </span>{" "}
            <span>sent you a private message</span> {/* status */}
            {/* <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span> */}
          </p>
          <p className="text-grayish-blue font-medium mb-2">5 days ago</p>
          <p className="border border-ligth-grayish-blue-2 p-1 rounded-lg hover:bg-ligth-grayish-blue-1">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>

      <div className="flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.kimberlySmith} alt="" className="w-10 h-10" />
        <div className="flex flex-col">
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Kimberly Smith
            </span>{" "}
            <span>commented on your picture</span> {/* status */}
            {/* <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span> */}
          </p>
          <p className="text-grayish-blue font-medium mb-2">1 week ago</p>
        </div>
        <img src={ImageGhess} alt="" className="w-10 h-10 absolute right-4" />
        {/* absolute right-4 */}
      </div>

      <div className="flex gap-3 p-4 text-sm text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.natashaPeterson} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Nathan Peterson
            </span>{" "}
            <span>reacted to your recent post</span>{" "}
            <span className="font-semibold hover:text-primary-blue">
              5 end-game strategies to increase your win rate
            </span>{" "}
            {/* status */}
            {/* <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span> */}
          </p>
          <p className="text-grayish-blue font-medium">2 weeks ago</p>
        </div>
      </div>

      {/* bg-very-ligth-graying-blue */}
      <div className="flex gap-3 p-4 text-sm  text-very-dark-blue cursor-pointer mb-1 rounded-lg relative">
        <img src={avatars.annaKim} alt="" className="w-10 h-10" />
        <div>
          <p>
            {" "}
            <span className="font-bold text-very-dark-blue hover:text-primary-blue">
              Anna Kim
            </span>{" "}
            <span>left the group</span>{" "}
            <span className="font-bold text-primary-blue">Chess Club</span>{" "}
            {/* status */}
            {/* <span className="inline-block w-2 h-2 bg-primary-red rounded-full ml-2"></span> */}
          </p>
          <p className="text-grayish-blue font-medium">2 weeks ago</p>
        </div>
      </div>
    </>
  );
};
