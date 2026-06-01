export interface Product {
  id: number;
  name: string;
  category: 'bijoux' | 'montres';
  subcategory: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Collier Éternité Diamant",
    category: "bijoux",
    subcategory: "colliers",
    price: 12500,
    image: "/images/collier.jpg",
    description: "Un collier d'exception en or 18 carats serti de diamants de taille brillant. Chaque pierre est sélectionnée avec soin pour sa pureté et son éclat exceptionnel. La chaîne délicate met en valeur la beauté intemporelle de ce bijou.",
    isNew: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Bracelet Royal Or",
    category: "bijoux",
    subcategory: "bracelets",
    price: 8900,
    image: "/images/bracelet.jpg",
    description: "Bracelet gourmette en or jaune 18 carats, finition polie miroir. Un design classique revisité avec une élégance contemporaine. Fermoir sécurisé avec gravure ASSIA.",
    isPopular: true,
  },
  {
    id: 3,
    name: "Bague Solitaire Impériale",
    category: "bijoux",
    subcategory: "bagues",
    price: 18500,
    image: "/images/bague.jpg",
    description: "Bague solitaire en or blanc 18 carats ornée d'un diamant central de 1 carat, certifié GIA. Les épaules sont serties de diamants baguettes pour un éclat total. Une pièce maîtresse pour les moments les plus précieux.",
    isNew: true,
    isPopular: true,
  },
  {
    id: 4,
    name: "Boucles d'Oreilles Cascade",
    category: "bijoux",
    subcategory: "boucles",
    price: 7200,
    image: "/images/boucles.jpg",
    description: "Boucles d'oreilles pendantes en or rose 18 carats, ornées de diamants en cascade. Leur mouvement gracieux capture la lumière à chaque instant. Fermoirs papillon sécurisés.",
    isPopular: true,
  },
  {
    id: 5,
    name: "Collier Perles d'Orient",
    category: "bijoux",
    subcategory: "colliers",
    price: 15600,
    image: "/images/collier.jpg",
    description: "Collier de perles d'eau douce naturelles de qualité AAA, fermoir en or 18 carats. Chaque perle est triée à la main pour sa forme parfaite et son lustre nacré exceptionnel.",
  },
  {
    id: 6,
    name: "Bracelet Tennis Diamant",
    category: "bijoux",
    subcategory: "bracelets",
    price: 22400,
    image: "/images/bracelet.jpg",
    description: "Bracelet tennis classique serti de 52 diamants ronds brillants, monture en or blanc 18 carats. Une ligne continue d'éclat qui enroule le poignet d'une lumière éternelle.",
    isNew: true,
  },
  {
    id: 7,
    name: "Bague Alliance Éternelle",
    category: "bijoux",
    subcategory: "bagues",
    price: 5400,
    image: "/images/bague.jpg",
    description: "Alliance en or jaune 18 carats, largeur 3mm, finition mate et brillante. L'intérieur est gravé et confortable pour un port quotidien. Symbole d'amour éternel.",
  },
  {
    id: 8,
    name: "Boucles Créoles Diamant",
    category: "bijoux",
    subcategory: "boucles",
    price: 9800,
    image: "/images/boucles.jpg",
    description: "Créoles moyennes en or blanc 18 carats pavées de diamants. Fermoirs à cliquet sécurisés. Un classique intemporel revisité avec une touche de modernité audacieuse.",
  },
  {
    id: 9,
    name: "Montre Chronographe Or",
    category: "montres",
    subcategory: "homme",
    price: 28500,
    image: "/images/montre-homme.jpg",
    description: "Chronographe automatique en or jaune 18 carats, mouvement manufacture suisse, cadran noir laqué avec index diamants. Bracelet alligator noir cousu main. Édition limitée numérotée.",
    isNew: true,
    isPopular: true,
  },
  {
    id: 10,
    name: "Montre Élégance Or Rose",
    category: "montres",
    subcategory: "femme",
    price: 19800,
    image: "/images/montre-femme.jpg",
    description: "Montre élégante en or rose 18 carats, cadran nacré blanc avec index diamants, lunette sertie. Bracelet en satin ivoire interchangeable. Mouvement quartz de haute précision suisse.",
    isPopular: true,
  },
  {
    id: 11,
    name: "Montre Classique Or Blanc",
    category: "montres",
    subcategory: "homme",
    price: 24500,
    image: "/images/montre-homme.jpg",
    description: "Montre classique trois aiguilles en or blanc 18 carats, cadran argenté guilloché, index appliqués. Mouvement automatique avec réserve de marche de 72 heures. Fond transparent.",
  },
  {
    id: 12,
    name: "Montre Diamant Éternité",
    category: "montres",
    subcategory: "femme",
    price: 32000,
    image: "/images/montre-femme.jpg",
    description: "Montre-bijou en or jaune 18 carats, boîtier et bracelet entièrement pavés de diamants. Cadran serti neige, aiguilles en or. Un chef-d'œuvre d'horlogerie et de joaillerie.",
    isNew: true,
    isPopular: true,
  },
  {
    id: 13,
    name: "Montre Sport Luxe",
    category: "montres",
    subcategory: "homme",
    price: 16800,
    image: "/images/montre-homme.jpg",
    description: "Montre sport de luxe en acier et or, cadran bleu profond avec lunette en céramique, mouvement automatique chronographe. Bracelet caoutchouc haut de gamme avec déployante.",
  },
  {
    id: 14,
    name: "Montre Mini Diamant",
    category: "montres",
    subcategory: "femme",
    price: 14200,
    image: "/images/montre-femme.jpg",
    description: "Montre mini en or jaune 18 carats, cadran laqué blanc avec index diamants, bracelet maille milanaise en or. Design intemporel et féminin par excellence.",
  },
  {
    id: 15,
    name: "Collier Saphir Royal",
    category: "bijoux",
    subcategory: "colliers",
    price: 26800,
    image: "/images/collier.jpg",
    description: "Collier en or blanc 18 carats serti d'un saphir bleu de Birmanie entouré de diamants. Une pièce d'exception pour les collectionneurs les plus exigeants.",
    isNew: true,
  },
  {
    id: 16,
    name: "Bague Émeraude Art Déco",
    category: "bijoux",
    subcategory: "bagues",
    price: 31200,
    image: "/images/bague.jpg",
    description: "Bague style Art Déco en platine, émeraude colombienne de 2 carats entourée de diamants taille baguette. Un hommage à l'élégance des années folles.",
    isPopular: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Fatima B.",
    text: "Une expérience d'achat exceptionnelle. La qualité des bijoux ASSIA dépasse toutes mes attentes. Le service client est impeccable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karim A.",
    text: "J'ai offert la montre Chronographe Or à mon père. La finition est parfaite, le mouvement suisse est d'une précision remarquable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yasmine L.",
    text: "Les bijoux ASSIA sont simplement sublimes. J'ai reçu mon collier dans un écrin magnifique. Je recommande vivement !",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar D.",
    text: "Commande via WhatsApp très simple et rapide. La livraison a été soignée et le produit correspond parfaitement à la description.",
    rating: 5,
  },
];

export const faqItems = [
  {
    question: "Comment passer commande ?",
    answer: "Cliquez sur le bouton 'Commander via WhatsApp' sur la fiche produit de votre choix. Un message pré-rempli s'ouvrira avec les détails du produit. Notre équipe vous répondra dans les plus brefs délais.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Nous livrons partout au Maroc sous 24 à 48 heures pour les villes principales. Pour les zones rurales, comptez 2 à 4 jours ouvrables. La livraison est gratuite pour toute commande supérieure à 5000 DH.",
  },
  {
    question: "Proposez-vous des garanties ?",
    answer: "Tous nos bijoux et montres bénéficient d'une garantie internationale de 2 ans. Les certificats d'authenticité des pierres précieuses sont fournis avec chaque achat.",
  },
  {
    question: "Puis-je personnaliser un bijou ?",
    answer: "Oui, nous proposons un service de personnalisation sur mesure. Contactez-nous via WhatsApp pour discuter de votre projet avec notre joaillier.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Nous acceptons le paiement à la livraison (cash on delivery), le virement bancaire et les paiements mobiles. Pour les commandes de plus de 20000 DH, un acompte de 30% est requis.",
  },
];
