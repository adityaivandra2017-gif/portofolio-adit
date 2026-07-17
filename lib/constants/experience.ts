export type ExperienceType = "magang" | "kerja" | "organisasi" | "freelance";

export type ExperienceItem = {
  id: string;
  type: ExperienceType;
  typeLabel: string;
  company: string;
  logo: string;
  logoAlt: string;
  /** Logo berbentuk lebar (icon + teks horizontal) */
  logoWide?: boolean;
  /** Latar logo terang agar teks gelap pada logo tetap terbaca */
  logoLightBg?: boolean;
  /** Pengali ukuran logo di mobile (default 1) */
  logoScaleMobile?: number;
  /** Pengali ukuran logo di desktop (default 1) */
  logoScale?: number;
  period: string;
  field: string;
  skills: readonly string[];
  description: readonly string[];
};

export const EXPERIENCE_SECTION = {
  title: "Pengalaman",
  subtitle:
    "Riwayat magang, pekerjaan, dan kegiatan profesional yang membentuk perjalanan karier saya.",
} as const;

export const EXPERIENCES: readonly ExperienceItem[] = [
  {
    id: "g-sports-center-padang",
    type: "magang",
    typeLabel: "Magang",
    company: "G Sports Center Padang",
    logo: "/images/png/GSC.png",
    logoAlt: "Logo G Sports Center Padang",
    logoWide: true,
    logoLightBg: true,
    logoScaleMobile: 1.15,
    logoScale: 1.08,
    period: "30 April 2025 – 31 Mei 2025",
    field: "Swimming Pool",
    skills: ["Data Entry", "Inventory", "Customer Service", "Teamwork"],
    description: [
      "Melakukan pencatatan dan monitoring stok perlengkapan operasional.",
      "Mengelola entry data pelanggan serta administrasi harian outlet.",
      "Melayani pelanggan dan mendukung operasional harian.",
      "Membantu proses maintenance area kolam renang.",
    ],
  },
] as const;
