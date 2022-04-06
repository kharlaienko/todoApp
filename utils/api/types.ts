export type AuthRegisterDTO = {
   userName: string;
   password: string;
   email: string;
};

export type AuthLoginDTO = {
   password: string;
   email: string;
};

export type TodoCreateDTO = {
   title: string;
   description?: string;
};
