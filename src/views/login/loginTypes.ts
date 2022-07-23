export interface IUserData {
  id: string;
  username: string;
  email: string;
  enrolledLanguages: string[];
}

export interface ILoginEntity {
  username: string;
  password: string;
}