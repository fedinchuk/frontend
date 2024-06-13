import React from 'react';
import AccordionItem from './AccordionItem';
import styles from './Accordion.module.scss';

interface AccordionProps {
    items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;