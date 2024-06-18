import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

function SignupSuccess() {
  return (
    <div className="relative grid h-full w-full place-items-center p-4 max-sm:pt-8">
      <div className="flex-column !items-center gap-3">
        <div className="relative h-[200px] w-[200px] max-w-[250px] sm:h-[250px]">
          <Image
            src="/svgs/checkmark.svg"
            alt="success"
            fill
            className="!object-contain"
          />
        </div>
        <h2 className="mt-5 text-center sm:mt-6">You are all set.</h2>

        <Link href="/dashboard">
          <Button title="Continue" className="auth-btn" />
        </Link>
      </div>
    </div>
  );
}

export default SignupSuccess;
