import { ButtonMark, Counter, NotificationCard } from "./../Components";

export const Notification = () => {
  return (
    <>
      <aside>
        <div>
          <p>
            Notifications <Counter />
          </p>

          <ButtonMark />
        </div>

        {/* All Notification */}
        <NotificationCard />
      </aside>
    </>
  );
};
