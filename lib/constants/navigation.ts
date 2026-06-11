export const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
