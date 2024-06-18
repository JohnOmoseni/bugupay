import { Button } from "@/components/Button";
import { URLS } from "@/constants";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="mx-auto my-8 min-h-[45vh] w-[95%] max-w-[800px] rounded-md border border-foreground-300 px-8 py-10 shadow-sm">
      <div className="grid place-items-center">
        <div className="flex-column !items-center gap-12">
          <div>
            <h2 className="px-2 text-center">Let&apos;s get started </h2>
            <p className="p-subtitle">
              Create an account and start paying bills.
            </p>
          </div>
          <Link href={URLS.signup}>
            <Button
              title="Sign up"
              className="mt-10 px-8 py-3 text-lg hover:drop-shadow-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
