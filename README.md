## Cato

Cato is a serverless, full-service artist hub site. Built using Next.js and Supabase.

## Getting Started (TEO THIS MEANS U)

-Use nvm (https://github.com/nvm-sh/nvm) to install Node.js version 16 (the most recent version supported by Vercel). nvm itself is fantastic and simplifies the surprisingly frequent task of switching Node versions.
-I strongly recommend Visual Studio Code with the following extensions: ESLint, styled-jsx, Tailwind CSS IntelliSense (might not need this one but install now just in case)

-To run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the index page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Any .tsx file (typescript jsx, jsx is the syntax of React) added to pages/ will create a new page. I added localhost:3000/otherpage as a more concise example than the index page.

Global css is in styles/globals.css, though you can create css scoped to specific React components with a <style jsx> tag, seen in otherpage.
I recommend this approach to keep things organized as the project grows.

pages/_document.tsx and pages/_app.tsx are shared templates used for common functionality across the site, like the header and footer.
Speaking of, the header and footer are in components/shared.
"CatoHead" is for page-specific information to get added to the HTML <head>, "CatoHeader" is the actual UI element at the top of the page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
