import { OcorrenciaModels } from "./models/OcorrenciaModels"; 
export { OcorrenciaModels };

const ocorrenciaExample = new OcorrenciaModels(1, "Acidente de Trânsito",
     "Colisão entre dois veículos na Avenida Agamenon Magalhães, próximo à praça do Derby.", 
     new Date(), "Aberto");
console.log(ocorrenciaExample.getTitulo());

