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
  selector: 'app-catacumba',
  templateUrl: './catacumba.component.html',
  styleUrls: ['./catacumba.component.css']
})
export class CatacumbaComponent 
{
  public rutaGeneral: string = "assets/images/as0dfg34/Catacumba";
  public categorias = new Array<Categoria>();

  constructor() 
  {
    /*
    var cadena = "";

    for (let i = 1; i <= 35; i++) {
      //cadena += `<img src="assets/images/as0dfg34/Catacumba/Matri/${i}.png" class="foto-mini" (click)="verFoto($event)" /> \n`;
      cadena += `{ ruta: "${i}.png" },`;
    }

    console.log(cadena);
    */

    this.categorias.push({
      nombre: "Matrimonio",
      nombreCarpeta: "Matri",
      abierto: false,
      fotos: [
        { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
        { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },{ ruta: "16.png" },
        { ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },
        { ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" },{ ruta: "31.png" },{ ruta: "32.png" },
        { ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" }
      ]
    });

    this.categorias.push({
      nombre: "Luna de Miel",
      nombreCarpeta: "Luna_de_Miel",
      abierto: false,
      fotos: [
        //{ ruta: "1.png" },  // DISPONIBLE
        { ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
        { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },
        //{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },  // DISPONIBLE
        { ruta: "16.png" },
        //{ ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },  // DISPONIBLE
        { ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },
        { ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" }
      ]
    });

    this.categorias.push({
      nombre: "Casual",
      nombreCarpeta: "Casual",
      abierto: false,
      fotos: [
        { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },
        { ruta: "7.png" }, { ruta: "8.png" },
        { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },  
        { ruta: "12.png" }, 
        { ruta: "13.png" }, { ruta: "14.png" }, { ruta: "15.png" }, { ruta: "16.png" }, { ruta: "17.png" }, { ruta: "18.png" }, { ruta: "19.png" }, { ruta: "20.png" },
        { ruta: "21.png" }, { ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },{ ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },
        { ruta: "29.png" }, { ruta: "30.png" }, { ruta: "31.png" }, { ruta: "32.png" },

        { ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" },{ ruta: "36.png" },{ ruta: "37.png" },{ ruta: "38.png" },{ ruta: "39.png" },
        { ruta: "40.png" },{ ruta: "41.png" },{ ruta: "42.png" },{ ruta: "43.png" },{ ruta: "44.png" },{ ruta: "45.png" },{ ruta: "46.png" },

        { ruta: "47.png" },{ ruta: "48.png" },{ ruta: "49.png" },{ ruta: "50.png" },{ ruta: "51.png" },{ ruta: "52.png" },{ ruta: "53.png" },{ ruta: "54.png" },

        { ruta: "Catacumba1.gif" }, { ruta: "Catacumba2.gif" }, { ruta: "Catacumba3.gif" }, { ruta: "Catacumba4.gif" }
      ]
    });

    // this.categorias.push({
    //   nombre: "Bath",
    //   nombreCarpeta: "Bath",
    //   abierto: false,
    //   fotos: [
    //     { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" }, { ruta: "5.png" }, { ruta: "6.png" }, { ruta: "7.png" }, { ruta: "8.png" },
    //     { ruta: "9.png" }, { ruta: "10.png" }, { ruta: "11.png" }, { ruta: "12.png" }, { ruta: "13.png" }, { ruta: "14.png" }, { ruta: "15.png" },
    //     { ruta: "16.png" }, { ruta: "17.png" },
    //     { ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" }, { ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" }
    //   ]
    // });

    this.categorias.push({
      nombre: "Party",
      nombreCarpeta: "Party",
      abierto: false,
      fotos: [
        { ruta: "1.png" }
      ]
    });

    this.categorias.push({
      nombre: "Pre 2020",
      nombreCarpeta: "Pre_2020",
      abierto: false,
      fotos: [
        { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
        { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },
        { ruta: "16.png" },{ ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },
        { ruta: "24.png" },{ ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" },{ ruta: "31.png" },
        { ruta: "32.png" },{ ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" },{ ruta: "36.png" },{ ruta: "37.png" },{ ruta: "38.png" },{ ruta: "39.png" },
        { ruta: "40.png" },{ ruta: "41.png" },{ ruta: "42.png" },{ ruta: "43.png" },{ ruta: "44.png" },{ ruta: "45.png" },{ ruta: "46.png" },{ ruta: "47.png" },
        { ruta: "48.png" }
      ]
    });
  }

  verFoto(evento: any) {
    //window.open(evento.target.src, "_blank");
    window.open("/#/verFoto?ruta=" + evento.target.src, "_blank");
  }
 
}
