import { Section } from "./section";
import { TimelineItem } from "./timeline-item";
import { Briefcase } from "lucide-react";

interface ExperienceEntry {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export function Experience({ entries }: ExperienceProps) {
  return (
    <Section title="Expérience Professionnelle" icon={Briefcase}>
      <div className="relative">
        {entries.map((entry, index) => (
          <TimelineItem
            key={index}
            title={entry.title}
            subtitle={entry.company}
            date={entry.date}
            description={
              <ul className="list-disc pl-5 space-y-1">
                {entry.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            }
            isLast={index === entries.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
