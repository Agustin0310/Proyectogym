export interface Usuario {
    nombre: string
    apellido: string
    telefono: string
    edad: number
    email: string
    password: string

    
}

/*
export const defaultContact:Usuario = {
    nombre: "First name",
    apellido: "+5412345678",
    telefono: "0123465"
    
}
*/




export interface UsuarioJsonPlaceholder {
    id?: number;
    nombre?: string;
    apellido?: string;
    telefono?: string
    edad?: number;
    email?: string;
    password?: string;
}
