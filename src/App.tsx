import Layout from "layout/Layout";
import Home from "pages/home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
