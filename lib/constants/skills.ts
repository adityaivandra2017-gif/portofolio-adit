export type LogoDisplay = "default" | "lighten" | "invert";

export type SkillItem = {
  name: string;
  logo: string;
  display?: LogoDisplay;
  /** Logo berbentuk lebar (icon + teks horizontal) */
  wide?: boolean;
  /** Pengali tinggi mobile — jika tidak diisi, pakai size */
  size?: number;
  sizeMobile?: number;
  /** Pengali ukuran khusus desktop di dalam slot seragam (default 1) */
  sizeDesktop?: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: readonly SkillItem[];
};

export const SKILLS_SECTION = {
  title: "Keahlian",
  subtitle:
    "Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi web dan mobile.",
} as const;

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "HTML", logo: "/images/png/html.png", display: "lighten" },
      { name: "CSS", logo: "/images/png/css.png", display: "lighten" },
      {
        name: "JavaScript",
        logo: "/images/png/js.png",
        display: "default",
        sizeMobile: 0.72,
      },
      {
        name: "Tailwind CSS",
        logo: "/images/png/tailwindcss.png",
        display: "lighten",
        wide: true,
        size: 1.6,
        sizeMobile: 1.65,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      {
        name: "PHP",
        logo: "/images/png/PHP.png",
        display: "lighten",
        size: 1.15,
        sizeMobile: 1.0,
      },
      {
        name: "Laravel",
        logo: "/images/png/laravel.png",
        display: "lighten",
        wide: true,
        sizeMobile: 1.55,
        sizeDesktop: 1.28,
      },
      {
        name: "Next.js",
        logo: "/images/png/next-js.png",
        display: "invert",
        size: 1.3,
        sizeMobile: 1.0,
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    items: [
      {
        name: "React Native",
        logo: "/images/png/react-native.png",
        display: "lighten",
        sizeMobile: 1.0,
      },
      {
        name: "Flutter",
        logo: "/images/png/flutter.png",
        display: "lighten",
        wide: true,
        sizeMobile: 1.35,
        sizeDesktop: 1.28,
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      {
        name: "MySQL",
        logo: "/images/png/MySQL.png",
        display: "lighten",
        sizeMobile: 1.1,
        sizeDesktop: 1.22,
      },
      {
        name: "PostgreSQL",
        logo: "/images/png/postgresql.png",
        display: "lighten",
        size: 1.35,
        sizeMobile: 1.05,
      },
      {
        name: "Firebase",
        logo: "/images/png/firebase.png",
        display: "lighten",
        wide: true,
        sizeMobile: 1.4,
        sizeDesktop: 1.28,
      },
    ],
  },
] as const;
