import localFont from 'next/font/local';
import { LenisProvider } from '@/components/LenisProvider';
import './globals.css';

const glacialIndifference = localFont({
  src: [
    {
      path: '../public/fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

export const metadata = {
  title: 'PKD Studio',
  description: 'Design, Architecture, Interior Design',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${glacialIndifference.variable}`}>
      <body suppressHydrationWarning className="bg-[#D6CBBC] text-[#332820] antialiased overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
