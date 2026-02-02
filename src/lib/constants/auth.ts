

export const registerInputs = [
    { id: 1, label: "firstName-label", type: "text", name: "firstName" },
    { id: 2, label: "lastName-label", type: "text", name: "lastName" },
    
    { id: 3, label: "email-label", type: "text", name: "email" },
    { id: 4, label: "phone-label", type: "phone", name: "phone" },
    { id: 5, label: "gender-label", type: "gender", name: "gender" },

    { id: 6, label: "password-label", type: "password", name: "password" },
    { id: 7, label: "confirmPassword-label", type: "password", name: "rePassword" }
];

export const profileInputs = [
    // { id: 1, label: "firstname-label", type: "text", name: "firstName", placeholder: "Ahmed" },
    // { id: 2, label: "lastname-label", type: "text", name: "lastName", placeholder: "Abdullah" },
    
    { id: 4, label: "email-label", type: "text", name: "email", placeholder: "user@example.com" },
    { id: 5, label: "phone-label", type: "phone", name: "phone", placeholder: "1012345678" },
];

export const changePasswordInputs = [
    { id: 1, label: "Current Password", type: "password", name: "oldPassword" },
    { id: 2, label: "New Password", type: "password", name: "password" },
    { id: 3, label: "Confirm New Password", type: "password", name: "rePassword" },
];

export const loginInputs = [
    { id: 1, label: "email-label", type: "text", name: "email" },
    { id: 2, label: "password-label", type: "password", name:"password" }
];

export const forgotPasswordInputs = [
    { id: 1, label: "email-label", type: "text", name: "email" },

];

export const confirmInputs = [
    { id: 1, label: "Your Email", type: "text", name: "email" },
    { id: 2, label: "New Password", type: "password", name: "newPassword" }
];

export const otpInputs = [
    { id: 1, label: "otp-label", type: "otp", name: "resetCode" },
];


