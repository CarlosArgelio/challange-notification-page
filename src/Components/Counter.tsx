import { useContext } from "react";
import { NotificationContext } from "./../Context";

export const Counter = () => {
  const context = useContext(NotificationContext);

  const { count } = context;

  return (
    <>
      <span className="inline-block bg-primary-blue text-white w-8 h-[30px] text-center rounded-md">
        {count}
      </span>
    </>
  );
};
