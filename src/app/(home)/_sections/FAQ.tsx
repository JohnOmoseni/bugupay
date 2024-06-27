import { Button } from "@/components/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="relative">
      <h2 className="text-center">
        Your questions, <span className="text-secondary">answered!</span>
      </h2>
      <p className="p-subtitle">
        We understand that you may have questions about our bill payment
        services. Here are some frequently asked questions to guide you.
      </p>

      <div className="faq mx-auto mt-16 w-[90%] max-w-[700px] self-center rounded-xl border border-foreground-300 px-6 pt-3 shadow-sm sm:p-8">
        {faq.map((item, idx) => (
          <Accordion
            type="single"
            collapsible
            className="w-full py-6"
            key={idx}
          >
            <AccordionItem
              value={`item-${idx}`}
              className="border-foreground-300"
            >
              <AccordionTrigger className="max-w-[50ch] break-words text-left sm:w-full">
                {item?.trigger}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.body1}</p>
                <p className="mt-2">{item.body2}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <Link href="#">
        <Button
          title="Load More"
          className="mx-auto mt-10 border-2 border-secondary border-opacity-60 bg-transparent px-6 text-lg text-foreground hover:bg-secondary hover:text-background"
        />
      </Link>
    </div>
  );
};

export default FAQ;
