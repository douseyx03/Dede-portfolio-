import { ProfileHeader } from "@/components/cv/profile-header";
import { Skills } from "@/components/cv/skills";
import { Education } from "@/components/cv/education";
import { Experience } from "@/components/cv/experience";

// Placeholder data - replace with actual information
const profileData = {
  name: "Dédé Couro Diop",
  title: "Ingénieur Électronique",
  email: "dede.diop@email.com",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France",
  profileImageUrl: "https://picsum.photos/seed/dede/200/200", // Specific placeholder
  cvUrl: "/cv/CV_Dede_Couro_Diop.pdf", // Placeholder path for the downloadable CV
};

const skillsData = [
  "Conception de circuits imprimés (PCB)",
  "Microcontrôleurs (ARM, PIC, ESP32)",
  "Programmation embarquée (C/C++)",
  "Systèmes temps réel",
  "Prototypage rapide",
  "Test et validation",
  "Capteurs et instrumentation",
  "Altium Designer",
  "KiCad",
  "MATLAB/Simulink",
  "Communication (SPI, I2C, UART)",
  "Gestion de projet",
];

const educationData = [
  {
    degree: "Master Ingénierie Électronique",
    institution: "Université de Technologie de Paris",
    date: "2018 - 2020",
    details: "Spécialisation en systèmes embarqués et objets connectés.",
  },
  {
    degree: "Licence Sciences pour l'Ingénieur",
    institution: "Université de Lyon",
    date: "2015 - 2018",
    details: "Parcours Électronique, Énergie Électrique, Automatique (EEEA).",
  },
];

const experienceData = [
  {
    title: "Ingénieur Électronique Senior",
    company: "TechInnov",
    date: "2022 - Présent",
    responsibilities: [
      "Conception et développement de cartes électroniques pour dispositifs médicaux.",
      "Programmation de microcontrôleurs ARM Cortex-M.",
      "Réalisation des tests de conformité et de validation.",
      "Encadrement technique d'une équipe de 2 ingénieurs juniors.",
    ],
  },
  {
    title: "Ingénieur Électronique Junior",
    company: "Systèmes Embarqués Plus",
    date: "2020 - 2022",
    responsibilities: [
      "Participation à la conception de schémas et routage de PCB.",
      "Développement de firmwares en C pour microcontrôleurs PIC.",
      "Prototypage et tests unitaires.",
      "Rédaction de documentation technique.",
    ],
  },
];


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <ProfileHeader
        name={profileData.name}
        title={profileData.title}
        email={profileData.email}
        phone={profileData.phone}
        location={profileData.location}
        profileImageUrl={profileData.profileImageUrl}
        cvUrl={profileData.cvUrl}
      />

      <Skills skills={skillsData} />

      <Education entries={educationData} />

      <Experience entries={experienceData} />

      {/* Placeholder for future sections if needed */}
      {/* <Section title="Projets Personnels" icon={Lightbulb}>...</Section> */}
      {/* <Section title="Certifications" icon={Award}>...</Section> */}

    </main>
  );
}
