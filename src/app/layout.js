
import "./globals.css";


export const metadata = {
  title: "Car Racing Game",
  description: "This is car racing game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
