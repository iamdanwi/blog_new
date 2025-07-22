export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <main
        className={`antialiased container mx-auto p-3 space-y-3`}
      >
        {children}
      </main>

  );
}
