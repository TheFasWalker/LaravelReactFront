const USERNAME__REGEXP = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

export const validateField = (value: string) => {
  if (!value) {
    return 'required';
  }
};

export const validateUserName = (value: string) => {
  if (!USERNAME__REGEXP.test(value)) {
    return 'недопустимые символы';
  }
  if (value.length < 7) {
    return 'Мало символов';
  }
};
