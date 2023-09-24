import { Role } from "./role"

export interface Autenticacao {
  login: string
  senha: string
}

export interface AutenticacaoResponse{
  mensagem: string
  token: string
  user: User
}

export interface User{
  id: number,
  login: string,
  password: string,
        role: string,
        enabled: boolean,
        authorities: authorities[],
        credentialsNonExpired: boolean,
        accountNonExpired: boolean,
        username: string,
        accountNonLocked: boolean
}

export interface authorities{
    authority: string
}

  export interface Registro {
    login: string
    senha: string
    role: Role
  }
