function generatePasssword(length, strength) {
    const lowChars = "abcdefghijklmnopqrstuvwxyz";
    const mediumChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const highChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";

    switch (strength){
        case 'low':
            characters = lowChars;
            break;
        case 'medium':
            characters = mediumChars;
            break;
        case 'high':
            characters = highChars;
            break;
        default:
            throw new Error("Password too weak. Should atleast be low, medium or high");       
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomChar = Math.floor(Math.random() * characters.length);
        password += characters[randomChar];
    }

    return password;

}

module.exports = generatePasssword;