import Section from './Section';
import Heading from './Heading';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Swipe on Meals",
    description: "Browse through delicious meal options and swipe right on ones you'd enjoy eating this week.",
    icon: "🔍",
    color: "bg-color-1"
  },
  {
    id: 2,
    title: "Partner Does the Same",
    description: "Your partner browses the same meals independently, swiping on their favorites.",
    icon: "👫",
    color: "bg-color-3"
  },
  {
    id: 3,
    title: "Find Your Matches",
    description: "We identify the meals you both swiped right on - these are your perfect dinner matches!",
    icon: "❤️",
    color: "bg-color-4"
  },
  {
    id: 4,
    title: "Generate Meal Plan",
    description: "Once you've matched on 7 meals, we automatically create your weekly meal plan.",
    icon: "📅",
    color: "bg-n-5"
  },
  {
    id: 5,
    title: "Get Your Shopping List",
    description: "We compile all ingredients into a convenient shopping list, organized by grocery department.",
    icon: "🛒",
    color: "bg-color-2"
  }
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="container">
        <Heading
          title="How Cibaro Works"
          text="Meal planning made simple with our Tinder-style swiping approach"
        />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-n-17 border border-n-6 rounded-2xl p-6 flex flex-col h-full"
            >
              <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-n-1">
                {step.id}. {step.title}
              </h3>
              <p className="text-n-3 flex-grow">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-n-17 border border-n-6 rounded-2xl p-8 text-center">
          <h3 className="h4 mb-4">No More Meal Planning Arguments!</h3>
          <p className="body-2 max-w-2xl mx-auto">
            Cibaro eliminates the "What should we eat?" debate. By finding meals you both love through 
            our simple swiping interface, dinner decisions become fun instead of frustrating.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks; 