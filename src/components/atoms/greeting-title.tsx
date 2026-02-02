import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

export default function GreetingTitle({ title, className }: Props) {
  return (
    <div className="border-b border-b-zinc-200 pb-4 text-center">
      <h3
        className={cn(
          "text-maroon-700 font-semibold dark:text-softPink-300 text-5xl authFont  capitalize",
          // font-playwriteFont 
          
          className,
        )}>
        {title}
      </h3>
    </div>
  );
}
