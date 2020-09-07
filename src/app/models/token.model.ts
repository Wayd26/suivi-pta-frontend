export interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

export interface User {
  id: number;
  surname: string;
  forename: string;
  email: string;
  verified: string;
  is_admin: string;
  email_verified_at?: any;
  level: number;
  deleted_at?: any;
  remember_token: string;
  created_at: string;
  updated_at: string;
}

export interface TokenUserResponse {
  user: User;
  token: string;
}
