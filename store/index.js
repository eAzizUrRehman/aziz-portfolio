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
          title: "Vue Notus",
          image: vueNotus,
          deployedUrl: "https://vue-notus.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/vue-notus/",
          languages: [
            "Vue JS", "Tailwind CSS",
        
        ],
          features: [
            {
              id: 1,
              description: "Vue Router & Vuex setup",
            },
            {
              id: 2,
              description: "3 pages: Home, Docs, Download",
            },
            {
              id: 3,
              description: "Responsive Home page",
            },
          ],
        },
        {
          id: 2,
          title: "Creative Pulse",
          image: creativePulse,
          deployedUrl: "https://creative-pulse.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/creative-pulse",
          languages: ["Nuxt JS", "Tailwind CSS"],
          features: [
            {
              id: 1,
              description: "Routing & store setup",
            },
            {
              id: 2,
              description: "Layouts implemented",
            },
            {
              id: 3,
              description: "Navbar with dropdown",
            },
          ],
        },
        {
          id: 3,
          title: "Messaging App",
          image: messagingApp,
          deployedUrl: "https://messaging-app-chat.netlify.app/",
          codeUrl: "https://github.com/eAzizUrRehman/messaging-app",
          languages: ["Vue JS", "Plain CSS"],
          features: [
            {
              id: 1,
              description: "Passing data between components",
            },
            {
              id: 2,
              description: "Users, Chat, Profile sections",
            },
            {
              id: 3,
              description: "User search feature",
            },
          ],
        },
      ],
      copyright: "© 2023 Aziz Ur Rehman, all rights reserved.",
    };
  },
};
