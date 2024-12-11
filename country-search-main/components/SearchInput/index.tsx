import styled from "styled-components";
import theme from "@theme/index";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState, useEffect, KeyboardEvent } from "react";
import { CountryProps } from "@util/types";

type SearchInputProps = {
  isDisabled?: boolean;
  clearInput?: boolean;
  previewCountries?: Array<CountryProps>;
  onSearchClick: (query: string) => void;
  onClearResults: () => void;
  onPreviewResults: (query: string) => void;
};

export const SearchInput = ({
  isDisabled = false,
  clearInput = false,
  previewCountries = [],
  onSearchClick,
  onClearResults,
  onPreviewResults,
}: SearchInputProps) => {
  const [code, setCode] = useState("");
  const [previewList, setPreviewList] = useState([] as Array<CountryProps>);

  useEffect(() => {
    if (clearInput) {
      setCode("");
    }

    if (
      typeof previewCountries !== "undefined" &&
      previewCountries.length > 0 &&
      code.length > 0
    ) {
      setPreviewList(previewCountries);
    } else {
      setPreviewList([]);
    }
  }, [clearInput, previewCountries]);

  const setChange = (code: string) => {
    setCode(code);
    if (code.length === 0) {
      onClearResults();
    }

    if (code.length > 0) {
      onPreviewResults(code);
    }
  };

  const hidePreviewList = (code: string) => {
    setCode(code);
    onSearchClick(code);
    setPreviewList([]);
  };

  const hiddenScreenClick = (code: string) => {
    setPreviewList([]);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearchClick(code);
      hidePreviewList(code);
    }
  };

  return (
    <>
      <SearchForm>
        <Input
          data-testid="search-input"
          placeholder="Country code: (AD = Andorra)"
          minLength={1}
          maxLength={2}
          disabled={isDisabled}
          onKeyPress={(event) => handleKeyPress(event)}
          onChange={(event) => {
            setChange(event.target.value);
          }}
          value={code}
        ></Input>
        <Button
          disabled={isDisabled}
          onClick={() => onSearchClick(code)}
          data-testid="search-button"
        >
          <AiOutlineSearch />
        </Button>
        {typeof previewList !== "undefined" && previewList.length > 0 && (
          <>
            <HideScreen onClick={() => hiddenScreenClick("")} />
            <PreviewList data-testid="preview-list">
              <ul>
                {previewList.map((country: CountryProps) => (
                  <li
                    key={country.code}
                    data-testid={"preview-list-item-" + country.code}
                  >
                    <CodeButton onClick={() => hidePreviewList(country.code)}>
                      {country.name} ({country.code}) - {country.emoji}
                    </CodeButton>
                  </li>
                ))}
              </ul>
            </PreviewList>
          </>
        )}
      </SearchForm>
    </>
  );
};

const PreviewList = styled.div`
  width: 82%;
  display: flex;
  position: absolute;
  background-color: ${theme.colors.background};
  height: auto;
  border: 1px solid ${theme.colors.grey40};
  padding: 20px;
  border-radius: 10px;
  top: 255px;
  margin: auto;

  & ul {
    margin: auto;
    width: 100%;
    line-height: 30px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 557px;
    top: 285px;
  }
`;

const SearchForm = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  outline: none;
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  font-size: 32px;
  padding: 10px;
  margin-top: 5px;
  max-height: 52px;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};

  &:hover {
    background-color: ${theme.colors.grey60};
  }

  &:active {
    background-color: ${theme.colors.grey80};
  }

  &:disabled {
    cursor: default;
    background-color: ${theme.colors.grey60};
    color: ${theme.colors.grey40};
  }
`;

const CodeButton = styled(Button)`
  margin: auto;
  font-size: 14px;
  background: none;
  color: ${theme.colors.primary};
  font-weight: bold;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: ${theme.colors.grey20};
  }

  &:active {
    background-color: ${theme.colors.grey40};
  }
`;

const Input = styled.input`
  outline: none;
  max-width: 500px;
  width: 100%;
  height: 40px;
  font-size: calc(100% + 0.8928571428571429vw);
  padding: 10px;
  padding-left: 15px;
  border: 1px solid ${theme.colors.grey40};
  border-radius: 10px;
  text-transform: uppercase;

  &::placeholder {
    text-transform: none;
    font-size: 18px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 24px;
    }
  }
`;

const HideScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
`;
