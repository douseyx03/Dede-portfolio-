import { Section } from "./section";
import { TimelineItem } from "./timeline-item";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react"; // Or use Code, FolderKanban etc.

export interface ProjectEntry {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link to repository or demo
}

interface ProjectsProps {
  entries: ProjectEntry[];
}

export function Projects({ entries }: ProjectsProps) {
  return (
    <Section title="Projets Réalisés" icon={Lightbulb}>
      <div className="relative">
        {entries.map((entry, index) => (
          <TimelineItem
            key={index}
            title={entry.name}
            subtitle={ // Display link if available
              entry.link ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all"
                >
                  {entry.link}
                </a>
              ) : "" // No subtitle if no link
            }
            date={entry.date}
            description={
              <div className="space-y-2">
                <p>{entry.description}</p>
                <div className="flex flex-wrap gap-1">
                  {entry.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-muted text-muted-foreground border border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            }
            isLast={index === entries.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
