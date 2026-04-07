export interface FormProps {
  title: string;
  subtitle: string;
}

export interface FormValidation {
  email: string;
  password: string;
}

export interface FormRegValidation {
  email: string;
  password: string;
  name: string;
}

export interface LoginUser {
  user: User;
  access_token: string;
  refresh_token: string;
}
