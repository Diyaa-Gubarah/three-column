import React from "react";
import styled from "styled-components";

export const FONT_SIZE = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xlg: "1.75rem",
  none: "inherit",
};

type TextAlign = "left" | "right" | "center" | "justify";

interface TextProps {
  color?: string;
  fontSize: keyof typeof FONT_SIZE; // Define the type of fontSize
  textAlign?: TextAlign | string;
  fontWeight?: string;
  gradient?: string;
  fontType?: "header" | "body";
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled.span<TextProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => FONT_SIZE[props.fontSize]};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => (props.fontType === "body" ? "Roboto" : "Poppins")};
`;

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <StyledText className={className} {...props}>
      {children}
    </StyledText>
  );
};

export default React.memo(Text);
