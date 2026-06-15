import { api } from "./api";

interface LoginRequest {
    email: string;
    senha: string;
}

export async function loginUsuario(dados: LoginRequest) {
    try {
        const response = await api.post("Autenticacao/", dados);

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Erro ao realizar login.");
    }
}