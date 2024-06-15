import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen
                ? `${contentRef.current.scrollHeight}px`
                : '0';
        }
    }, [isOpen]);

    return (
        <div className={`${styles.accordionItem} ${isOpen ? `${styles.open}` : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.accordionButton}>
                {title}
                <div className={styles.circ}>
                <svg className={styles.accordionIcon} viewBox="0 0 24 24">
                    <path d="M12 16.5l-8.5-8.5 1.5-1.5 7 7 7-7 1.5 1.5z"/>
                </svg>
                </div>
            </button>
            <div
                className={styles.accordionContent}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;