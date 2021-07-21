export const setError = (name, username, email, phone, street) => {
    let errors = {};
    errors.name = name ? "" : "name is required"
    errors.username = username ? "" : "username is required"
    errors.email = email ? "" : "email is required"
    errors.phone = phone ? "" : "phone is required"
    errors.street = street ? "" : "street is required"
    return errors
}