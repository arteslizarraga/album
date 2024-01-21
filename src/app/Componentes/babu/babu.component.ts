import { Component } from '@angular/core';

export class Categoria
{
  public nombre: string = "";
  public nombreCarpeta: string = "";
  public abierto: boolean = false;
  public fotos: Array<Foto> = new Array<Foto>();
}

export class Foto
{
  public ruta: string = "";
}

@Component({
  selector: 'app-babu',
  templateUrl: './babu.component.html',
  styleUrls: ['./babu.component.css']
})
export class BabuComponent 
{
  public rutaGeneral: string = "assets/images/as0dfg34/Babu";
  public categorias = new Array<Categoria>();

  constructor() 
  {
    this.categorias.push({
      nombre: "Babularda",
      nombreCarpeta: "Babularda",
      abierto: false,
      fotos: [
        { ruta: "1.png" }, { ruta: "2.jpg" },{ ruta: "3.jpg" },{ ruta: "4.jpg" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },
        { ruta: "8.png" },
      ]
    });
  }

  verFoto(evento: any) {
    window.open(evento.target.src, "_blank");
    //window.open("/#/verFoto?ruta=" + evento.target.src, "_blank");
  }
 
}

