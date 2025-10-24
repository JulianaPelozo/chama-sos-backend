import { } from "module";
import { Schema, model } from "mongoose";

export interface IOcorrencia {
    id: number;
    titulo: string; 
    descricao: string;
    data: Date;
    status: string;
}

class OcorrenciaModels {
    id: number
    titulo: string
    descricao: string
    data: Date
    status: string
    constructor(id: number, titulo: string, descricao: string, data: Date, status: string) {
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.data = data
        this.status = status
    }
    getTitulo() {return this.titulo}
    setTitulo(t: string) {this.titulo = t}
}

const ocorrenciaSchema = new Schema<IOcorrencia>({
    id: { type: Number, required: true, unique: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    data: { type: Date, required: true },
    status: { type: String, required: true }
}, { timestamps: true });
const Ocorrencia = model<IOcorrencia>("Ocorrencia", ocorrenciaSchema);
export { Ocorrencia, OcorrenciaModels };