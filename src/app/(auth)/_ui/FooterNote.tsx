import Link from "next/link";

const FooterNote = () => {
  return (
    <p className="w-full pt-4 text-center text-base leading-6 sm:mt-10 sm:max-w-[60ch]">
      By registering, you accept our{" "}
      <Link
        href="#"
        className="inline-flex font-medium transition-sm hover:underline"
      >
        Terms of use
      </Link>{" "}
      and{" "}
      <Link
        href="#"
        className="inline-flex font-medium transition-sm hover:underline"
      >
        Privacy Policy
      </Link>
      <br />
      <Link
        href="#"
        className="block font-medium transition-sm hover:underline"
      >
        Trouble logging in?
      </Link>
    </p>
  );
};

export default FooterNote;
