import React from 'react';
import Accordion from './components/Accordion';
import styles from './components/Accordion.module.scss';

const App: React.FC = () => {
    const items = [
        { title: 'What delivery options are available?', content: 'Credit/Debit Cards: Visa, MasterCard, American Express Digital Waller: PayPal, Apple Pay, Google Pay, Samsung Pay' },
        { title: 'How do i change my personal data in my account?', content: 'Content for item 2' },
        { title: 'How does the payment process work?', content: 'Content for item 3' },
        { title: 'How do i resolve a dispute or return a product', content: 'Content for item 4' },
        { title: 'What payment methods are available?', content: 'Content for item 5' },
    ];
    return (
        <div className="App">
            <div className={styles.title}>Got questions?</div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
