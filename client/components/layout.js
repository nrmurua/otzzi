const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />  
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Laila:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
