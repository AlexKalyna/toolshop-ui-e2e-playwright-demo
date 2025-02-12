export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface UserCreateRequest {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  phone: string;
  password: string;
  email: string;
}

export interface UserCreatedResponse {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  phone: string;
  dob: string; // Consider using Date type if you plan to work with date objects
  email: string;
  id: string;
}

export interface UserContext {
  userModel: UserCreateRequest;
  createdUser: UserCreatedResponse;
}
