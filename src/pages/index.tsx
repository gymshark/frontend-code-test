import Head from 'next/head';

import { Logo } from '../components/logo/logo.component';

const Index = (): JSX.Element => (
    <>
        <Head>
            <title>Gymshark - Frontend Code Challange</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Logo />
    </>
);

export default Index;
