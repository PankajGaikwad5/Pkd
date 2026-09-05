import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "PKD Studio | Luxury Interior Design & Architecture Studio in Mumbai",
  description: "PKD Studio is a luxury interior design & architecture firm in Mumbai led by Prachiti Khanvilkar (27+ years experience). Crafting bespoke residential & commercial spaces.",
  alternates: {
    canonical: "https://pkdstudio.in",
  },
  openGraph: {
    title: "PKD Studio | Luxury Interior Design & Architecture Studio in Mumbai",
    description: "PKD Studio is a luxury interior design & architecture firm in Mumbai led by Prachiti Khanvilkar.",
    url: "https://pkdstudio.in",
    images: ["/landinghero.webp"],
  },
};

export default function Page() {
  return <HomeClient />;
}

