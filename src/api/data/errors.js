/* export const RegisterValidate = {
    errors: [
        {400: "Preencha os dados obrigatórios"},
        {401: "Usuário não autenticado"},
        {403: "Email já cadastrado"},
    ]
};

export const LoginValidate = {
    errors: [
        {400: "E-mail ou senha inválidos"},
        {401: "Usuário não autenticado"},
        {404: "Usuário não encontrado"},
    ]
};
 */
export const errors = {
    "errors": [{
        "register": {
            "400": "Preencha os dados obrigatórios",
            "401": "Usuário não autenticado",
            "403": "Email já cadastrado",
        },
        "login":{
            "400": "E-mail ou senha inválidos",
            "401": "Usuário não autenticado",
            "404": "Usuário não encontrado",
        }
    }]
};

