class Validation {
    onChangePlainTextCharacter(txtInput) {
        const regex = /[`~,.<>;':"\/\[\]\|{}()=_+\-!@#$%^&*]/;
        if (!regex.test(txtInput)) {
            return true;
        }
        return false;
    }

    onChangeNumberValidate(txtInput) {
        const regex = /^[0-9]*$/;

        if (regex.test(txtInput)) {
            return true;
        }
        return false;
    }

    onChangePhoneNumberValidate(txtInput) {
        const regex = /^[0-9+-]*$/;
        if (regex.test(txtInput)) {
            return true;
        }
        return false;
    }

    onChangeFreeTextValidate(txtInput) {
        const regex = /[`~,.<>;':"\/\[\]\|{}()=_+-]/;
        if (!regex.test(txtInput)) {
            return true;
        }
        return false;
    }

    onChangeEmailValidate(txtInput) {
        const regex = /^[a-zA-Z0-9.@]*$/;
        if (regex.test(txtInput)) {
            return true;
        }
        return false;
    }

    // Email Validation
    isValidEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email)) {
            return false;
        }
        return true;
    }
}

module.exports = new Validation();
