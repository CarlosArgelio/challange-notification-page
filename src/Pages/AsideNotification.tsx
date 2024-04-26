import { ButtonMark, Counter, NotificationCard } from "./../Components";

export const Notification = () => {
  return (
    <>
      <section className="py-6 px-4">
        <div className="flex justify-between py-6 px-4 mb-6">
          <h3 className="font-[800] text-very-dark-blue text-[20px] -tracking-tight">
            Notifications <Counter />
          </h3>
          <ButtonMark />
        </div>

        <div
          className="
            desktop:max-w-[343px] desktop:m-auto desktop:text-base
            tablet:max-w-[343px] tablet:m-auto"
        >
          <NotificationCard />
        </div>
      </section>
    </>
  );
};
