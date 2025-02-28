import { useEffect, useState } from 'react';
import Section from './Section';
import Heading from './Heading';
import { gradient } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: "Sarah & Mike",
    role: "Busy Couple",
    content: "Cibaro ended our weekly 'what's for dinner' arguments! We swipe during our lunch breaks and have our meal plan ready by the weekend. Game changer!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "James & Emma",
    role: "Newlyweds",
    content: "The swiping feature is so fun! It's like Tinder but for food. We've discovered so many new recipes we both love that we wouldn't have tried otherwise.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Lisa & David",
    role: "Parents of Three",
    content: "With our busy schedules, meal planning was always a chore. Now we swipe while waiting for the kids' activities and have our shopping list ready to go!",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Tom & Alex",
    role: "Health Enthusiasts",
    content: "We love that we can both independently swipe on meals and find our matches. The automatic shopping list saves us at least an hour every week!",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Maya & Ryan",
    role: "Long-distance Couple",
    content: "Even though we live apart during the week, we use Cibaro to plan our weekend meals together. It's become part of our Friday night ritual!",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style>
        {`
          .testimonials-swiper {
            padding: 60px 0;
          }

          .testimonials-swiper .swiper-slide {
            transition: all 0.3s ease-in-out;
            width: 400px !important;
          }

          @media (max-width: 768px) {
            .testimonials-swiper .swiper-slide {
              width: 360px !important;  /* 10% smaller on mobile */
            }
          }

          .testimonials-swiper .swiper-slide-active {
            z-index: 10;
          }

          .testimonial-card {
            transform-origin: center;
            transition: all 0.3s ease-in-out;
          }

          .testimonial-card.active {
            transform: scale(1.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .testimonial-card.active {
              transform: scale(1.05);  /* Slightly reduced scale on mobile */
            }
          }

          .testimonial-card.inactive {
            transform: scale(0.9);
            opacity: 0.5;
          }

          @media (max-width: 768px) {
            .testimonial-card.inactive {
              transform: scale(0.85);  /* Adjusted scale for mobile */
            }
          }
        `}
      </style>

      <Section id="testimonials" className="overflow-hidden">
        <div className="container relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl mb-16"
            title="Join thousands of happy puppy parents"
          />

          <div className="px-4 sm:px-8 lg:px-16">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={1}
              loop={true}
              loopedSlides={testimonials.length}
              slideToClickedSlide={true}
              speed={500}
              className="testimonials-swiper !overflow-visible"
              breakpoints={{
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 30
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`testimonial-card relative flex flex-col p-6 bg-white rounded-3xl border border-n-6
                      ${activeIndex === index ? 'active' : 'inactive'}`}
                  >
                    <div className="mb-6">
                      <p className="text-n-8 leading-relaxed">"{testimonial.content}"</p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-semibold text-n-8">{testimonial.name}</h5>
                        <p className="text-n-6 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-6 text-6xl leading-none text-n-3 opacity-20">"</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <div className="absolute top-1/2 left-1/2 w-full aspect-square -translate-x-1/2 -translate-y-1/2">
            <img
              src={gradient}
              className="w-full h-full object-cover opacity-40"
              alt="Gradient"
            />
          </div> */}
        </div>
      </Section>
    </>
  );
};

export default Testimonials; 