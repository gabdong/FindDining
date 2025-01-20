import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

import '@styles/globals.css';

import Header from 'components/Header';
import wrapper from '@lib/redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title>마이테이블</title>
      </Head>
      <WrapperSt>
        <Header />
        <MainContainerSt>
          <main>
            <Component {...pageProps} />
          </main>
        </MainContainerSt>
      </WrapperSt>
    </>
  );
}

const WrapperSt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;
const MainContainerSt = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  background: black;
`;

export default wrapper.withRedux(App);
