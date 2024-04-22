import { Head, viewport } from 'next';
const viewportMeta = viewport('width=device-width, initial-scale=1');

export default function Document() {
    return (
      <html lang="en">
        <Head>
          {viewportMeta}
        </Head>
        <body>
          {/* Your application content */}
        </body>
      </html>
    );
  }
  
