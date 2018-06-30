const rules = {
  username: {
    email: {
      message: '^Digite um email válido',
    },
    presence: {
      message: '^Digite seu login',
    },
  },

  password: {
    length: {
      minimum: 5,
      message: '^Sua senha precisa ter 5 caracteres',
    },
    presence: {
      message: '^Digite uma senha',
    },
  },
};

export default rules;
