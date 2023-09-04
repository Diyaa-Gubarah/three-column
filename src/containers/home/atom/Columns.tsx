import { Combine, Overview, SearchBar } from ".";

import { Box } from "../../../components";
import React from "react";
import { styled } from "styled-components";

const ColumnsWrapper = styled(Box)`
  /* Common styles for all screen sizes */

  /* Media query for screens smaller than 529px (e.g., mobile devices) */
  @media (max-width: 529px) {
    .center {
      order: 3;
      flex-wrap: wrap;

      * {
        flex: 1;
      }
    }

    .right {
      flex: 1;
    }
  }

  /* Media query for screens between 529px and 879px (e.g., tablets) */
  @media (min-width: 529px) and (max-width: 878px) {
    .center {
      order: 3;
      flex-direction: row;
      gap: 1em;

      * {
        flex: 1;
      }
    }
  }
  /* Media query for screens between 768px and 1024px (e.g., tablets) */
  @media (min-width: 879px) and (max-width: 1024px) {
    padding: 1em;
    .left .center .right {
      padding: 0.5em;
    }
  }

  /* Media query for screens larger than 1024px (e.g., desktops) */
  @media (min-width: 1025px) {
    .center {
      flex-direction: row;
      gap: 1em;
      * {
        flex: 1;
      }
    }
  }
`;

const Columns: React.FC = () => {
  return (
    <ColumnsWrapper
      direction="row"
      border="2px black solid;"
      padding="2em"
      gap="1em"
      wrap="wrap"
    >
      <Overview isLeft search={<SearchBar isLeft />} className="left" />
      <Combine className="center" />
      <Overview search={<SearchBar />} className="right" />
    </ColumnsWrapper>
  );
};

export default Columns;
