import img from "../assets/HeaderImg/bubblegum.png";

export const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const namePattern = /^[A-Z][a-z]+(-?[A-Z][a-z]+)?$/;

export const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;



export const data = {
    guarantee: { text: "Guarantee", img },
    price: { text: "Price", img },
    quality: { text: "Quality", img },
};

export const questionInfo = [
    {
        id: 1,
        title: "What delivery options are available?",
        desc: "Credit/Debit Cards: Visa, MasterCard, American Express <br/>Digital Wallets: PayPal, Apple Pay, Google Pay, Samsung Pay",
    },
    {
        id: 2,
        title: "How do I change my personal data in my account?",
        desc: "Credit/Debit Cards: Visa, MasterCard, American Express <br/>Digital Wallets: PayPal, Apple Pay, Google Pay, Samsung Pay",
    },
    {
        id: 3,
        title: "How does the payment process work?",
        desc: "Credit/Debit Cards: Visa, MasterCard, American Express <br/>Digital Wallets: PayPal, Apple Pay, Google Pay, Samsung Pay",
    },
    {
        id: 4,
        title: "How do I resolve a dispute or return a product?",
        desc: "Credit/Debit Cards: Visa, MasterCard, American Express <br/>Digital Wallets: PayPal, Apple Pay, Google Pay, Samsung Pay",
    },
    {
        id: 5,
        title: "What payment methods are available?",
        desc: "Credit/Debit Cards: Visa, MasterCard, American Express <br/>Digital Wallets: PayPal, Apple Pay, Google Pay, Samsung Pay",
    },
];

export const officeInfo = [
    {
        id: 1,
        title: "Office refresh: Furniture for comfortable remote work",
        desc: "Order tables, chairs, and cabinets for your office or home with a 10% discount. Make your workplace more efficient and comfortable.",
    },
    {
        id: 2,
        title: "How to use the offer?",
        desc: "Enter the promo code OFFICE10 at checkout to automatically receive a 10% discount.",
    },
];