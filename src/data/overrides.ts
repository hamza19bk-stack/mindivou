/**
 * Mindivou — UK English copy.
 * Angle: coaching shaped around who you are, what you enjoy and what you hate.
 */
import { enCopy, mergeCopy } from './en-copy';

const siteCopy = {
  home: {
    seo: {
      title: 'Personal trainer: training built around who you are',
      description:
        'Coaching shaped by your tastes and your temperament: one-to-one sessions in person or online and a programme built from what you will actually enjoy doing.',
    },
    hero: {
      eyebrow: 'Personal training shaped around you',
      titleLead: 'Training that suits you,',
      titleMark: 'not the person next to you',
      lead: 'What you enjoy, what you dread, what you will never do twice: all of it shapes the plan. The best programme on paper is worthless if it is one you quietly hate.',
      visualLabel: 'Built from your preferences',
    },
    highlights: {
      eyebrow: 'The approach',
      title: 'Your preferences are information',
      subtitle: 'Four things we ask about that most plans ignore completely.',
      items: [
        { title: 'What you enjoy', text: 'The movements you like get more room, because you will actually do them.' },
        { title: 'What puts you off', text: 'If something makes you dread a session, we find another route to the same result.' },
        { title: 'How you like to be coached', text: 'Some people want detail and numbers, others want to be told what to do. Both are fine.' },
        { title: 'Where you feel comfortable', text: 'Gym, home, outdoors or on screen: the setting is part of the plan, not an afterthought.' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Learn you, then build',
      subtitle: 'Four steps that start with your temperament rather than a template.',
      steps: [
        { title: 'Getting to know you', text: 'Your history with exercise, what stuck, what did not, and what you would never repeat.' },
        { title: 'A plan in your style', text: 'Same principles as anyone else, assembled from the things that suit you.' },
        { title: 'Tested against real life', text: 'We try it, and the parts you avoid tell us as much as the parts you love.' },
        { title: 'Refined as we learn', text: 'The plan keeps shifting towards what you will keep doing, which is what makes it work.' },
      ],
    },
    cta: {
      eyebrow: 'First step',
      title: 'Tell us what you hate',
      lead: 'Genuinely. Knowing what puts you off shapes the plan faster than knowing what you want.',
    },
  },
  about: {
    seo: {
      title: 'About: coaching that adapts to your temperament',
      description: 'Why preferences matter: a plan you enjoy is a plan you repeat, and repetition is what produces results.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'The best plan is the one',
      titleMark: 'you would choose again',
      lead: 'Two people with the same goal often need completely different training, because they are completely different people.',
    },
    philosophy: {
      title: 'Personal, in the real sense',
      subtitle: 'Personalised should mean more than your name on a spreadsheet.',
      quote: 'A plan you enjoy gets repeated. A plan you endure gets dropped.',
    },
    values: {
      title: 'What shapes your plan',
      items: [
        { title: 'Listening', text: 'Your preferences are taken as seriously as your goal.' },
        { title: 'Flexibility', text: 'There is always another way to reach the same result.' },
        { title: 'Honesty', text: 'If a shortcut you want will not work, we say so and find a better route.' },
        { title: 'Enjoyment', text: 'Liking your training is treated as a performance factor, because it is one.' },
      ],
    },
  },
  services: {
    seo: {
      title: 'Services: coaching adapted to your style',
      description: 'One-to-one sessions in person or online, a written programme and nutrition guidance, each adapted to how you like to train.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four formats,',
      titleMark: 'assembled to suit you',
      lead: 'Mix them as your life changes. Nothing here is fixed for the sake of it.',
    },
  },
  booking: {
    seo: {
      title: 'Booking: a session built around your preferences',
      description: 'Book a first session where your tastes, your dislikes and your routine shape the plan from the start.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'Start with',
      titleMark: 'what suits you',
      lead: 'The first session is mostly questions. The better we know you, the better the plan fits.',
    },
  },
  contact: {
    seo: {
      title: 'Contact: tell us how you like to train',
      description: 'Get in touch and tell us what you enjoy, what you avoid and how you like to be coached.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us how',
      titleMark: 'you like to train',
      lead: 'Even a rough answer helps. What you avoid tells us as much as what you want.',
    },
  },
};

export const overrides: Record<string, unknown> = mergeCopy(enCopy, siteCopy) as unknown as Record<string, unknown>;
