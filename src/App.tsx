import { Notification } from "./Pages";

export const App = () => {
  return (
    <>
      <div className="m-0 p-0 box-border font-plus-jakerta-sans">
        <Notification />

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
};
