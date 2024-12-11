export type CountryProps = {
  code: string;
  name: string;
  emoji: any;
};

export type FetchProps = {
  data: {
    countries: Array<CountryProps>;
  };
  loading: boolean;
  networkStatus: number;
};

export type ClientProps = {
  isRefetching?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  errorMsg?: string;
  query?: string;
  previewQuery?: string;
  clearInput?: boolean;
  countries?: Array<CountryProps>;
  previewCountries?: Array<CountryProps>;
};