import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { Wrench } from "lucide-react"; // Using Wrench for Skills icon

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Compétences Clés" icon={Wrench}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
