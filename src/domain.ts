export namespace Login {
  export type LoginInput = {
    email: string,
    password: string,
  };
  export type LoginOut = {
    id: number,
    email: string,
    toke: string,
  };
}
export type User = {
  id: number,
  email: string,
  password: string,
};
