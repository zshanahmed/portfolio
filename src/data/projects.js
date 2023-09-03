import sap from "../images/sap.png";
import chat_hq from "../images/chat_hq.png";
import car_showcase from "../images/car_showcase.png"

export const projects = [
    {
        title: "Car Showcase",
        description:
          "Car catalogue that allows the users to view models of different cars based on the car manufacturer. The users can filter the car models based on the manufacturer/model of the car. Moreover the users can also filter the results based on the fuel type of the car (Gas/Electric) and the year that car is manufactured.",
        skills: ["Nextjs 13", "Tailwind CSS", "HeadlessUI", "RapidAPI"],
        img: car_showcase,
        alt: "Monitor screen showing mockup of car showcase",
        github: "https://github.com/zshanahmed/next13-carshowcase",
        app: "https://next13-carshowcase-4f7m.vercel.app/"
      },
    {
      title: "Science Alliance Portal",
      description:
        "Web-app to facilitate Iowa Bioscience Academy to help them manage data of Science Alliance Members and administer them. I worked on Dashboard, Calendar, Login Page and overall Front-end UI.",
      skills: ["Django", "HTML/CSS", "Bootstrap", "MS Azure"],
      img: sap,
      alt: "Monitor screen showing mockup of science alliance portal",
      github: "https://github.com/zshanahmed/SAP"
    },
    {
      title: "Chat HQ",
      description:
        "Online chat application running on top of chatengine.io API to provide an interactive user experience to users. Users can login to start chatting or signup to create a new account. Users can also send images to other users in the thread and see who's online right now.",
      skills: ["React", "chatengine.io"],
      img: chat_hq,
      alt: "Monitor screen showing mockup of chat hq",
      github: "https://github.com/zshanahmed/CardsHQ"
    }
  ];