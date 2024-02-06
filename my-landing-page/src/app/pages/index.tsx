// pages/index.tsx

import Head from 'next/head';
import Features from './Features';
import Usage from './Usage';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your Package Name</title>
        <meta name="description" content="Description of your package" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Package Name</h1>
        <p className="text-lg mb-8">Description of your package</p>

        <Features />
        <Usage />
      </main>
    </div>
  );
};

export default Home;
