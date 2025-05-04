interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string | React.ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ title, subtitle, date, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[10px] top-1 bottom-0 w-0.5 bg-border"></div>
      )}
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent ring-4 ring-background">
        <div className="h-2 w-2 rounded-full bg-accent-foreground"></div>
      </div>
      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-md font-medium text-accent mb-2">{subtitle}</p>
      <div className="text-sm text-foreground/80">{description}</div>
    </div>
  );
}
