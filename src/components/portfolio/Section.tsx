import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
