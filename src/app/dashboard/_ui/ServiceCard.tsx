import { ReactNode } from "react";
import BackArrow from "@/components/BackArrow";
import AvatarWrapper from "@/components/ui/components/Avatar";
import { Button } from "@/components/Button";

interface ServiceCardProps {
  children: ReactNode;
  serviceLabel: string;
  serviceIcon?: string;
  onProceedClick?: () => void;
}

function ServiceCard({
  children,
  serviceIcon,
  serviceLabel,
  onProceedClick,
}: ServiceCardProps) {
  return (
    <div className="mx-auto grid h-full min-h-[500px] w-full max-w-[500px] place-items-center">
      <div className="w-full">
        <div className="mb-4 max-w-max pl-1">
          <BackArrow />
        </div>

        <div className="my-8 mb-6 rounded-xl border border-foreground-300 shadow-sm">
          <div className="px-8 py-6">
            <div className="flex-column !items-center">
              <AvatarWrapper src={serviceIcon} />
              <h3 className="my-3 text-center text-xl font-medium">
                {serviceLabel}
              </h3>
            </div>

            <div className="my-10 mb-6 px-2">
              <div className="flex-column gap-3.5">{children}</div>
            </div>

            <Button
              title="Proceed"
              className="service-btn"
              onClick={onProceedClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
