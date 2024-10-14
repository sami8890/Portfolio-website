"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years in Web Development",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Node Projects",
  },
  {
    num: 5,
    text: "Clients Collaborated With",
  },
];

export const Stats = () => {
  return (
    <section className="pt-10 pb-8 xl:pt-16 xl:pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <CountUp
                end={item.num}
                duration={6} // Shortened duration for a quicker but smooth animation
                delay={0.5}  // Short delay to make it look more dynamic
                className="text-4xl xl:text-6xl font-bold text-[#00ff99]" 
              />
              <p className="text-lg xl:text-xl mt-2 text-white opacity-80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
