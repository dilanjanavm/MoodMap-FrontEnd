export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple regex for email validation
    return emailRegex.test(email);
};