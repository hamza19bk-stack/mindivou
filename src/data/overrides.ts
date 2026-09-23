/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * Mindivou — angle : un coaching qui te ressemble. Tes goûts, ton caractère,
 * ce que tu détestes et ce qui te met en mouvement façonnent le programme.
 * (Distinct du « fait main », qui parle du soin apporté à la conception :
 * ici, c'est la PERSONNALITÉ de la personne accompagnée qui décide.)
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: un entraînement qui te ressemble`
        : `Coach sportif${nb}: un entraînement qui te ressemble`,
      description: `Coaching sportif construit autour de ton caractère${nb}: ce qui te plaît, ce qui t’ennuie et ce qui te met en mouvement décident du programme, en présentiel, en visio ou à distance.`,
    },
    hero: {
      eyebrow: 'Coaching sportif à ton image',
      titleLead: 'Un entraînement à ton image,',
      titleMark: 'pas à celle du voisin',
      lead: `Ce que tu détestes compte autant que ce qui te plaît. Dehors ou en intérieur, en musique ou dans le calme, défi permanent ou routine tranquille${nb}: ton programme se construit avec ton caractère, jamais contre lui.`,
      visualLabel: 'Fait pour toi, pas pour tout le monde',
    },
    highlights: {
      eyebrow: 'Ton caractère',
      title: 'Ta personnalité entre dans le programme',
      subtitle: `Quatre façons de tenir compte de qui tu es${nb}: un entraînement dans lequel tu te reconnais est un entraînement que tu gardes.`,
      items: [
        { title: 'Ce que tu aimes, ce que tu fuis', text: `Le bilan pose aussi les questions que l’on oublie${nb}: quel exercice te rebute, quel effort te plaît, ce qui t’a fait décrocher la dernière fois.` },
        { title: 'Ton moteur, pas un moteur générique', text: 'Certaines personnes avancent avec un défi à relever, d’autres avec une routine qui ne bouge pas. On repère ce qui te met en mouvement et le programme s’appuie dessus.' },
        { title: 'Le décor compte autant', text: 'Dehors ou en intérieur, en musique ou dans le silence, au réveil ou en fin de journée. Le contexte d’une séance se choisit avec toi, il change tout à l’envie d’y aller.' },
        { title: 'Un plan qui suit tes goûts', text: 'Tes envies évoluent, ton humeur aussi. Le programme se réaccorde régulièrement pour rester celui dans lequel tu te reconnais, pas celui d’il y a un cycle.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Le format qui colle à ton tempérament',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Te connaître, puis construire',
      subtitle: 'Quatre étapes pour passer de ce que tu es à un entraînement dans lequel tu te retrouves.',
      steps: [
        { title: 'Le portrait', text: `On parle autant de toi que de ton objectif${nb}: ton rapport au sport, ce qui t’amuse, ce qui t’ennuie profondément et ce que tu ne feras jamais.` },
        { title: 'Le programme à ton image', text: 'Les exercices sont retenus parmi ceux qui servent ton objectif et que tu as envie de faire. Les deux conditions comptent, et la seconde évite bien des abandons.' },
        { title: 'Les séances', text: `On ajuste au caractère du jour${nb}: envie de te défouler, goût pour la technique, énergie en berne. Le cadre reste solide, le ton s’adapte à toi.` },
        { title: 'Les réglages', text: 'Ce que tu as aimé ou détesté pèse autant que les repères de progression. Le plan se corrige dans les deux sens, sans jamais te demander de t’y plier.' },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `On parle de toi${nb}?`,
      lead: 'Une première séance pour découvrir ta personnalité sportive et esquisser un entraînement dans lequel tu te reconnais vraiment.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: un coach sportif qui part de qui tu es`,
      description: `Une approche du coaching sportif où ton caractère décide${nb}: tes goûts, tes refus et ce qui te met en mouvement façonnent le programme autant que ton objectif.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'Un coaching',
      titleMark: 'taillé dans ton caractère',
      lead: `Deux personnes avec le même objectif n’ont aucune raison de suivre le même programme. Leur histoire, leurs goûts et leur façon de se mettre en mouvement diffèrent${nb}: c’est de là que part tout le travail.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Quatre convictions de travail',
      subtitle: 'Elles expliquent pourquoi deux accompagnements ne se ressemblent jamais vraiment, du premier échange au suivi dans la durée.',
      steps: [
        { title: 'Partir de ta personnalité', text: 'Le niveau et l’emploi du temps ne suffisent pas. Ton tempérament, ta patience, ton goût du défi ou du calme pèsent tout autant dans la construction du plan.' },
        { title: 'Prendre tes refus au sérieux', text: 'Un exercice que tu détestes ne sera pas réalisé longtemps, quelles que soient ses qualités. On cherche alors une autre voie vers le même résultat.' },
        { title: 'Chercher ton moteur', text: `Une sensation à retrouver, une habitude paisible, l’envie de te surprendre, un défi à relever${nb}: ce qui te fait avancer t’appartient. Le programme s’appuie dessus plutôt que d’imposer le sien.` },
        { title: 'Suivre tes évolutions', text: 'Les goûts changent avec le temps et la progression. Le plan se relit régulièrement pour rester à ton image, et non à celle que tu avais au départ.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Ferme sur la méthode, souple sur tes goûts',
      subtitle: 'Trois principes qui font que le programme te ressemble, du premier bilan au suivi dans la durée.',
      items: [
        { title: 'Plaisant avant d’être parfait', text: 'Le programme théoriquement idéal ne vaut rien si tu n’as pas envie de l’ouvrir. On préfère une version que tu aimes faire et que tu continues.' },
        { title: 'Tes goûts ont leur mot à dire', text: 'Tu peux dire qu’un exercice t’ennuie sans avoir à te justifier. Si une envie va à l’encontre de ton objectif, on te le dit aussi, franchement.' },
        { title: 'Ressemblant plutôt que standard', text: 'Un plan copié sur un modèle général se défait vite. Un plan qui tient compte de ton caractère résiste mieux aux semaines difficiles.' },
      ],
      commitmentsTitle: 'Ce que tu trouveras ici',
      commitments: [
        'Des questions sur tes goûts autant que sur ton niveau.',
        'Le droit d’écarter un exercice qui ne te convient pas.',
        'Des variantes proposées quand un mouvement ne te parle pas.',
        'Un programme relu dès que tes envies changent.',
      ],
      notHereTitle: 'Ce que tu ne trouveras pas ici',
      notHere: [
        'Un modèle unique recopié d’une personne à l’autre.',
        'Des exercices imposés sans alternative possible.',
        'Des comparaisons avec les personnes accompagnées avant toi.',
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}Le meilleur programme est celui que tu as envie d’ouvrir demain matin.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui rend le coaching personnel',
      subtitle: 'Des repères valables dès la première séance et tout au long de l’accompagnement.',
      items: [
        { title: 'Curiosité', text: 'Les questions portent aussi sur ce que tu aimes en dehors du sport. Ces détails en disent long sur le genre de séance qui te conviendra.' },
        { title: 'Souplesse', text: 'La méthode reste exigeante, mais le chemin pour y arriver se négocie. Plusieurs routes mènent au même résultat, autant prendre celle qui te plaît.' },
        { title: 'Franchise', text: 'Tes goûts orientent le plan, ils ne le dictent pas entièrement. Quand une envie dessert ton objectif, on en discute ouvertement.' },
        { title: 'Reconnaissance', text: 'Tu dois pouvoir te retrouver dans ton programme en le lisant. S’il ressemble à celui de tout le monde, quelque chose a été manqué.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Des cadres différents, tous personnalisables',
      subtitle: `Certaines personnes aiment être accompagnées de près, d’autres préfèrent leur autonomie${nb}: les deux se respectent.`,
      texts: {
        inPerson: 'Des séances individuelles en salle, à domicile ou en extérieur, dans le décor et à l’heure qui te correspondent le mieux.',
        online: 'En visio, tu gardes ton environnement et tes habitudes, avec un guidage en direct et un ton qui s’ajuste à ton caractère.',
        remote: 'Un programme écrit à partir de tes goûts et de tes refus, revu à chaque fin de cycle selon ce que tu as aimé faire.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `Tu es plutôt de quel genre${nb}?`,
      lead: 'Raconte ce qui te plaît, ce que tu ne supportes pas et ce qui t’a déjà fait abandonner. Le reste se construit à partir de là.',
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services de coaching sportif${nb}: des formats à ton tempérament`,
      description: `Coaching individuel en présentiel ou en visio, programme d’entraînement personnalisé et repères nutritionnels${nb}: des formats de coaching sportif adaptés à ton caractère autant qu’à ton objectif.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Plusieurs formats,',
      titleMark: 'le tien ressemblera à toi',
      lead: `Le cadre change, la logique reste${nb}: on part de ton objectif et de ton caractère, puis on retient les exercices que tu es réellement disposée ou disposé à faire, séance après séance.`,
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Choisis le cadre qui te convient',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Ce qui ne change jamais',
      subtitle: `Quatre repères communs à chaque accompagnement${nb}: ce sont eux qui font qu’un programme te ressemble et se garde.`,
      items: [
        { title: 'Un bilan qui parle de toi', text: 'Aucune séance ne commence sans avoir posé ton point de départ, tes goûts, tes refus et un objectif dont on peut suivre l’évolution.' },
        { title: 'Un plan qui te suit', text: 'Le programme est relu d’après tes retours, et ce que tu as détesté compte autant que les repères chiffrés de progression.' },
        { title: 'Un échange sans détour', text: `Un exercice t’ennuie ou ne te parle pas${nb}? Tu le dis directement à ton coach et une variante est proposée.` },
        { title: 'Des repères qui te parlent', text: `Sensations, charges, souffle, aisance au quotidien${nb}: on retient les indicateurs que tu as envie de suivre, ceux que tu regarderas vraiment.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'Du premier message à un plan qui te ressemble',
      subtitle: `Aucune étape surprise${nb}: tu sais dès le départ comment ton caractère entre dans la construction.`,
      steps: [
        { title: 'Le premier échange', text: 'Tu réserves ou tu écris. On parle de ton objectif, de ton quotidien, mais aussi de ce que tu aimes et de ce que tu as déjà abandonné.' },
        { title: 'Le portrait sportif', text: 'Habitudes, niveau de départ, lieu, matériel, points de vigilance, et surtout tes préférences réelles. Un objectif réaliste est fixé ensemble.' },
        { title: 'La construction', text: 'Format, fréquence tenable, contenu des séances, décor et moment de la journée. Chaque choix tient compte de ce que tu as dit aimer, ou pas.' },
        { title: 'Les séances et les réglages', text: `Les séances s’enchaînent, avec corrections et ajustements. En fin de cycle, on regarde deux choses${nb}: ce qui a progressé, et ce que tu as eu plaisir à faire.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Tu ne te reconnais dans aucun programme${nb}?`,
      lead: 'C’est souvent le signe qu’aucun n’a été pensé pour toi. Une première séance permet d’en dessiner un qui parte de ta personnalité.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: une séance de coaching sportif pour parler de toi`,
      description: `Réserve ta première séance de coaching sportif${nb}: un échange sur tes goûts, ton objectif et ton quotidien, pour esquisser un entraînement qui te ressemble.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Une première séance',
      titleMark: 'pour parler de toi',
      lead: `Une séance pour poser ton objectif, mais aussi pour savoir qui tu es côté sport${nb}: ce qui t’amuse, ce qui t’ennuie, ce qui t’a déjà fait arrêter. Pas de test d’entrée, pas de discours commercial.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'Commence par te raconter',
      lead: 'Tu repars avec une direction claire et les premières idées d’un entraînement dans lequel tu te reconnais.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: dis à ton coach sportif ce qui te correspond`,
      description: `Une question sur le coaching sportif ou sur le format qui te conviendrait${nb}? Écris, appelle ou réserve directement ta séance.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Raconte-nous',
      titleMark: 'ce qui te ressemble',
      lead: `Pas de formulaire anonyme${nb}: tu écris ou tu appelles, et ton coach te répond. Dis où tu en es, ce que tu aimes et ce que tu ne supportes pas${nb}— on verra ensemble ce qui te correspond.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Une question se règle vite, un programme se taille sur mesure',
      lead: `Pour un point précis, écris-nous. Pour un entraînement à ton image, réserve plutôt une première séance${nb}: c’est là que l’on apprend à te connaître.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance en tête-à-tête menée à ta façon${nb}: posture corrigée en direct, ton et intensité accordés à ton caractère du jour.`,
      description:
        `Ton coach est à tes côtés du premier au dernier mouvement, avec un ton qui s’ajuste à toi${nb}: guidage rapproché ou grande autonomie, ambiance calme ou énergique. La posture est corrigée en direct et le contenu tient compte de ce que tu aimes faire.`,
      includes: [
        `Bilan de départ${nb}: objectifs, habitudes, goûts et refus`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Un décor et un moment de la journée choisis avec toi',
        `Points d’étape réguliers${nb}: progression et plaisir pris aux séances`,
      ],
      forWho:
        'Tu as déjà suivi des programmes tout faits sans t’y retrouver, et tu veux un accompagnement qui parte de ton tempérament.',
    },
    {
      summary: `Le même accompagnement à distance${nb}: une séance guidée en direct, dans ton décor et selon tes habitudes.`,
      description:
        'Caméra allumée, la séance se déroule chez toi, dans ta salle ou en déplacement, avec ta musique et tes repères. Les mouvements sont observés puis ajustés série après série, et le ton du guidage s’adapte à ce qui te motive.',
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Exercices choisis selon ton matériel et tes préférences',
        'Consignes pour bien t’installer face à la caméra',
        'Ce que tu veux garder ou changer pour la séance suivante',
      ],
      forWho:
        'Tu tiens à ton environnement et à tes habitudes, et tu veux un guidage en direct qui s’y adapte plutôt que l’inverse.',
    },
    {
      summary: `Un plan écrit à partir de tes goûts${nb}: séances, séries, temps de repos et progression, sans exercice que tu détestes.`,
      description:
        'Un programme construit à partir de ton objectif, de ton niveau, de ton matériel et de ce que tu es réellement disposée ou disposé à faire. Chaque séance est détaillée, des variantes remplacent les mouvements qui ne te parlent pas, et le plan évolue à chaque fin de cycle.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel, préférences`,
        'Plan structuré en cycles, avec une progression prévue',
        'Variantes proposées pour chaque exercice qui ne te convient pas',
        'Révision du plan en fin de cycle, d’après tes retours',
      ],
      forWho:
        'Tu t’entraînes en autonomie, mais les plans trouvés ailleurs contiennent toujours des exercices que tu finis par sauter.',
    },
    {
      summary: `Des repères d’hygiène alimentaire adaptés à tes goûts${nb}: pas de régime, pas d’aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. On part de ce que tu manges déjà et de ce que tu aimes vraiment, pour poser des repères généraux d’hygiène alimentaire qui tiennent compte de ta cuisine, de ton rythme et de tes habitudes.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Repères simples pour composer tes repas au quotidien',
        'Organisation des repas autour des séances et des jours de repos',
        'Idées de repas rapides, choisies parmi ce que tu aimes',
      ],
      forWho:
        'Tu t’entraînes régulièrement et tu veux des repères alimentaires compatibles avec tes goûts, pas une liste identique pour tout le monde.',
    },
  ],
};
