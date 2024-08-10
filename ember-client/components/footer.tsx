import Link from "next/link";
import React from "react";

const services = [
  {
    name: "Interior Design",
    href: "/interior-design",
  },
  {
    name: "Furniture Design",
    href: "/furniture-design",
  },
  {
    name: "Home Decor",
    href: "/home-decor",
  },
  {
    name: "Architecture",
    href: "/architecture",
  },
];

const furniture = [
  {
    name: "Chair",
    href: "/chair",
  },
  {
    name: "Bed",
    href: "/bed",
  },
  {
    name: "Sofa",
    href: "/sofa",
  },
  {
    name: "Lamp",
    href: "/lamp",
  },
  {
    name: "All",
    href: "/furniture",
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-32 p-36 pb-12">
      <div className="flex justify-between">
        <div className="max-w-[300px] space-y-4">
          <Link
            href={"/"}
            className="text-5xl font-bold transition-colors duration-150 hover:text-primary"
          >
            Ember
          </Link>
          <p>
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="mr-24 grid grid-cols-3 gap-14">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-primary">Services</p>
            {services.map((service, index) => {
              return (
                <Link
                  href={service}
                  key={index}
                  className="transition-all duration-150 hover:text-primary"
                >
                  {service.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-primary">Furniture</p>
            {furniture.map((furniture, index) => {
              return (
                <Link
                  href={furniture}
                  key={index}
                  className="transition-all duration-150 hover:text-primary"
                >
                  {furniture.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-primary">Follow Us</p>
            {socials.map((social, index) => {
              return (
                <Link
                  href={social}
                  key={index}
                  className="transition-all duration-150 hover:text-primary"
                >
                  {social.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mr-24 flex items-center justify-between">
        <span>Copyright &copy; {new Date().getFullYear()}</span>
        <div className="flex gap-5 font-medium">
          <Link href={"/"}>Terms & Conditions</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
