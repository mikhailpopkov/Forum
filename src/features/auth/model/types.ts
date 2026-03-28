export interface FormProps {
  title: string;
  subtitle: string;
}

export interface FormValidation {
  email: string;
  password: string;
}

export interface LoginUser {
  user: User;
  access_token: string;
  refresh_token: string;
}
