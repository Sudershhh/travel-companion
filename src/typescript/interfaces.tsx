import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CardProps {
  imageSrc: string | StaticImport;
  name: string;
  propertiesCount: number;
}

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface SignInFormData {
  email: string;
  password: string;
}

export interface AuthorizationContextInterface {
  isLoggedIn: boolean;
  login: (userInformation: UserInterface) => void;
  logout: () => void;
  user: UserInterface | null;
  registerEmail: (email: string) => void;
  email: string;
  registerUser: (registerUserInformation: UserInterface) => void;
}

export interface UserInterface {
  email: string;
}

export interface RegisterUserData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthorizationResponse {
  email: string;
  status: string;
}
