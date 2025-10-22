export class OcorrenciaModels {

    private id: number;
    private titulo: string;
    private descricao: string
    private data: Date;
    private status: string;

    constructor(id: number, titulo: string, descricao: string, data: Date, status: string) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.status = status;
    }
    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getData(): Date {
        return this.data;
    }
    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }   

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }   

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public setId(id: number): void {
        this.id = id;
    }
}