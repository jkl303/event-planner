import { nanoid } from "@reduxjs/toolkit";

export const initialEvents = [
  {
    id: nanoid(),
    title: "Galery Opening",
    description:
      "Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",
    date: "2023-07-12",
    time: "16:00 am",
    location: "Poltava",
    category: "Art",
    picture: require("./../images/painting.jpg"),
    priority: "High",
  },
  {
    id: nanoid(),
    title: "Innovation Summit",
    description:
      "Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit. ",
    date: "2023-07-12",
    time: "15:00 am",
    location: "Kyiv",
    category: "Conference",
    picture: require("./../images/lights.jpg"),
    priority: "Medium",
  },
  {
    id: nanoid(),
    title: "Empower Your Creativity",
    description:
      "Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.",
    date: "2023-07-12",
    time: "15:00 pm",
    location: "Kyiv",
    category: "Workshop",
    picture: require("./../images/audience.jpg"),
    priority: "High",
  },
  {
    id: nanoid(),
    title: "Summer Soiree",
    description:
      "Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",
    date: "2023-07-12",
    time: "14:00 pm",
    location: "Kyiv",
    category: "Party",
    picture: require("./../images/glasses.jpg"),
    priority: "High",
  },
  {
    id: nanoid(),
    title: "Leadership Conference",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    date: "2023-07-12",
    time: "15:00 am",
    location: "Kyiv",
    category: "Business",
    picture: require("./../images/writing.jpg"),
    priority: "Medium",
  },
  {
    id: nanoid(),
    title: "Tech Startup Showcase",
    description:
      "Witness the future of technology as innovative startups showcase their groundbreaking ideas.",
    date: "2023-07-12",
    time: "11:00 pm",
    location: "Kyiv",
    category: "Workshop",
    picture: require("./../images/studio.jpg"),
    priority: "Low",
  },
  {
    id: nanoid(),
    title: "Acoustic Garden Concert",
    description:
      "Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.",
    date: "2023-07-12",
    time: "12:00 am",
    location: "Kyiv",
    category: "Music",
    picture: require("./../images/balls.jpg"),
    priority: "High",
  },
  {
    id: nanoid(),
    title: "Extreme Adventure Race",
    description:
      "Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.",
    date: "2023-07-12",
    time: "15:00 pm",
    location: "Kyiv",
    category: "Sport",
    picture: require("./../images/sportEvent.jpg"),
    priority: "Low",
  },
];
