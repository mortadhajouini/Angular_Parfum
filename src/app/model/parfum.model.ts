import { Odeur } from "./odeur.model";

export class Parfum {
    idParfum! : number;
    nomParfum! : string;
    prixParfum! : number;
    datedeSortie! : Date ;
    odeur! : Odeur;
    email! : string;
    enable! : boolean;
}