import GlobalStyles from "@components/GlobalStyles";
import { Main, Container, Hr, Spacer } from "@components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import ClientOnly from "@components/ClientOnly";
import SearchSystem from "@components/SearchSystem";
import client from "@util/apollo-client";
import { ApolloProvider } from "@apollo/client";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Country Search</title>
        <meta name="description" content="Search for a country." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <GlobalStyles />
        <ClientOnly>
          <Container>
            <Spacer space="1rem" />
            <h1>Country Search</h1>
            <Hr />
            <ApolloProvider client={client}>
              <SearchSystem />
            </ApolloProvider>
          </Container>
        </ClientOnly>
      </Main>
    </>
  );
};

export default Home;
