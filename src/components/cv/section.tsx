import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, icon: Icon, children, className }: SectionProps) {
  return (
    <Card className={cn("mb-8 shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl text-primary">
          {Icon && <Icon className="w-6 h-6 text-accent" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
