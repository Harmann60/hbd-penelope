import type { Asset } from '$types';
import type { SingleOrMultiple, RecursivePartial, IOptions } from '@tsparticles/engine';

export const ASSETS_CACHE_KEY = 'assets/v1';

// dialogue assets data.
export const DIALOGUES = [
  {
    text: 'Penny-chan! Hindi ba\'t ngayon na ang kaarawan mo?',
    audio: '/audio/1.wav',
    playAfter: 0,
    choices: [
      {
        text: 'Oo...',
        selected: false
      }
    ]
  },
  {
    text: 'Bakit ka mukhang malungkot, Penny-chan?',
    audio: '/audio/2.wav',
    playAfter: 300,
    choices: [
      {
        text: 'Wala lang, Alice.',
        selected: false
      }
    ]
  },
  {
    text: 'Nasaan ang mga kaibigan mo? Busy ba sila lahat sa kaarawan mo?',
    audio: '/audio/3.wav',
    playAfter: 500,
    choices: [
      {
        text: 'Sa tingin ko...',
        selected: false
      },
      {
        text: 'Hindi naman.'
      }
    ]
  },
  {
    text: 'Wala \'yang problema! Ako ang makakasama mo buong araw ngayon, Penny-chan!',
    audio: '/audio/4.wav',
    playAfter: 300,
    choices: []
  },
  {
    text: 'Alam mo ba, limang taon na tayong magkaibigan! Kahit magkalayo tayo—ikaw sa Pilipinas, ako sa India—hindi naging hadlang \'yan para sa atin.',
    audio: '/audio/5.wav',
    playAfter: 600,
    choices: []
  },
  {
    text: 'Ah! Muntik ko nang makalimutan!',
    audio: '/audio/6.wav',
    playAfter: 500,
    choices: []
  },
  {
    text: 'Penny-chan! Maligayang ika-{age} na kaarawan!',
    audio: '/audio/7.wav',
    playAfter: 500,
    choices: []
  },
  {
    text: 'Sana\'y manatili kang malusog at masaya, at makamit mo ang lahat ng mga pangarap mo—kasama na ang paglalakbay sa buong mundo!',
    audio: '/audio/8.wav',
    playAfter: 500,
    choices: []
  },
  {
    text: 'At balang araw, kapag nagkita na tayo, sabay nating gagawin \'yan. Pangako!',
    audio: '/audio/9.wav',
    playAfter: 500,
    choices: [
      {
        text: 'Wahh! Salamat, Alice! Siguradong mangyayari \'yan!',
        selected: false
      }
    ]
  },
  {
    text: 'Sige! Araw mo \'to—maglaro tayo at magsaya nang buong araw, Penny-chan!',
    audio: '/audio/10.wav',
    playAfter: 500,
    choices: []
  }
];

// define all assets.
export const ASSETS: Asset[] = [
  {
    type: 'video-intro',
    src: '/video/Tendou Arisu Maid Live2D - Intro.webm'
  },
  {
    type: 'video-loop',
    src: '/video/Tendou Arisu Maid Live2D - Loop.webm'
  },
  {
    type: 'bgm',
    src: '/audio/Koi is Love BGM - Compressed.flac'
  },
  // merge dialogue audio assets.
  ...DIALOGUES.flatMap((e): Asset => ({ type: 'dialogue', src: e.audio }))
];

export const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 29,
      density: {
        enable: true,
        value_area: 6573.989449548644
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: '',
        width: 0,
        height: 0
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        size_min: 4.87246327380807,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: '#ffffff',
      opacity: 0,
      width: 0
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
} as unknown as SingleOrMultiple<RecursivePartial<IOptions>>;

/**
 * @description the loading quotes that will be displayed on the loading screen.
 * @property {object} quote[] - the array of objects that contain the quote informations.
 * @property {string} quote.name - the name of the person who said the quote.
 * @property {string} quote.quote - the quote itself.
 * @property {number} quote.length - to read the quote in milliseconds
 */
export const LOADING_QUOTES = [
  {
    name: 'Ajitani Hifumi',
    quote: `Even if it's a story where the ending is already decided... we can still choose how we get there. That's why I won't give up!`,
    length: 7500
  },
  {
    name: 'Sorasaki Hina',
    quote: `It doesn't matter how many times we have to start over. As long as we don't stop, we haven't lost.`,
    length: 6500
  },
  {
    name: 'Shiraishi Azusa',
    quote: `Even if everything is vanity, that is no reason to abandon hope. We struggle because it is fleeting.`,
    length: 6000
  },
  {
    name: 'Sunao Ookami Shiroko',
    quote: `If the path ahead is blocked, we just have to find a way around it. Or just break through. Giving up isn't an option.`,
    length: 7000
  },
  {
    name: 'Hanaoka Yuzu',
    quote: `Even if I'm scared, even if I want to hide in my locker... if it's for my friends, I'll find the courage to step out.`,
    length: 8000
  },
  {
    name: 'Black Suit (Gematria)',
    quote: `To be an adult is to take responsibility for the world you have created. That is the weight of your choices, Sensei.`,
    length: 7000
  },
  {
    name: 'Joumae Saori',
    quote: `Our pasts don't have to define our futures. We can choose to become something more than what we were taught to be.`,
    length: 7000
  },
  {
    name: 'Takanashi Hoshino',
    quote: `Moving forward is tiring, and it hurts sometimes. But if you stop, you'll never see the sunrise. So, let's keep walking, okay?`,
    length: 8000
  },
  {
    name: 'Nanagami Rin',
    quote: `Efficiency is important, but it is the 'irrational' will of the students that truly changes the world.`,
    length: 6000
  },
  {
    name: 'Tendou Aris',
    quote: `Life is like an RPG! Even if you fail a quest, you gain experience points. As long as you don't press 'Delete Save,' you can always try again!`,
    length: 9000
  },
  {
    name: 'Saiba Momoi',
    quote: `If you're not having fun, what's the point? Let's turn this disaster into the best game ever!`,
    length: 5500
  },
  {
    name: 'Kurodate Haruna',
    quote: `Passion is the secret ingredient to any masterpiece. Without the drive to seek perfection, one is simply existing, not living.`,
    length: 7000
  },
  {
    name: 'Arona',
    quote: `Sensei, don't worry! Even if things look dark, a miracle is just a heartbeat away. I'll be right here to help you!`,
    length: 7000
  },
  {
    name: 'Amami Nodoka',
    quote: `Even if the stars are far away and hard to see, they are always there. You just have to keep looking up.`,
    length: 6500
  },
  {
    name: 'Urawa Hanako',
    quote: `Sometimes, the most 'proper' thing you can do is stop caring about what others think and just be true to yourself.`,
    length: 7000
  }
];
