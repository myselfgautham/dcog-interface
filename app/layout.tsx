import '@/styles/globals.css';
import { Roboto, Roboto_Slab } from 'next/font/google';
import { cn } from '@/lib/utils';

const robotoSlabHeading = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-heading',
});

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('font-sans', roboto.variable, robotoSlabHeading.variable)}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
