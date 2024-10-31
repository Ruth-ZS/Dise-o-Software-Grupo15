export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>
          {process.env.title}
        </title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css"
          rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
