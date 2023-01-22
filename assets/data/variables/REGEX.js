// This file is used to hold some common regex patterns

const EMAIL_VALIDATION = "^[a-zA-Z0–9+_.-]+@[a-zA-Z0–9.-]+$";
const EMPTY_STRING = "^\s*$";
const STRONG_PASSWORD = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])"