import { Section } from "./section";
import { TimelineItem } from "./timeline-item";
import { GraduationCap } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  date: string;
  details?: string;
}

interface EducationProps {
  entries: EducationEntry[];
}

export function Education({ entries }: EducationProps) {
  return (
    <Section title="Formation" icon={GraduationCap}>
      <div className="relative">
        {entries.map((entry, index) => (
          <TimelineItem
            key={index}
            title={entry.degree}
            subtitle={entry.institution}
            date={entry.date}
            description={entry.details || ""}
            isLast={index === entries.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
