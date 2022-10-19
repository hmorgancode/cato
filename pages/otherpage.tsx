import type { NextPage } from 'next';

import CatoHead from '../components/shared/CatoHead';

const SomeOtherPage: NextPage = () => {
  return (
    <>
      <CatoHead title="Some other page" />
      <p className="test-paragraph">content goes here</p>
      {/*
        CSS added in a styled-jsx style tag will be scoped to the component.
      */}
      <style jsx>{`
        .test-paragraph {
          width: 300px;
          height: 300px;
          background-color: #FF2222;
        }
      `}
      </style>
    </>
  );
};

export default SomeOtherPage;

// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// This is the fastest approach but pages might switch depending on future requirements.
export async function getStaticProps(context) {
  return {
    props: {},
  };
}

/*

ignore this for now

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
*/