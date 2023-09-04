// Combine.tsx

import { Box, List } from "../../../components";

import Item from "./Item";
import React from "react";
import { useFilter } from "../../../hooks";

const Combine: React.FC<{ className?: string }> = ({ className }) => {
  const { detail1, detail2 } = useFilter();

  return (
    <Box
      className={className}
      justify="center"
      direction="column"
      border="2px black solid;"
      padding="1em"
    >
        <List
          data={detail1}
          direction="column"
          gap="1em"
          renderItem={(value) => <Item value={value} />}
        />
        <List
          data={detail2}
          direction="column"
          gap="1em"
          renderItem={(value) => <Item value={value} />}
        />
    </Box>
  );
};

export default React.memo(Combine);
