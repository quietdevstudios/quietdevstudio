import {
  faBookOpen,
  faCircleQuestion,
  faCommentNodes,
} from "@fortawesome/free-solid-svg-icons";

// purchased courses image...
import thumbnailImg from "/download.jpg";
import cssImg from "/css.jpg";
import jsImg from "/js.jpeg";

// course-list image...
import FE from "/FE.svg";
import uiux from "/uiux.svg";

export const NAV_LINKS = [
  // {
  //   linkText: "Home",
  //   hyperLink: "/",
  //   faImage: faBookOpen
  // },
  {
    linkText: "Courses",
    hyperLink: "courses-list",
    faImage: faBookOpen,
  },
  {
    linkText: "My Learning",
    hyperLink: "my-learning",
    faImage: faBookOpen,
  },
  {
    linkText: "About",
    hyperLink: "about",
    faImage: faCircleQuestion,
  },
  {
    linkText: "Community",
    hyperLink: "https://chat.whatsapp.com/C9lCAAYQtEyEWOX880NnTv",
    faImage: faCommentNodes,
  },
  // {
  //   linkText: "Templates",
  //   hyperLink: "#",
  //   faImage: faBookOpen
  // },
  {
    linkText: "Sign In",
    hyperLink: "signin",
    faImage: faBookOpen,
  },
  {
    linkText: "Get Started",
    hyperLink: "signup",
    faImage: faBookOpen,
  },
];

export const PURCHASEDCOURSES = [
  {
    id: "course1",
    title: "HTML for Beginners",
    tutor: "quietdev",
    image: thumbnailImg,
  },
  {
    id: "course2",
    title: "CSS for Beginners",
    tutor: "quietdev",
    image: cssImg,
  },
  {
    id: "course3",
    title: "JavaScript for Beginners",
    tutor: "quietdev",
    image: jsImg,
  },
];

export const COURSECONTENT = [
  {
    id: "1",
    courseTitle: "Introduction and Overview",
    sectionNumber: 1,
    completedSteps: 0,
    totalSteps: 10,
    estimatedTime: `${25}min`,
    topics: [
      { topicTitle: "What is HTML?", topicTime: "10m" },
      { topicTitle: "History and evolution of HTML", topicTime: "20m" },
      { topicTitle: "Role of HTML in web development", topicTime: "15m" },
      { topicTitle: "Basic structure of an HTML document", topicTime: "25m" },
      {
        topicTitle: "Tools for writing HTML (Code editors like VS Code)",
        topicTime: "20m",
      },
    ],
  },
  {
    id: "2",
    courseTitle: "HTML Basics",
    sectionNumber: 2,
    completedSteps: 0,
    totalSteps: 20,
    estimatedTime: `${35}min`,
    topics: [
      { topicTitle: "HTML elements and tags", topicTime: "10m" },
      { topicTitle: "Attributes and their usage", topicTime: "20m" },
      { topicTitle: "Comments in HTML", topicTime: "15m" },
      { topicTitle: "Nesting and hierarchy of elements", topicTime: "25m" },
    ],
  },
  {
    id: "3",
    courseTitle: "Text Formatting and Semantics",
    sectionNumber: 3,
    completedSteps: 0,
    totalSteps: 30,
    estimatedTime: `${20}min`,
    topics: [
      { topicTitle: "Headings (<h1> to <h6>)", topicTime: "10m" },
      { topicTitle: "Paragraphs (<p>)", topicTime: "20m" },
      {
        topicTitle: "Bold, Italics, and Underline (<b>, <i>, <u>)",
        topicTime: "15m",
      },
      {
        topicTitle:
          "Semantic tags (<article>, <section>, <header>, <footer>, etc.)",
        topicTime: "25m",
      },
    ],
  },
  {
    id: "4",
    courseTitle: "Links and Navigation",
    sectionNumber: 4,
    completedSteps: 0,
    totalSteps: 12,
    estimatedTime: `${15}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "5",
    courseTitle: "Images and Media",
    sectionNumber: 5,
    completedSteps: 0,
    totalSteps: 15,
    estimatedTime: `${15}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "6",
    courseTitle: "Tables",
    sectionNumber: 6,
    completedSteps: 0,
    totalSteps: 8,
    estimatedTime: `${45}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "7",
    courseTitle: "Forms",
    sectionNumber: 7,
    completedSteps: 0,
    totalSteps: 6,
    estimatedTime: `${35}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "8",
    courseTitle: "HTML5 Features",
    sectionNumber: 8,
    completedSteps: 0,
    totalSteps: 5,
    estimatedTime: `${12}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "9",
    courseTitle: "Structuring a Web Page",
    sectionNumber: 9,
    completedSteps: 0,
    totalSteps: 25,
    estimatedTime: `${50}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
  {
    id: "10",
    courseTitle: "Accessibility and Best Practices",
    sectionNumber: 10,
    completedSteps: 0,
    totalSteps: 20,
    estimatedTime: `${15}min`,
    topics: [
      { topicTitle: "Creating hyperlinks (<a>)", topicTime: "10m" },
      { topicTitle: "Absolute vs Relative URLs", topicTime: "20m" },
      { topicTitle: "Opening links in new tabs", topicTime: "15m" },
      { topicTitle: "Anchor links and navigation", topicTime: "25m" },
    ],
  },
];

export const COURSElIST = [
  {
    id: 1,
    courseTitle: "Wen Development",
    courseThumbnailImg: FE,
    courseDuration: "1 year course",
    courseTopics: "HTML & CSS, Vanilla JS, Nodejs, Reactjs...",
    nextCohortStartDate: "3rd of Mar., 2025",
  },
  {
    id: 2,
    courseTitle: "Graphics Design",
    courseThumbnailImg: uiux,
    courseDuration: "1 year course",
    courseTopics: "Figma, Adobe Photoshop, Canva...",
    nextCohortStartDate: "3rd of Mar., 2025",
  },
  {
    id: 3,
    courseTitle: "Virtual Assistance",
    courseThumbnailImg: uiux,
    courseDuration: "1 year course",
    courseTopics: "Communication, sales,...",
    nextCohortStartDate: "3rd of Mar., 2025",
  },
];
