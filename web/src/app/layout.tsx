import './globals.css';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Hubia | Command Center',
  description: 'SaaS Multi-tenant para automação de WhatsApp e IA',
  icons: {
    icon: '/favitransp.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
