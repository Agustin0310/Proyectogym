export interface Rutina {
    id: number;
    ejercicios: ejercicio[];
    series: number;
    dia: string;
}


export interface ejercicio {
    id: number;
    nombre: string;
    musculo: string;
    explicacion: string;
    repeticiones: number;
    peso: number;
}
