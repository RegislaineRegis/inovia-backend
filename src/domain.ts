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
}
export type User = {
  id: number,
  email: string,
  password: string,
};
