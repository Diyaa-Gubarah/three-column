import { Box, Text } from "../../../components";

import React from "react";

type Props = { value: any };

const Item = ({ value }: Props) => {

  return (
    <Box key={value} align="center" justify="center" flex={1}>
      <Text fontSize="md">{value}</Text>
    </Box>
  );
};

export default React.memo(Item);
