// import Layout from "layout/Layout";
// import Home from "pages/home/Home";
// import { Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <Routes >
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;


import React from 'react';
import Accordion from './components/Accordion';
import styles from './components/Accordion.module.scss';

const App: React.FC = () => {
    const items = [
        { title: 'What delivery', content: 'Content for item 1' },
        { title: 'Item 23', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' },
    ];
    return (
        <div className="App">
            <div className={styles.title}>Got questions?</div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
