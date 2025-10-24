import { Request, Response } from 'express';


export const login = async (req: Request, res: Response) => {
    const { login, senha } = req.body;

    if (!login || !senha) {
        return res.status(400).json({ message: 'Login e senha são obrigatórios.' });
    }

    try {
        if (login === 'admin' && senha === '12345') {
            const token = 'seu-jwt-token-aqui'; // Gerar um token JWT real
            return res.status(200).json({ token, message: 'Login bem-sucedido!' });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
};