import "@/styles/app.scss";

export const metadata = {
  title: "Slink - Coming Soon Nextjs Template",
  description: "Coming Soon",
  siteName: "Slink",
  url: "https://slink-nextjs.vercel.app",
  type: "website",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://slink-nextjs.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

const SlinkApp = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
export default SlinkApp;