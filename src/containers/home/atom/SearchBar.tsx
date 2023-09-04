import { Input } from "../../../components";
import React from "react";
import { useFilter } from "../../../hooks";

type Props = { isLeft?: boolean };

const SearchBar = ({ isLeft }: Props) => {
  const { handle1, handle2 } = useFilter();

  const [text, setText] = React.useState("");

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputText = event.target.value;
      setText(inputText);
      isLeft ? handle1(inputText) : handle2(inputText);
    },
    [text.length]
  );

  return (
    <Input
      value={text}
      placeholder="Enter text..."
      onChange={handleChange}
      className="custom-input"
    />
  );
};

export default React.memo(SearchBar);
