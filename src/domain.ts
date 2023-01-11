export namespace Login {
  export type Input = {
    email: string,
    password: string,
  };
  export type Output = {
    id: number,
    email: string,
    accessToken: string,
    refreshToken: string,
  };
  export type Token = {
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

