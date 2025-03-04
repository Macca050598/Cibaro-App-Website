import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Meal Planning Made Simple"
          text="Cibaro transforms how couples decide what to eat each week"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-/4 xl:w-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-6/90 to-transparent z-1 md:hidden" />
              
              <img
                className="w-full h-full object-cover md:object-right relative z-0"
                width={800}
                alt="Couple meal planning"
                height={730}
                style={{
                  objectFit: "cover",
                  marginLeft: 60,
                }}
                src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="relative z-1 max-w-[30rem] ml-auto bg-black/50 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="h4 mb-4 md: text-n-19">Swipe Together, Eat Together</h4>
              <p className="body-2 mb-[3rem] md:text-n-19">
                Cibaro helps couples end the "what's for dinner" debate. Our unique swiping system matches meals you both want to eat, creating a weekly meal plan you'll both enjoy.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-white">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Grocery shopping"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-17/90 lg:p-15">
                <h4 className="h4 mb-4">Automatic Shopping Lists</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                  Once you've matched on meals, we generate a complete shopping list organized by grocery department for efficient shopping.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-17 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Personalized Meal Recommendations</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Our AI learns your preferences over time, suggesting meals that both you and your partner are likely to enjoy.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-19 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Meal preparation"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
