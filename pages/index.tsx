import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <div className="test-div" />
      <div className="w-10 bg-slate-600 h-10" />
      <style jsx>{`
        .test-div {
          width: 300px;
          height: 300px;
          background-color: #FF2222;
        }
      `}
      </style>
    </>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
