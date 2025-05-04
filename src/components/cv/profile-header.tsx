import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImageUrl?: string;
  cvUrl: string;
}

export function ProfileHeader({
  name,
  title,
  email,
  phone,
  location,
  profileImageUrl = "https://picsum.photos/200/200", // Default placeholder
  cvUrl,
}: ProfileHeaderProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="overflow-hidden shadow-lg mb-8">
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <Avatar className="h-32 w-32 border-4 border-accent">
          <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional headshot" />
          <AvatarFallback className="text-4xl bg-primary text-primary-foreground">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">{name}</h1>
          <p className="text-xl text-accent font-medium mb-3">{title}</p>
          <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4 justify-center md:justify-start">
            <span className="flex items-center gap-1.5 justify-center md:justify-start">
              <Mail className="w-4 h-4 text-accent" />
              <a href={`mailto:${email}`} className="hover:underline hover:text-accent">{email}</a>
            </span>
            <span className="flex items-center gap-1.5 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-accent" />
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline hover:text-accent">{phone}</a>
            </span>
            <span className="flex items-center gap-1.5 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-accent" />
              {location}
            </span>
          </div>
           <Button asChild variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground border-accent">
            {/* This button simulates the download. Replace '#' with the actual PDF path */}
            <a href={cvUrl} download="CV_Dede_Couro_Diop.pdf">
              <Download className="mr-2 h-4 w-4" />
              Télécharger le CV (PDF)
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
