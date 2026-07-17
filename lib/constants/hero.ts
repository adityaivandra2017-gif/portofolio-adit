export const HERO = {
  greeting: "Halo, Saya",
  graduate: "Information Systems",
  interestPrefix: "Yang tertarik pada",
  roles: [
    "Frontend Developer",
    "Mobile Developer",
    "Web Developer",
  ] as const,
  tagline:
    "End-to-end Developer: Membangun sistem yang tangguh dengan visual yang berkelas.",
  buttons: {
    projects: { label: "Lihat Proyek", href: "#proyek" },
    downloadCv: {
      label: "Download CV",
      href: "/documents/CV Aditya Ivandra.pdf",
      fileName: "CV Aditya Ivandra.pdf",
    },
  },
  photo: {
    src: "/images/png/FOTOADIT.png",
    alt: "Aditya Ivandra",
  },
} as const;
