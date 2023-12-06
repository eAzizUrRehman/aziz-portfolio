import {
  logoWhite,
  githubIcon,
  replitIcon,
  creativePulse,
  vueNotus,
  messagingApp,

  // mini projects
  analogClock,
  countdownTimer,
  dictionaryApp,
  digitalClock,
  passwordGenerator,
  popupModal,
  qrGenerator,
  recipeApp,
  registrationForm,
  weatherApp
} from '@/assets/images'

export default {
  state() {
    return {
      logo: logoWhite,
      navAndFooterLinks: [
        {
          id: 1,
          name: 'Github',
          icon: githubIcon,
          url: 'https://github.com/eAzizUrRehman'
        },
        {
          id: 2,
          name: 'Replit',
          icon: replitIcon,
          url: 'https://replit.com/@eAzizUrRehman'
        }
      ],
      projects: [
        {
          id: 1,
          title: 'Vue Notus',
          image: vueNotus,
          deployedUrl: 'https://vue-notus.netlify.app/',
          codeUrl: 'https://github.com/eAzizUrRehman/vue-notus/',
          languages: ['Vue JS', 'Tailwind CSS'],
          features: [
            {
              id: 1,
              description: 'Vue Router & Vuex setup'
            },
            {
              id: 2,
              description: '3 pages: Home, Docs, Download'
            },
            {
              id: 3,
              description: 'Responsive Home page'
            }
          ]
        },
        {
          id: 2,
          title: 'Creative Pulse',
          image: creativePulse,
          deployedUrl: 'https://creative-pulse.netlify.app/',
          codeUrl: 'https://github.com/eAzizUrRehman/creative-pulse',
          languages: ['Nuxt JS', 'Tailwind CSS'],
          features: [
            {
              id: 1,
              description: 'Routing & store setup'
            },
            {
              id: 2,
              description: 'Layouts implemented'
            },
            {
              id: 3,
              description: 'Navbar with dropdown'
            }
          ]
        },
        {
          id: 3,
          title: 'Messaging App',
          image: messagingApp,
          deployedUrl: 'https://messaging-app-chat.netlify.app/',
          codeUrl: 'https://github.com/eAzizUrRehman/messaging-app',
          languages: ['Vue JS', 'Plain CSS'],
          features: [
            {
              id: 1,
              description: 'Users, Chat, Profile sections'
            },
            {
              id: 2,
              description: 'Can search for a user'
            },
            {
              id: 3,
              description: 'Can send message'
            }
          ]
        }
      ],
      miniProjects: [
        {
          id: 1,
          title: 'Recipe App',
          image: recipeApp,
          deployedUrl: 'https://recipe-app-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/recipe-app',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Data fetched from an API'
            },
            {
              id: 2,
              description: 'Search is fully functional'
            },
            {
              id: 3,
              description: 'App is responsive'
            }
          ]
        },
        {
          id: 2,
          title: 'Dictionary App',
          image: dictionaryApp,
          deployedUrl: 'https://dictionary-app-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/dictionary-app',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Data fetched from an API'
            },
            {
              id: 2,
              description: 'Search is fully functional'
            },
            {
              id: 3,
              description: 'App is responsive'
            }
          ]
        },
        {
          id: 3,
          title: 'Password Generator',
          image: passwordGenerator,
          deployedUrl: 'https://password-generator-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/password-generator',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Can generate a strong password'
            },
            {
              id: 2,
              description: 'Upto 30 chars password'
            },
            {
              id: 3,
              description: 'User can select the choices'
            }
          ]
        },
        {
          id: 4,
          title: 'QR Generator',
          image: qrGenerator,
          deployedUrl: 'https://qr-generator-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/qr-generator',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Can generate QR for text or URL'
            },
            {
              id: 2,
              description: 'Uses a pre-built library'
            },
            {
              id: 3,
              description: 'Can download the QR'
            }
          ]
        },
        {
          id: 5,
          title: 'Weather App',
          image: weatherApp,
          deployedUrl: 'https://weather-app-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/weather-app',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Fetch real weather data'
            },
            {
              id: 2,
              description: 'Uses API for the data'
            },
            {
              id: 3,
              description: 'Can search any location'
            }
          ]
        },
        {
          id: 6,
          title: 'Countdown Timer',
          image: countdownTimer,
          deployedUrl: 'https://countdown-timer-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/countdown-timer',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Countdown the time for a deal'
            },
            {
              id: 2,
              description: 'Use system time'
            },
            {
              id: 3,
              description: 'Responsive design'
            }
          ]
        },
        {
          id: 7,
          title: 'Analog Clock',
          image: analogClock,
          deployedUrl: 'https://analog-clock-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/analog-clock',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Full functional clock'
            },
            {
              id: 2,
              description: 'Get system time'
            },
            {
              id: 3,
              description: 'Show hours, minutes, seconds'
            }
          ]
        },
        {
          id: 8,
          title: 'Digital Clock',
          image: digitalClock,
          deployedUrl: 'https://digital-clock-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/digital-clock',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Show real time'
            },
            {
              id: 2,
              description: 'Get system time'
            },
            {
              id: 3,
              description: 'Show hours, minutes, seconds'
            }
          ]
        },

        {
          id: 9,
          title: 'Registration Form',
          image: registrationForm,
          deployedUrl: 'https://registration-form-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/registration-form',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Have 2 boxes, sign up and login '
            },
            {
              id: 2,
              description: 'Can switch between sign up and login'
            },
            {
              id: 3,
              description: 'Responsive design'
            }
          ]
        },
        {
          id: 10,
          title: 'Popup Modal',
          image: popupModal,
          deployedUrl: 'https://popup-modal-aziz.netlify.app/',
          codeUrl:
            'https://github.com/eAzizUrRehman/code-traversal/tree/master/popup-modal',
          languages: ['Plain CSS', 'Vanilla JS'],
          features: [
            {
              id: 1,
              description: 'Can open modal'
            },
            {
              id: 2,
              description: 'Can close modal'
            },
            {
              id: 3,
              description: 'Responsive design'
            }
          ]
        }
      ],
      copyright: '© 2023 Aziz Ur Rehman, all rights reserved.'
    }
  }
}
