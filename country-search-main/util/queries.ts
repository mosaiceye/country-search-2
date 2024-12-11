import { gql } from "@apollo/client";

export const ALL_COUNTRIES_QUERY = gql`
  query AllCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

export const ALL_COUNTRIES_QUERY_BY_ID = gql`
  query AllCountriesByID($code: String!) {
    countries(filter: { code: { regex: $code } }) {
      code
      name
      emoji
    }
  }
`;