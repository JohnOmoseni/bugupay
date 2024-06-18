// "use client";
// import { cn } from "@/lib/utils";
// import { OTPInput, SlotProps } from "input-otp";

// <OTPInput
//   maxLength={6}
//   containerClassName="group flex items-center has-[:disabled]:opacity-30"
//   render={({ slots }) => (
//     <>
//       <div className="flex">
//         {slots.slice(0, 3).map((slot, idx) => (
//           <Slot key={idx} {...slot} />
//         ))}
//       </div>

//       <FakeDash />

//       <div className="flex">
//         {slots.slice(3).map((slot, idx) => (
//           <Slot key={idx} {...slot} />
//         ))}
//       </div>
//     </>
//   )}
// />;

// // Feel free to copy. Uses @shadcn/ui tailwind colors.
// function Slot(props: SlotProps) {
//   return (
//     <div
//       className={cn(
//         'relative w-10 h-14 text-[2rem]',
//         'flex items-center justify-center',
//         'transition-all duration-300',
//         'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
//         'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
//         'outline outline-0 outline-accent-foreground/20',
//         { 'outline-4 outline-accent-foreground': props.isActive },
//       )}
//     >
//       {props.char !== null && <div>{props.char}</div>}
//       {props.hasFakeCaret && <FakeCaret />}
//     </div>
//   )
// }

// // You can emulate a fake textbox caret!
// function FakeCaret() {
//   return (
//     <div className="animate-caret-blink pointer-events-none absolute inset-0 flex items-center justify-center">
//       <div className="h-8 w-px bg-white" />
//     </div>
//   );
// }

// // Inspired by Stripe's MFA input.
// function FakeDash() {
//   return (
//     <div className="flex w-10 items-center justify-center">
//       <div className="bg-border h-1 w-3 rounded-full" />
//     </div>
//   );
// }
