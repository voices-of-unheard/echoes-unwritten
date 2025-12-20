    
import "./globals.css";

export const metadata = {
  title: "Voices of the Unheard",
  description: "A platform for unheard stories, shared safely and freely",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
