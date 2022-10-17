function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>https://www.example.com</loc>
     </url>
     <url>
       <loc>https://www.example.com/login</loc>
     </url>
   </urlset>
 `;
}

// ${posts
//   .map(({ id }) => {
//     return `
//   <url>
//       <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
//   </url>
// `;
//   })
//   .join('')}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();

  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
