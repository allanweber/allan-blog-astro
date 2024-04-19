import type { Site, SkillsObjects, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.allanweber.dev",
  author: "Allan Weber",
  desc: "Logbook of a full stack software developer",
  title: "ALLANWEBER.DEV",
  ogImage: "og-blog.png",
  lightAndDarkMode: true,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/allanweber",
    linkTitle: `Check ${SITE.title} codes on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/allanweber",
    linkTitle: `Follow ${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/allancassianoweber/",
    linkTitle: `Check ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/acassianoweber",
    linkTitle: `Follow ${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Web",
    href: "https://allanweber.dev",
    linkTitle: `Check ${SITE.title} website`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:a.cassianoweber@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const SKILLS: SkillsObjects = [
  {
    name: "Javascript",
    linkTitle: "Javascript",
    active: true,
  },
  {
    name: "Java",
    linkTitle: "Java",
    active: true,
  },
  {
    name: "Typescript",
    linkTitle: "Typescript",
    active: true,
  },
  {
    name: "Python",
    linkTitle: "Python",
    active: true,
  },
  {
    name: "AWS",
    linkTitle: "AWS",
    active: true,
  },
  {
    name: "Vercel",
    linkTitle: "Vercel",
    active: true,
  },
  {
    name: "NodeJs",
    linkTitle: "NodeJs",
    active: true,
  },
  {
    name: "Spring",
    linkTitle: "Spring",
    active: true,
  },
  {
    name: "React",
    linkTitle: "React",
    active: true,
  },
  {
    name: "NextJs",
    linkTitle: "NextJs",
    active: true,
  },
  {
    name: "Kafka",
    linkTitle: "Kafka",
    active: true,
  },
  {
    name: "Rabbit",
    linkTitle: "Rabbit",
    active: true,
  },
  {
    name: "Mongo",
    linkTitle: "Mongo",
    active: true,
  },
  {
    name: "Postgres",
    linkTitle: "Postgres",
    active: true,
  },
  {
    name: "MySql",
    linkTitle: "MySql",
    active: true,
  },
  {
    name: "Redis",
    linkTitle: "Redis",
    active: true,
  },

  {
    name: "Docker",
    linkTitle: "Docker",
    active: true,
  },
  {
    name: "Kubernetes",
    linkTitle: "Kubernetes",
    active: true,
  },
  {
    name: "Maven",
    linkTitle: "Maven",
    active: true,
  },
  {
    name: "WebPack",
    linkTitle: "WebPack",
    active: true,
  },
  {
    name: "GithubActins",
    linkTitle: "GithubActins",
    active: true,
  },
  {
    name: "Jenkins",
    linkTitle: "Jenkins",
    active: true,
  },
];
