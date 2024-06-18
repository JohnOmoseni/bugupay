import { IconType } from "react-icons/lib";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";

const Social = ({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: IconType;
  title: string;
}) => {
  return (
    <a
      href={href}
      title={title}
      className="icon group h-8 w-8 transition-sm hover:scale-95"
    >
      <Icon
        size={22}
        className="text-foreground transition-colors group-hover:text-secondary"
      />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 pb-5 pt-8 sm:px-[6%] sm:pt-[8%]">
      <div className="sm:row-flex flex flex-col !items-start justify-evenly gap-12 md:gap-16">
        <div className="flex-column gap-2 max-sm:mx-auto max-sm:!items-center">
          <Link href="/" className="block">
            <Image
              src="/svgs/logo-black.svg"
              alt="Bugupay"
              width={40}
              height={40}
              className="!object-contain"
            />
          </Link>
          <p className="leading-5 max-sm:text-center">
            Your Trusted Partner in Hassle-Free Bill Payments!
          </p>
        </div>

        <div className="row-flex-btwn w-full !items-start gap-8 max-sm:mt-4 sm:gap-[20%]">
          {footerLinks.map((item, idx) => {
            return (
              <div key={idx} className="flex-1">
                <h3 className="mb-4 text-lg font-medium capitalize max-sm:text-center">
                  {item.name}
                </h3>
                <ul className="flex-column gap-2 text-base">
                  {item.dropdown?.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`${item.href}`}
                      className="w-full transition-colors hover:font-medium hover:text-secondary-100 max-sm:text-center"
                    >
                      {item.link}
                    </Link>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row-flex-btwn mt-12 gap-4">
        <div className="row-flex gap-3">
          <Link
            href="#"
            className="leading-5 transition-colors hover:text-secondary-100 hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="leading-5 transition-colors hover:text-secondary-100 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="row-flex-btwn gap-3">
          {socialLinks?.map((link, idx) => <Social key={idx} {...link} />)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
