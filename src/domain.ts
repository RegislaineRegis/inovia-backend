export namespace Login {
  export type Input = {
    email: string,
    password: string,
  };
  export type Output = {
    accessToken: string,
    refreshToken: string,
    tokenType: string,
    expiresIn: number,
  };
}
export type User = {
  id: number,
  email: string,
  password: string,
};
export namespace Customer {
  export type Input = {
    name: string,
    address: string,
    phone: string,
    email: string,
    birthDate: Date,
    profilePhoto: string,
  };
  export type Output = {
    id: number,
    user_id: number,
    name: string,
    address: string,
    phone: string,
    email: string,
    birthDate: Date,
    profilePhoto: string,
  };
}


