export const validateMail = (value: string): boolean => (
    /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)
);

export const isNum = (value: string) => (/^-?\d+$/.test(value));