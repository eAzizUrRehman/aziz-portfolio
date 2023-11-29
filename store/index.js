import {
  logoWhite,
  githubIcon,
  replitIcon,
  creativePulse,
  vueNotus,
  messagingApp,
} from "@/assets/images";

export default {
  state() {
    return {
      logo: logoWhite,
      navAndFooterLinks: [
        {
          id: 1,
          name: "Github",
          icon: githubIcon,
          url: "https://github.com/eAzizUrRehman",
        },
        {
          id: 2,
          name: "Replit",
          icon: replitIcon,
          url: "https://replit.com/@eAzizUrRehman",
        },
      ],
      projects: [
        {
          id: 1,
          name: "Vue Notus",
          image: vueNotus,
          deployedUrl: "https://vue-notus.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/vue-notus/",
        },
        {
          id: 2,
          name: "Creative Pulse",
          image: creativePulse,
          deployedUrl: "https://creative-pulse.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/creative-pulse",
        },
        {
          id: 3,
          name: "Messaging App",
          image: messagingApp,
          deployedUrl: "https://messaging-app-chat.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/messaging-app",
        },
      ],
      copyright: "© 2023 Aziz Ur Rehman, all rights reserved.",
    };
  },
};
