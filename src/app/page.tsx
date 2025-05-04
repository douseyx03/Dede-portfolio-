import { ProfileHeader } from "@/components/cv/profile-header";
import { Skills } from "@/components/cv/skills";
import { Education } from "@/components/cv/education";
import { Experience } from "@/components/cv/experience";
import { Projects, ProjectEntry } from "@/components/cv/projects"; // Import Projects component and type

// Placeholder data - replace with actual information
const profileData = {
  name: "Dédé Couro Diop",
  title: "Ingénieur Électronique",
  email: "dede.diop@email.com",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France",
  profileImageUrl: "https://picsum.photos/seed/dede/200/200", // Specific placeholder
  cvUrl: "/cv/CV_Dede_Couro_Diop.pdf", // Placeholder path for the downloadable CV
  linkedinUrl: "https://www.linkedin.com/in/example-dede-diop", // Placeholder LinkedIn URL
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

// Placeholder data for projects
const projectsData: ProjectEntry[] = [
  {
    name: "Système de surveillance environnementale IoT",
    date: "2021",
    description: "Développement d'un système autonome basé sur ESP32 pour collecter des données environnementales (température, humidité, qualité de l'air) et les envoyer vers une plateforme cloud.",
    technologies: ["ESP32", "C++", "MQTT", "Capteurs", "PCB Design (KiCad)"],
    link: "https://github.com/example/iot-monitor" // Optional link
  },
  {
    name: "Robot mobile autonome",
    date: "2019 (Projet Master)",
    description: "Conception et réalisation d'un robot mobile capable de naviguer dans un environnement inconnu en utilisant des capteurs ultrasoniques et une caméra.",
    technologies: ["Raspberry Pi", "Python", "ROS", "OpenCV", "Motor Control", "3D Printing"],
  },
    {
    name: "Analyseur de spectre audio portable",
    date: "2018",
    description: "Projet personnel : création d'un analyseur de spectre audio compact utilisant un microcontrôleur STM32 et un écran OLED.",
    technologies: ["STM32", "C", "FFT", "OLED Display", "Audio Processing"],
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
        linkedinUrl={profileData.linkedinUrl} // Pass linkedinUrl
      />

      <Skills skills={skillsData} />

      <Experience entries={experienceData} />

      <Education entries={educationData} />

      <Projects entries={projectsData} /> {/* Add Projects section */}

      {/* Placeholder for future sections if needed */}
      {/* <Section title="Certifications" icon={Award}>...</Section> */}

    </main>
  );
}
