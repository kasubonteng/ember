"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const values = [
  {
    title: "Quality",
    description:
      "We are committed to using the finest materials and skilled craftsmanship to create pieces that stand the test of time. Every detail matters, ensuring that our furniture not only looks stunning but also lasts for years.",
    icon: "🏆",
  },
  {
    title: "Sustainability",
    description:
      "Environmental responsibility is at the core of our business. We prioritize sustainable sourcing, eco-friendly manufacturing processes, and reducing waste. By choosing Ember, you're making a choice for a greener planet.",
    icon: "🌿",
  },
  {
    title: "Innovation",
    description:
      "Innovation drives us forward. We constantly seek new ways to blend modern design with timeless elegance, ensuring our furniture meets the needs of contemporary living without compromising on style.",
    icon: "💡",
  },
  {
    title: "Customer Commitment",
    description:
      "Our customers are at the heart of everything we do. From personalized support to ensuring a seamless shopping experience, we go the extra mile to ensure that every interaction with Ember is a positive one.",
    icon: "🤝",
  },
];

const AboutPage = () => {
  const [selectedValue, setSelectedValue] = useState<{
    title: string;
    description: string;
    icon: string;
  } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <OurStorySection />
      <ValuesSection
        values={values}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <MissionSection />
      <TeamSection />
      {/* <ContactSection /> */}
    </main>
  );
};

export default AboutPage;

const HeroSection = () => (
  <section className="flex h-screen w-full items-center justify-end overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex h-full w-full items-end justify-start bg-[url('/about-us-bg.webp')] bg-cover bg-center bg-no-repeat xl:bg-bottom"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent to-black/50"></div>
      <div className="z-10 mx-4 mb-20 max-w-[861px] md:mx-20 lg:mb-40 xl:mx-40 5xl:max-w-[1000px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-4xl font-bold text-white md:text-5xl lg:text-6xl 5xl:text-9xl"
        >
          About Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="h-1 bg-white"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-4 text-lg text-white md:text-xl lg:text-2xl"
        >
          We are a team of passionate people whose goal is to improve
          everyone&apos;s life through disruptive products. We build great
          products to solve your business problems.
        </motion.p>
      </div>
    </motion.div>
  </section>
);

const OurStorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-white to-gray-100 px-4 py-20 md:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-10 lg:flex-row">
          <motion.h2
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Our Story
          </motion.h2>
          <motion.p
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="text-lg md:text-xl lg:text-2xl"
          >
            At Ember, we believe in the power of simplicity. Founded with a
            passion for modern design and a commitment to quality, we set out to
            create furniture that enhances the beauty of your home while
            providing exceptional comfort and functionality.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

const ValuesSection = ({
  values,
  selectedValue,
  setSelectedValue,
}: {
  values: { title: string; description: string; icon: string }[];
  selectedValue: { title: string; description: string; icon: string } | null;
  setSelectedValue: Dispatch<
    SetStateAction<{ title: string; description: string; icon: string } | null>
  >;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-100 to-white px-4 py-20 md:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.h2
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="mb-10 text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedValue(value)}
            >
              <div className="flex h-full flex-col gap-3 rounded-xl border border-primary bg-primary/5 p-6 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">
                <div className="text-4xl">{value.icon}</div>
                <h4 className="text-2xl font-medium">{value.title}</h4>
                <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-black">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedValue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setSelectedValue(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-2xl rounded-lg bg-white p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 text-3xl font-bold">{selectedValue.title}</h3>
              <p className="text-lg">{selectedValue.description}</p>
              <button
                className="mt-6 rounded bg-primary px-4 py-2 text-white"
                onClick={() => setSelectedValue(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-white to-gray-100 px-4 py-20 md:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.h2
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="mb-10 text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="mb-8 text-lg md:text-xl lg:text-2xl"
        >
          At Ember, our mission is to revolutionize the way people experience
          their living spaces. We strive to create furniture that seamlessly
          blends form and function, enhancing the quality of life for our
          customers while promoting sustainable practices in our industry.
        </motion.p>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex h-full flex-col gap-3 rounded-xl border border-primary bg-primary/5 p-6 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Innovative Design</h3>
            <p>
              We push the boundaries of furniture design, creating pieces that
              are both beautiful and functional.
            </p>
          </div>
          <div className="flex h-full flex-col gap-3 rounded-xl border border-primary bg-primary/5 p-6 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Sustainability</h3>
            <p>
              We are committed to using eco-friendly materials and processes to
              minimize our environmental impact.
            </p>
          </div>
          <div className="flex h-full flex-col gap-3 rounded-xl border border-primary bg-primary/5 p-6 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">
              Customer Satisfaction
            </h3>
            <p>
              We prioritize our customers&apos; needs, ensuring that every Ember
              product exceeds expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "/about/jane-doe.webp",
    },
    {
      name: "John Smith",
      role: "Lead Designer",
      image: "/about/john-smith.webp",
    },
    {
      name: "Emily Brown",
      role: "Head of Operations",
      image: "/about/emily-brown.webp",
    },
    {
      name: "Michael Johnson",
      role: "Chief Sustainability Officer",
      image: "/about/michael-johnson.webp",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-100 to-white px-4 py-20 md:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.h2
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="mb-10 text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={300}
                className="mb-4 h-[300px] w-[200px] rounded-full"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
