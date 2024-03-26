import {
  FaImage,
  FaBrain,
  FaVideo,
  FaGithub,
  FaChalkboardUser,
  FaFont,
} from "react-icons/fa6";
import { MdColorLens } from "react-icons/md";
import { FcRemoveImage } from "react-icons/fc";
import { GiInspiration } from "react-icons/gi";
import { CgTemplate } from "react-icons/cg";
import { BsVectorPen } from "react-icons/bs";

export const Categories = [
  {
    name: "AI",
    icon: <FaBrain />,
    tools: [
      {
        name: "TensorFlow",
        link: "https://www.tensorflow.org",
        description:
          "An open-source deep learning framework developed by Google.",
      },
      {
        name: "Keras",
        link: "https://keras.io/",
        description:
          "A high-level neural networks API, written in Python and capable of running on top of TensorFlow.",
      },
      {
        name: "ChatGpt",
        link: "https://chat.openai.com/",
        description:
          "A conversational AI model developed by OpenAI, capable of generating human-like text.",
      },
      {
        name: "Gemeni",
        link: "https://gemini.google.com/app",
        description:
          "A tool by Google for finding similar images and web pages based on visual similarity.",
      },
    ],
  },
  {
    name: "Colors",
    icon: <MdColorLens />,
    tools: [
      {
        name: "Color Hunt",
        link: "https://colorhunt.co",
        description:
          "A platform to discover and share beautiful color palettes.",
      },
      {
        name: "colors",
        link: "https://coolors.co/",
        description: "The world's largest library of colors.",
      },
      {
        name: "Klart",
        link: "https://klart.io",
        description:
          "A tool for collecting and organizing design inspirations.",
      },
      {
        name: "Adobe Color",
        link: "https://color.adobe.com",
        description: "Adobe's color wheel and color combination tool.",
      },
      {
        name: "Webkul",
        link: "https://webkul.github.io",
        description:
          "A color picker tool for selecting and copying colors from websites.",
      },
      {
        name: "LinkedIn Color Palette",
        link: "https://lnkd.in/dZ3it7H3",
        description:
          "LinkedIn's official color palette for use in design and branding.",
      },
    ],
  },
  {
    name: "Images",
    icon: <FaImage />,
    tools: [
      {
        name: "Unsplash",
        link: "https://unsplash.com",
        description:
          "A website providing high-quality, free images for commercial use.",
      },
      {
        name: "Pexels",
        link: "https://pexels.com",
        description: "A platform offering free stock photos and videos.",
      },
      {
        name: "Pixabay",
        link: "https://pixabay.com",
        description:
          "A vibrant community of creatives, sharing copyright-free images and videos.",
      },
      {
        name: "StockSnap",
        link: "https://stocksnap.io",
        description:
          "A website offering thousands of beautiful, high-resolution images.",
      },
      {
        name: "Burst",
        link: "https://burst.shopify.com",
        description: "Free stock photos for websites and commercial use.",
      },
      {
        name: "Storyset",
        link: "https://storyset.com",
        description: "Customizable illustrations for your next project.",
      },
    ],
  },
  {
    name: "Background Removal Images",
    icon: <FcRemoveImage />,
    tools: [
      {
        name: "KissPNG",
        link: "https://kisspng.com",
        description: "A platform providing free transparent PNG images.",
      },
      {
        name: "PNGIMG",
        link: "http://pngimg.com",
        description:
          "A website offering free PNG images with transparent backgrounds.",
      },
      {
        name: "FootyRenders",
        link: "https://footyrenders.com",
        description:
          "A collection of free football renders and football player PNG images.",
      },
      {
        name: "PNGTree",
        link: "https://pngtree.com",
        description:
          "A website offering millions of PNG images, backgrounds, and vectors for free download.",
      },
    ],
  },
  {
    name: "Videos",
    icon: <FaVideo />,
    tools: [
      {
        name: "Mixkit",
        link: "https://mixkit.co",
        description:
          "A website providing free stock video clips, music tracks, and sound effects.",
      },
      {
        name: "Coverr",
        link: "https://coverr.co",
        description:
          "A collection of beautiful, free stock videos for your website's background.",
      },
      {
        name: "Motion Places",
        link: "https://motionplaces.com",
        description:
          "Free videos of amazing places and tourist attractions around the world.",
      },
      {
        name: "Videezy",
        link: "https://videezy.com",
        description:
          "A community of videographers who download and share free HD stock video footage.",
      },
    ],
  },
  {
    name: "Inspiration",
    icon: <GiInspiration />,
    tools: [
      {
        name: "InspirationDE",
        link: "https://inspirationde.com",
        description:
          "A website showcasing the best design inspirations from around the world.",
      },
      {
        name: "LinkedIn Inspiration",
        link: "https://lnkd.in/dtxP6wzR",
        description:
          "LinkedIn's collection of design inspirations shared by professionals.",
      },
      {
        name: "Pinterest",
        link: "https://pinterest.com",
        description:
          "A visual discovery engine for finding design ideas and inspiration.",
      },
      {
        name: "Dribbble",
        link: "https://dribbble.com",
        description:
          "A community of designers sharing screenshots of their work, process, and projects.",
      },
    ],
  },
  {
    name: "Logo Design Inspiration",
    icon: <FaChalkboardUser />,
    tools: [
      {
        name: "LogoMoose",
        link: "https://logomoose.com",
        description:
          "A logo inspiration gallery showcasing the best logo designs from around the world.",
      },
      {
        name: "LogoPond",
        link: "https://logopond.com",
        description:
          "A website featuring inspirational logo designs submitted by graphic designers worldwide.",
      },
      {
        name: "LogoLounge",
        link: "https://logolounge.com",
        description:
          "A website and book series containing collections of logo designs.",
      },
      {
        name: "Logo Faves",
        link: "http://logofaves.com",
        description:
          "A curated collection of logo designs from around the world.",
      },
      {
        name: "LogoTalkz",
        link: "http://logotalkz.com",
        description:
          "A platform for designers to share, discuss, and explore logo design ideas.",
      },
      {
        name: "LogoSpire",
        link: "http://logospire.com",
        description:
          "A gallery showcasing the best logo designs and visual identities.",
      },
    ],
  },
  {
    name: "UI/UX Design Inspiration",
    icon: <FaChalkboardUser />,
    tools: [
      {
        name: "Inspired UI",
        link: "https://inspired-ui.com",
        description:
          "A collection of the best UI/UX design examples and resources for inspiration.",
      },
      {
        name: "Call to Idea",
        link: "https://calltoidea.com",
        description:
          "A platform featuring UI design examples for inspiration and creativity.",
      },
      {
        name: "LinkedIn UI/UX Inspiration",
        link: "https://lnkd.in/dpPWH-WB",
        description:
          "LinkedIn's collection of UI/UX design inspirations shared by professionals.",
      },
      {
        name: "Uplabs",
        link: "https://uplabs.com",
        description:
          "A platform for designers and developers to find and share resources for creating apps and websites.",
      },
    ],
  },
  {
    name: "Vector Logos",
    icon: <BsVectorPen />,
    tools: [
      {
        name: "SeekLogo",
        link: "https://seeklogo.com",
        description:
          "A database of brand logos in vector format available to download for free.",
      },
      {
        name: "LogoVector",
        link: "http://logovector.net",
        description: "A collection of vector logos and brands.",
      },
      {
        name: "Logo Types 101",
        link: "http://logotypes101.com",
        description: "A resource for free vector logos and logo templates.",
      },
      {
        name: "Logos Vector",
        link: "http://logos-vector.com",
        description: "A database of vector logos and logotypes.",
      },
    ],
  },
  {
    name: "Arabic Fonts",
    icon: <FaFont />,
    tools: [
      {
        name: "Arb Fonts",
        link: "https://arbfonts.com",
        description:
          "A collection of free Arabic fonts available for download.",
      },
      {
        name: "Font Face",
        link: "https://fontface.me",
        description:
          "A platform offering free fonts for personal and commercial use.",
      },
      {
        name: "Google Fonts",
        link: "https://fonts.google.com",
        description:
          "A library of free and open-source fonts optimized for the web.",
      },
      {
        name: "Brushez",
        link: "https://brushez.com",
        description:
          "A collection of free Arabic fonts, brushes, and resources for designers.",
      },
    ],
  },
  {
    name: "English Fonts",
    icon: <FaFont />,
    tools: [
      {
        name: "DaFont",
        link: "https://dafont.com",
        description: "A massive collection of freely downloadable fonts.",
      },
      {
        name: "1001 Fonts",
        link: "https://1001fonts.com",
        description: "A large collection of free fonts available for download.",
      },
      {
        name: "Font Squirrel",
        link: "https://fontsquirrel.com",
        description: "A collection of free fonts for commercial use.",
      },
      {
        name: "LinkedIn English Fonts",
        link: "https://lnkd.in/dGp6MXYJ",
        description:
          "LinkedIn's collection of English fonts shared by professionals.",
      },
      {
        name: "Google Fonts",
        link: "https://fonts.google.com",
        description:
          "A library of free and open-source fonts optimized for the web.",
      },
    ],
  },
  {
    name: "Templates",
    icon: <CgTemplate />,
    tools: [
      {
        name: "ThemeForest",
        link: "http://themeforest.net",
        description:
          "A marketplace for HTML templates, WordPress themes, and other design assets.",
      },
      {
        name: "BootstrapMade",
        link: "http://bootstrapmade.com",
        description:
          "A platform offering free and premium Bootstrap themes, templates, and UI kits.",
      },
      {
        name: "Start Bootstrap",
        link: "http://startbootstrap.com",
        description:
          "A collection of free and premium Bootstrap themes and templates.",
      },
    ],
  },
  {
    name: "GitHub Profile README.md",
    icon: <FaGithub />,
    tools: [
      {
        name: "GitHub Profile README Generator",
        link: "https://rahuldkjain.github.io/gh-profile-readme-generator/",
        description:
          "A tool for generating GitHub profile README files with ease.",
      },
    ],
  },
];

export default Categories;
