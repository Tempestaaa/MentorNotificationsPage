import markWebber from "../assets/images/avatar-mark-webber.webp";
import angelaGray from "../assets/images/avatar-angela-gray.webp";
import jacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import annaKim from "../assets/images/avatar-anna-kim.webp";
import picture from "../assets/images/image-chess.webp";
import { useState } from "react";

type notifyType = {
  id: number;
  author: { avatar: string; name: string };
  action: { text: string; event?: string };
  read: boolean;
  time: string;
  message?: string;
  picture?: string;
}[];

const Notifications = () => {
  const [notifications, setNotifications] = useState<notifyType>([
    {
      id: 1,
      author: {
        avatar: markWebber,
        name: "Mark Webber",
      },
      action: {
        text: "reacted to your recent post",
        event: "My first tournament today!",
      },
      read: false,
      time: "1m",
    },
    {
      id: 2,
      author: {
        avatar: angelaGray,
        name: "Angela Gray",
      },
      action: {
        text: "followed you",
      },
      read: false,
      time: "5m",
    },
    {
      id: 3,
      author: {
        avatar: jacobThompson,
        name: "Jacob Thompson",
      },
      action: {
        text: "has joined your group",
        event: "Chess Club",
      },
      read: false,
      time: "1day",
    },
    {
      id: 4,
      author: {
        avatar: rizkyHasanuddin,
        name: "Rizky Hasanuddin",
      },
      action: {
        text: "sent you a private message",
      },
      read: true,
      time: "5 days",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      id: 5,
      author: {
        avatar: kimberlySmith,
        name: "Kimberly Smith",
      },
      action: {
        text: "commented on your picture",
      },
      read: true,
      time: "1week",
      picture: picture,
    },
    {
      id: 6,
      author: {
        avatar: nathanPeterson,
        name: "Nathan Peterson",
      },
      action: {
        text: "reacted to your recent post",
        event: "5 end-game stategies to increase your win rate",
      },
      read: true,
      time: "2 weeks",
    },
    {
      id: 7,
      author: {
        avatar: annaKim,
        name: "Anana Kim",
      },
      action: {
        text: "left the group",
        event: "Chess Club",
      },
      read: true,
      time: "2 weeks",
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  function handleUnread(id: number) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : { ...n }))
    );
  }

  return (
    <main className="max-w-full md:max-w-[50%] bg-white rounded-lg p-4 md:my-12">
      <div className="flex items-center justify-between p-4">
        <h1 className="font-extrabold text-xl mb-2">
          Nofitications{" "}
          <span className="text-white bg-Blue px-2 rounded-md text-base">
            {notifications.filter((n) => n.read == false).length}
          </span>
        </h1>
        <button
          onClick={handleMarkAllRead}
          className="font-medium text-Grayishblue cursor-pointer hover:text-blue-800"
        >
          Mask all as read
        </button>
      </div>

      <section className="flex flex-col gap-4">
        {notifications.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => handleUnread(item.id)}
              className={`flex items-center gap-4 p-4 ${
                item.read ? "bg-white" : "bg-Verylightgrayishblue"
              } rounded-md cursor-pointer`}
            >
              <img
                src={item.author.avatar}
                alt={item.author.avatar}
                className="w-12"
              />

              <div className="flex-grow">
                <p className="flex items-center gap-1 font-medium">
                  <span className="font-extrabold text-Verydarkblue">
                    <span className="cursor-pointer hover:text-blue-800">
                      {item.author.name} {""}
                    </span>
                    <span className="text-Grayishblue font-medium">
                      {item.action.text} {""}
                    </span>
                    <span
                      className={`text-Darkgrayishblue cursor-pointer hover:text-blue-800 ${
                        item.action.event?.match("Chess Club")
                          ? "text-Blue"
                          : ""
                      }`}
                    >
                      {item.action.event}
                    </span>
                    {!item.read && (
                      <span className="bg-Red w-2 aspect-square rounded-full inline-block ml-1"></span>
                    )}
                  </span>
                </p>
                <p className="text-Grayishblue">{item.time} ago</p>
              </div>
              {item.picture && (
                <img src={picture} alt="picture" className="w-12" />
              )}
            </div>
            {item.message && (
              <p className="ml-20 mr-4 p-4 border-2 border-Lightgrayishblue2 rounded-md text-Grayishblue font-medium cursor-pointer hover:bg-Lightgrayishblue1 hover:border-Lightgrayishblue1">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Notifications;
