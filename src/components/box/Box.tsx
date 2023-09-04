import * as React from "react";

import styled from "styled-components";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  // Styling Props
  backgroundColor?: string;
  fontSize?: string;
  gap?: string;
  rounded?: string;
  flex?: number;
  // Layout Props
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  self?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  // Spacing Props
  padding?: string;
  margin?: string;
  // Border Props (added as optional)
  border?: string;
  borderColor?: string;
  borderWidth?: string;
}

const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  align-self: ${(props) => props.self || "auto"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  background: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "inherit"};
  border-radius: ${(props) => props.rounded || "0"};
  gap: ${(props) => props.gap || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  flex: ${(props) => props.flex || "1"};
  // Border Styles (added conditionally)
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => props.borderWidth};
`;

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <Container className={className} {...rest}>
      {children}
    </Container>
  );
};

export default React.memo(Box);
