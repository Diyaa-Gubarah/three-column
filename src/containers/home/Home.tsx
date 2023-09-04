import { Columns } from "./atom";
import React from "react";
import { withDataFetching } from "../../hoc";

interface Props {}

const App: React.FC<Props> = ({}) => {
  return <Columns />;
};

const Home = withDataFetching("http://localhost:3001/data")(App);

export default Home;
