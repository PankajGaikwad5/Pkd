import localFont from 'next/font/local';
import './globals.css';

const centuryGothic = localFont({
  src: [
    {
      path: '../public/fonts/centurygothic.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/centurygothic_bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Arcca Group',
  description: 'Design, Architecture, Interior Design',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${centuryGothic.variable}`}>
      <body suppressHydrationWarning className="bg-[#D6CBBC] text-[#332820] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
