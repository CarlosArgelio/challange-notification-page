import { avatars } from "./../assets/images";

export const NotificationCard = () => {
  return (
    <>
      {/* Notifications */}
      <div>
        <div>
          <img src={avatars.markWebber} alt="" />
          <p>
            {" "}
            <span>Mark Webber</span> <span>reacted to your recent post</span>{" "}
            <span>My first tournament today!</span>{" "}
            <span className="status">*</span>
          </p>
          <p>1m ago</p>
        </div>

        <div>
          <p>
            {" "}
            <span>Angela Gray</span> <span>followed you</span>
          </p>
          <p>5m ago</p>
        </div>

        <div>
          <p>
            {" "}
            <span>Rizky Hasanuddin</span>{" "}
            <span>sent you a private message</span>
          </p>
          <p>5 days ago</p>
          <p>
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>

        <div>
          <p>
            {" "}
            <span>Kimberly Smith</span> <span>commented on your picture</span>
          </p>
          <p>1 week ago</p>
        </div>

        <div>
          <p>
            {" "}
            <span>Nathan Peterson</span>{" "}
            <span>reacted to your recent post</span>{" "}
            <span>5 end-game strategies to increase your win rate</span>
          </p>
          <p>2 weeks ago</p>
        </div>

        <div>
          <p>
            {" "}
            <span>Anna Kim</span> <span>left the group</span>{" "}
            <span>Chess Club</span>
          </p>
          <p>2 weeks ago</p>
        </div>
      </div>
    </>
  );
};
