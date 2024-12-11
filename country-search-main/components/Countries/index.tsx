import { Spacer, Grid } from "@components/Layout";
import { ClientProps, CountryProps } from "@util/types";
import React from "react";

const Countries = ({ countries }: ClientProps) => {
  return (
    <>
      <Spacer space="2rem" />
      <Grid data-testid="countries-grid">
        {countries?.map((country: CountryProps) => (
          <div key={country.code} data-testid="countries-grid-item">
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
