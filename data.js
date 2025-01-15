import {
  faBookOpen,
  faCircleQuestion,
  faCommentNodes,
} from "@fortawesome/free-solid-svg-icons";

// purchased courses image...
import thumbnailImg from "/download.jpg";
import cssImg from "/css.jpg";
import jsImg from "/js.jpeg";

export const NAV_LINKS = [
  // {
  //   linkText: "Home",
  //   hyperLink: "/",
  //   faImage: faBookOpen
  // },
  {
    linkText: "Curriculum",
    hyperLink: "curriculum",
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
    id: 'course1',
    title: 'HTML for Beginners',
    tutor: 'quietdev',
    image: thumbnailImg
  },
  {
    id: 'course2',
    title: 'CSS for Beginners',
    tutor: 'quietdev',
    image: cssImg
  },
  {
    id: 'course3',
    title: 'JavaScript for Beginners',
    tutor: 'quietdev',
    image: jsImg
  }
]