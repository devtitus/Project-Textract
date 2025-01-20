import "./globals.css";

export const metadata = {
  title: "Textract",
  description: "Snap a Pic, Get Text Quick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-gradient">
        {children}
      </body>
    </html>
  );
}
