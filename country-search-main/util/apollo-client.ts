import fetch from "cross-fetch";
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  HttpLink,
} from "@apollo/client";
import { ALL_COUNTRIES_QUERY, ALL_COUNTRIES_QUERY_BY_ID } from "./queries";
import { ClientProps } from "@util/types";

export const getCountries = ({ query }: ClientProps) => {
  const { data, loading, error } = useQuery(
    typeof query !== "undefined" && query.length > 0
      ? ALL_COUNTRIES_QUERY_BY_ID
      : ALL_COUNTRIES_QUERY,
    {
      variables: { code: query },
    }
  );

  return {
    data: data,
    loading: loading,
    error: error,
  };
};

export const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: cache,
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, fetch }),
});

export default client;

export const refetchCountries = async () => {
  const refetchQuery = await client.refetchQueries({ include: "active" });
  return refetchQuery.length > 0 ? refetchQuery[0] : {};
};
