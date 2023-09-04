// Overview.tsx

import { Box, List } from "../../../components";

import Item from "./Item";
import React from "react";
import { useFilter } from "../../../hooks";

// Import the necessary actions

interface Props {
  isLeft?: boolean;
  search: React.ReactNode;
  className?: string;
}

const Overview: React.FC<Props> = ({ isLeft, search }) => {
  const { overview1, overview2 } = useFilter();
  return (
    <Box
      align="center"
      direction="column"
      border="2px black solid;"
      padding="1em"
      gap='1em'
    >
      {search}
      <List
        data={isLeft ? overview1 : overview2}
        direction="column"
        gap="1em"
        renderItem={(item) => <Item value={item} />}
      />
    </Box>
  );
};

export default React.memo(Overview);
