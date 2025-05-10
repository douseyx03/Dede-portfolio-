import { ProfileHeader } from "@/components/cv/profile-header";
import { Skills } from "@/components/cv/skills";
import { Education } from "@/components/cv/education";
import { Experience } from "@/components/cv/experience";
import { Projects, ProjectEntry } from "@/components/cv/projects"; // Import Projects component and type

// Placeholder data - replace with actual information
const profileData = {
  name: "Dédé Couro Diop",
  title: "Ingénieur Électronique",
  email: "diopdedecouro@email.com",
  phone: "+33 06 95 67 27 14",
  location: "Ivry sur Seine, France",
  profileImageUrl: "https://picsum.photos/seed/dede/200/200", // Specific placeholder
  cvUrl: "/cv/CV_Dede_Couro_Diop.pdf", // Placeholder path for the downloadable CV
  linkedinUrl: "https://www.linkedin.com/in/d%C3%A9d%C3%A9-couro-diop-024668281", // Placeholder LinkedIn URL
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
    degree: "Master Électronique, Énergie électrique et Automatique",
    institution: "Université Gustave Eiffel, Institut Gaspard Monge",
    date: "2024 - 2026",
    details: "Spécialisation en systèmes embarqués et objets connectés.",
  },
  {
    degree: "Licence Électronique, Énergie électrique et Automatique",
    institution: "Sorbonne Université",
    date: "2021 - 2024",
    details: "Parcours Électronique, Énergie Électrique, Automatique (EEEA).",
  },
  {
    degree: "Baccalauréat Série S(Scientifique)",
    institution: "Lycée Jeanne d'Arc - Dakar, Sénégal",
    date: "2020 - 2021",
    details: "Mention Bien",
  },
];

const experienceData = [
  {
    title: "Ingénieur Électronique ",
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

// Placeholder data for projects
const projectsData: ProjectEntry[] = [
  {
    name: "Conception d'un robot de transport dans une usine",
    date: "Mai-Juin 2024",
    description: "Livraison des colis dans un poste dès la rèception du signal de la centrale en suivant un fil en forme de 8. Développement des modules tels que:Emission infrarouge/Ultason,Récepteur Infrarouge/Ultrason, Détecton d'obstacles par proximètre, Roues, DTMF et servo moteur. ",
    technologies: ["Arm NXP LPC1769", "C++"],
    link: "" // Optional link
  },
  {
    name: "Robot articulé",
    date: "Décembre 2023",
    description: "Modèlisation des articulations robotiques en Python",
    technologies: ["Visual Studio Code", "Python", "Anaconda"],
  },
    {
    name: "Réalisation d'une console de mixage",
    date: "Décembre 2023",
    description: "Réalisation d'une console de mixage sur Matlab: Schéma bloc sur Simulink de l'ècho, réverbèration, saturation et flanger",
    technologies: ["STM32", "C", "FFT", "OLED Display", "Audio Processing"],
  },
  {
    name: "Conception d'une console de jeu ",
    date: "Décembre 2023",
    description: "Conception d'une console de jeu sur Vivado Casse-Brique et Ping-Pong: Programmation à l'aide du langage VHDL, implementation sur FPGA",
    technologies: ["VHDL", "FPGA"],
  },
  {
    name: "Mesure des pulsations cardiaques",
    date: "Avril - Mai 2023",
    description: "Mesure des pulsations cardiques avec un capteur puis affichage sur un afficheur 7 segment: Capteur infrarouge CNY70, filtrage, Visualition des signaux sur l'oscilloscope.",
    technologie: ["CNY70", "Oscilloscope"],
  },
  {
    name: "Creation d'un site internet",
    date: "Avril - Mai 2022",
    description: "Creation d'un site internet: Recherche des objets perdus avec le logiciel Geany",
    technologie: ["HTML", "CSS", "PHP"],
  },

];


export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          email={profileData.email}
          phone={profileData.phone}
          location={profileData.location}
          profileImageUrl={profileData.profileImageUrl}
          cvUrl={profileData.cvUrl}
          linkedinUrl={profileData.linkedinUrl} // Pass linkedinUrl
        />

        <Skills skills={skillsData} />

        <Experience entries={experienceData} />

        <Education entries={educationData} />

        <Projects entries={projectsData} /> {/* Add Projects section */}

        {/* Placeholder for future sections if needed */}
        {/* <Section title="Certifications" icon={Award}>...</Section> */}

      </main>
      <footer className="container mx-auto px-4 py-4 max-w-4xl text-center text-muted-foreground text-sm">
          © Dédé Couro Diop 2025
      </footer>
    </>
  );
}
