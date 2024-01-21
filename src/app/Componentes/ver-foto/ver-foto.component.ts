import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-ver-foto',
  templateUrl: './ver-foto.component.html',
  styleUrls: ['./ver-foto.component.css']
})
export class VerFotoComponent 
{
  // http://localhost:4200/#/verFoto?ruta=Babu/Babularda/7.png

  constructor(private route: ActivatedRoute, private appComponent: AppComponent) {

    this.route.queryParams.subscribe((params: any) => {
      const ruta = params['ruta'];
      console.log('ruta:', ruta);
      appComponent.rutaFoto = ruta;
      //appComponent.rutaFoto = "assets/images/as0dfg34/" + ruta;
    });

    appComponent.mostrarNav = false;
  }


  ngAfterViewInit() 
  {

  }
}
