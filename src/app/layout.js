import './styles.css';

export const metadata = {
  title: 'Laboratoria',
  description: 'Przykładowy projekt Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
