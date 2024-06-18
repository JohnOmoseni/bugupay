"use client";

import BackArrow from "@/components/BackArrow";
import { Button } from "@/components/Button";
import AvatarWrapper from "@/components/ui/components/Avatar";

const userProfile: Record<string, any> = {
  "User id": "579dfga2198733",
  name: "John Omoseni ojaaay",
  email: "johnnyomoseni@gmail.com",
  "Phone Number": "0813011365",
};

function Profile() {
  return (
    <div className="relative mx-auto grid h-full min-h-[500px] w-full max-w-[600px] place-items-center px-3 py-6">
      <div className="w-full">
        <div className="mb-4 max-w-max pl-1">
          <BackArrow />
        </div>

        <div className="my-8 mb-6 rounded-xl border border-foreground-300 shadow-sm">
          <div className="px-8 py-6">
            <h3 className="mb-6 text-center font-semibold">My Profile</h3>

            <div className="flex-column !items-center">
              <AvatarWrapper />
              <p className="my-2 text-center text-lg">Edit Profile Pic</p>
            </div>

            <div className="mb-6 mt-8 rounded-lg bg-background-100 px-4 py-6">
              <ul className="flex-column gap-2.5">
                {Object.keys(userProfile as any)?.map((key, idx) => {
                  return (
                    <li className="row-flex-btwn w-full gap-6" key={idx}>
                      <span className="font-light capitalize text-gray">
                        {key}:
                      </span>
                      <p className="font-normal">
                        {userProfile[key] ? userProfile[key] : "nil"}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Button
              title="Save changes"
              className="mt-16 w-full py-3 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
