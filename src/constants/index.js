import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  puppyypottypal,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  // mealPlanningImage1,
  // mealPlanningImage2,
  // mealPlanningImage3,
  // mealPlanningImage4,
  // mealPlanningImage5,
  // mealPlanningImage6,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Attributes",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    id: "1",
    title: "Contact",
    url: "#contact",
  },
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Predicts when your puppy will next need the toilet",
  "Advice on training dependent on toilet trip results",
  "Overall training help",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Dietary Preferences & Restrictions",
    text: "Add support for dietary preferences and restrictions, allowing users to filter meals based on allergies, intolerances, or lifestyle choices.",
    date: "October 2024",
    status: "In Progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Recipe Collections",
    text: "Create themed collections of recipes that users can browse and add to their swipe queue, such as 'Quick Weeknight Dinners' or 'Mediterranean Cuisine'.",
    date: "November 2024",
    status: "In Progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Meal History & Favorites",
    text: "Track your meal history and save favorite recipes for easy access, helping you build a personalized cookbook of meals you both love.",
    date: "August 2024",
    status: "In Progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Smart Ingredient Substitutions",
    text: "Suggest ingredient substitutions based on what you have in your pantry, helping you use what you already have and reduce food waste.",
    date: "September 2024",
    status: "In progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Connect with your partner to swipe on meals together. When you both like the same dish, it's automatically added to your weekly meal plan.";
export const integrationText = "Our smart algorithm learns your preferences over time, suggesting meals that match both your tastes for higher match rates.";
export const collabContent = [
  {
    id: "0",
    title: "Preference Learning",
    text: integrationText,
  },
  {
    id: "1",
    title: "Automatic Shopping Lists",
    text: "When your meal plan is complete, we generate a consolidated shopping list organized by grocery department for efficient shopping.",
  },
  {
    id: "2",
    title: "Meal Scheduling",
    text: "Assign matched meals to specific days of the week and receive reminders about prep times and cooking instructions.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Free version of Puppy Potty Pal..",
    price: "0",
    features: [
      "Log potty times for 1 dog",
      "Daily predictions for potty tracking",
      "Access to social media features (upload photos, like other users' pictures)",
      "Ad-supported",
    ],
  },
  {
    id: "1",
    title: "Premium Plan",
    description: "Get the premium plan of Puppy Potty Pal..",
    price: "9.99",
    features: [
      "Log potty times for unlimited dogs",
      "AI predictions and recommendations from Arlo",
      "Family sharing: Sync your dog's potty data with multiple users/devices",
      "Custom notifications for potty breaks",
      "Add free experience",
      "Priority access to new features and updates",
    ],
  },
  {
    id: "2",
    title: "Lifetime Plan",
    description: "Get access to Puppy Potty Pal forever with the one time fee!",
    price: "49.99",
    features: [
      "All features of the Premium Plan with no ongoing subscription",
      "Lifetime access to any future feature updates and improvements",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Swipe Together, Eat Together",
    text: "Use our Tinder-style interface to swipe left or right on meal options with your partner, making meal planning fun.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    // imageUrl: mealPlanningImage1,
  },
  {
    id: "1",
    title: "Automatic Meal Matching",
    text: "When you both swipe right on the same meal, it's a match! We'll add it to your weekly plan automatically.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    // imageUrl: mealPlanningImage2,
    light: true,
  },
  {
    id: "2",
    title: "Weekly Meal Plans",
    text: "Once you've matched on 7 meals, we'll create your complete weekly meal plan with all the details you need.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    // imageUrl: mealPlanningImage3,
  },
  {
    id: "3",
    title: "Smart Shopping Lists",
    text: "We automatically generate a shopping list with all ingredients needed for your matched meals, organized by department.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    // imageUrl: mealPlanningImage4,
    light: true,
  },
  {
    id: "4",
    title: "No More Dinner Debates",
    text: "End the 'What should we eat?' argument forever by finding meals you both agree on through our simple swiping system.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    // imageUrl: mealPlanningImage5,
  },
  {
    id: "5",
    title: "Discover New Favorites",
    text: "Explore new recipes and cuisines together, expanding your meal rotation beyond the same old dishes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    // imageUrl: mealPlanningImage6,
  },
];


export const socials = [
  {
   id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/PuppyPottyPal",
   }
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
