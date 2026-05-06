import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yihuixuan | Thiết Bị Laser Công Nghiệp",
  description: "Borna Laser (Nghệ Huy Hiên) — thiết bị laser công nghiệp chính xác: Marking, Skinning, Welding, Cutting & tự động hóa phi tiêu chuẩn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
