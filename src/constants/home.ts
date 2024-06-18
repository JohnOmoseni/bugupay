import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { NavLinks } from "@/types";

import security from "@images/security.png";
import selection from "@images/selection.png";
import developer from "@images/developer.png";

import bar from "@svgs/bar.svg";
import money from "@svgs/money.svg";
import phone from "@svgs/phone.svg";
import wallet from "@svgs/wallet.svg";

// (home)
export const navLinks: NavLinks[] = [
  {
    name: "Services",
    tag: "services",
  },
  {
    name: "Support",
    tag: "contact",
  },
  {
    name: "FAQs",
    tag: "faq",
  },
];

export const features = [
  {
    title: "User-Friendly Interface",
    body: "Our platform is designed with you in mind, ensuring a smooth and intuitive experience.",
    imgSrc: developer,
  },
  {
    title: "Security First",
    body: "Trust in our robust security measures, safeguarding your financial information with the latest encryption technologies.",
    imgSrc: security,
  },
  {
    title: "24/7 Accessibility",
    body: "Pay your bills anytime, anywhere. Bugu Pay is at your service around the clock.",
    imgSrc: selection,
  },
];

export const services = [
  {
    vector: money,
    title: "Utility Bills Made Effortless",
    bgColor: "blue",
    body: "Say goodbye to the hassle of managing utility bills. BuguPay allows you to seamlessly pay your water, electricity, and gas bills with just a few clicks. Set reminders, track usage, and enjoy uninterrupted services.",
  },
  {
    vector: bar,
    title: "Subscription Services Simplified",
    bgColor: "green",
    body: "Manage your subscriptions effortlessly. BuguPay ensures your subscriptions are paid on time, giving you uninterrupted access to the content and services you love.",
  },
  {
    vector: wallet,
    title: "Customized Payment Plans",
    bgColor: "orange",
    body: "We understand that everyone's financial needs are unique. BuguPay offers customizable payment plans, allowing you to tailor your bill payment schedule to suit your lifestyle.",
  },
  {
    vector: phone,
    title: "Mobile Recharge in a Flash",
    bgColor: "orange",
    body: "Stay connected without any hassle. BuguPay enables you to recharge your mobile balance instantly. Choose your plan, make the payment, and enjoy seamless communication.",
  },
];

export const faq = [
  {
    trigger: "How do I create an account on BuguPay?",
    body1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
  {
    trigger: "What types of bills can I pay using BuguPay?",
    body1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    body2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
  {
    trigger: "Is BuguPay secure? How do you protect my payment information?",
    body1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    body2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
  {
    trigger: "Are there any fees for using BuguPay?",
    body1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    body2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
  },
];

export const footerLinks = [
  {
    name: "Services",
    dropdown: [
      {
        link: "Email Marketing",
        href: "#",
      },
      {
        link: "Campaigns",
        href: "#",
      },
      {
        link: "Branding",
        href: "#",
      },
      {
        link: "Offline",
        href: "#",
      },
    ],
  },
  {
    name: "About",
    dropdown: [
      {
        link: "Our Story",
        href: "#",
      },
      {
        link: "Benefits",
        href: "#",
      },
      {
        link: "Teams",
        href: "#",
      },
      {
        link: "Careers",
        href: "#",
      },
    ],
  },
  {
    name: "Help",
    dropdown: [
      {
        link: "FAQs",
        href: "#",
      },
      {
        link: "Contact Us",
        href: "#",
      },
    ],
  },
];

export const socialLinks = [
  {
    icon: TiSocialFacebook,
    title: "Facebook",
    href: "#",
  },
  {
    icon: TiSocialTwitter,
    title: "Twitter",
    href: "#",
  },
  {
    icon: TiSocialInstagram,
    title: "Instagram",
    href: "#",
  },
];
