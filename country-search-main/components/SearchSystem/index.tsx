import client, {
  cache,
  getCountries,
  refetchCountries,
} from "@util/apollo-client";
import styled from "styled-components";
import Button from "@components/Buttons";
import { SearchInput } from "@components/SearchInput";
import theme from "@theme/index";
import Countries from "@components/Countries";
import React, { useState, useEffect } from "react";
import { Spacer } from "@components/Layout";
import { ClientProps, FetchProps } from "@util/types";

const SearchSystem = () => {
  const [state, setState] = useState<ClientProps>(() => {
    return {
      isRefetching: false,
      isDisabled: true,
      isLoading: true,
      isError: false,
      errorMsg: "",
      query: "",
      previewQuery: "",
      countries: [],
      previewCountries: [],
      clearInput: false,
    };
  });
  const clientQuery = getCountries({ query: state.query });
  const clientPreviewQuery = getCountries({ query: state.previewQuery });

  useEffect(() => {
    // If success.
    if (!clientQuery.loading && clientQuery.data) {
      setState((prevState) => {
        return {
          ...prevState,
          clearInput: false,
          isRefetching: false,
          isLoading: false,
          query: state.query,
          countries: clientQuery.data?.countries,
          previewCountries: clientPreviewQuery.data?.countries,
        };
      });
    }

    // If error.
    if (typeof clientQuery.error !== "undefined") {
      setState((prevState) => {
        return {
          ...prevState,
          isLoading: false,
          isError: true,
          errorMsg: clientQuery.error?.toString(),
        };
      });
    }

    if (!clientPreviewQuery.loading && clientPreviewQuery.data) {
      setState((prevState) => {
        return {
          ...prevState,
          previewQuery: state.previewQuery,
          previewCountries: clientPreviewQuery.data?.countries,
        };
      });
    }
  }, [
    clientQuery.loading,
    clientQuery.data,
    clientQuery.error,
    clientPreviewQuery.loading,
    clientPreviewQuery.data,
  ]);

  const clear = () => {
    client.resetStore();
    cache.gc({ resetResultCache: true, resetResultIdentities: true });
    setState((prevState) => {
      return {
        ...prevState,
        clearInput: true,
        isLoading: true,
        isDisabled: true,
        countries: [],
        previewCountries: [],
        previewQuery: "",
        query: "",
      };
    });
  };

  const refetch = async () => {
    if (!state.isError) {
      setState((prevState) => {
        return {
          ...prevState,
          isRefetching: true,
        };
      });
      const refetchQuery = (await refetchCountries()) as FetchProps;

      if (!refetchQuery?.loading) {
        setState((prevState) => {
          return {
            ...prevState,
            isRefetching: false,
          };
        });
      }
    } else {
      window.location.reload();
    }
  };

  const search = (query: string) => {
    if (query.length === 2) {
      setState((prevState) => {
        return {
          ...prevState,
          isDisabled: false,
          isLoading: true,
          query: query.toUpperCase(),
        };
      });
    }
  };

  const preview = (query: string) => {
    if (query.length > 0) {
      setState((prevState) => {
        return {
          ...prevState,
          previewQuery: "^" + query.toUpperCase() + "[a-zA-Z].*",
        };
      });
    }
  };
  return (
    <>
      <SearchInput
        clearInput={state.clearInput}
        previewCountries={state.previewCountries}
        onSearchClick={search}
        onClearResults={clear}
        onPreviewResults={preview}
        isDisabled={state.isLoading || state.isRefetching || state.isError}
      />
      <Spacer space="1rem" />
      <TwoButtonGrid>
        <Button
          data-testid="clear-button"
          onClick={clear}
          disabled={state.isError || state.isDisabled}
        >
          Clear
        </Button>
        <Button
          data-testid="refetch-button"
          disabled={state.isLoading}
          onClick={refetch}
        >
          Refetch
        </Button>
      </TwoButtonGrid>
      {state.isLoading && (
        <>
          <Spacer space="1rem" />
          <MessageWrapper>Loading...</MessageWrapper>
        </>
      )}
      {state.isRefetching && (
        <>
          <Spacer space="1rem" />
          <MessageWrapper>Refetching...</MessageWrapper>
        </>
      )}
      {state.isError && (
        <>
          <Spacer space="1rem" />
          <Error>{state.errorMsg}</Error>
        </>
      )}
      {!state.isLoading && !state.isError && state.countries?.length === 0 && (
        <>
          <Spacer space="1rem" />
          <MessageWrapper>No results found...</MessageWrapper>
        </>
      )}
      <Countries countries={state.countries} />
    </>
  );
};
export default SearchSystem;

export const TwoButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 15px;
`;

export const MessageWrapper = styled.div`
  color: ${theme.colors.primary};
  height: auto;
`;

export const Error = styled.div`
  color: ${theme.colors.red};
  margin-bottom: 30px;
  height: auto;
`;
