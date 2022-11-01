export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\/!"#$%&'\\()*+,-.:;<=>?@[\]^_`{|}~])[A-Za-z\d\/!"#$%&'\\()*+,-.:;<=>?@[\]^_`{|}~]{8,12}$/;
export const EMAIL_PATTERN = /^(?=.{12,150}$)^[a-zA-Z0-9]+(\.?[a-zA-Z0-9])*@[a-zA-Z0-9]+\.([a-zA-Z]{2,3}|[a-zA-Z]{2}\.[a-zA-Z]{2,3})$/;
export const NAME_PATTERN = /^[A-Za-z]+$/; 