import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { Roboto, Roboto_Slab } from 'next/font/google';

// TODO: Add independent theme toggle
import { ThemeProvider } from '@/lib/theme-provider';

// Roboto Slab as the font for headings
const robotoSlabHeading = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-heading',
});

// Roboto as the basic font
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

// Props given to the RootLayout() function
interface RootLayoutProps {
  children?: React.ReactNode;
}

// RootLayout() function used by the entire app
export default function RootLayout(props: RootLayoutProps) {
  // TODO: Setup <html> for i18n
  return (
    <html
      lang="en"
      className={cn(
        'font-sans',
        'font-sans',
        'font-sans',
        roboto.variable,
        robotoSlabHeading.variable
      )}
      suppressHydrationWarning={true}
    >
      {/* TODO: Replace <head> with export const metadata */}
      <body>
        {/* Theme provider for shadcn/ui components */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Children to be rendered provided as props */}
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
