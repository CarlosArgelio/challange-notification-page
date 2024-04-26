import { ButtonMark, Counter, NotificationCard } from "./../Components";

export const Notification = () => {
  return (
    <>
      <section className="main">
        <div className="notification">
          <h3>
            Notifications <Counter />
          </h3>

          <ButtonMark />
        </div>

        <div className="post">
          {/* All Notification */}
          <NotificationCard />
        </div>
      </section>
    </>
  );
};
