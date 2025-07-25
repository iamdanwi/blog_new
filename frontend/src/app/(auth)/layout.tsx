export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <main
        className={`antialiased container mx-auto px-5 font-montserrat`}
      >
        {children}
      </main>

  );
}
