import { Button } from "@/components/Button";
import Image from "next/image";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import contact from "@images/contact.png";

const Contact = () => {
  return (
    <div className="relative">
      <h2 className="text-center">
        Connect with <span className="text-secondary"> BuguPay</span>
      </h2>
      <p className="p-subtitle">
        Have questions or need assistance? Wen&apos;re here to help. Feel free
        to reach out to us through the channels below.
      </p>
      <div className="mx-auto mt-16 max-w-[1000px] rounded-xl border border-border px-4 py-6 pr-6 shadow-sm sm:p-12">
        <div className="flex-column sm:row-flex gap-6 max-sm:gap-12">
          <div className="relative mx-auto h-[320px] w-full min-w-[280px] max-w-[400px] max-sm:order-2">
            <Image src={contact} alt="" fill className="!object-contain" />
          </div>

          <div className="flex-[2] max-sm:order-1">
            <h3 className="text-xl text-secondary max-sm:text-center">
              We are happy to help
            </h3>
            <p className="text-snug pt-2 max-sm:max-w-[60ch] max-sm:text-center">
              We value your feedback and are committed to providing excellent
              service. Whether you have a question about our services, need
              technical support, or want to share your experience, wen&apos;re
              here for you.
            </p>
            <div className="mt-8">
              <h3 className="mb-6 text-xl text-secondary max-sm:text-center">
                Contact Information
              </h3>
              <div className="flex-column gap-3.5 max-sm:!items-center">
                <p className="row-flex gap-2.5">
                  <FaRegEnvelopeOpen
                    size={22}
                    className="text-foreground transition-colors group-hover:text-secondary"
                  />
                  support@bugupay.com
                </p>
                <p className="row-flex gap-2.5">
                  <MdPhone
                    size={22}
                    className="text-foreground transition-colors group-hover:text-secondary"
                  />{" "}
                  +234-XX-XXX-XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
