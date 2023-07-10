import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';



import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  heroe:number=0;  
  
  constructor(private _heroesService:HeroesService,private router:Router){

  }
  encontrarHeroe(hero: string) {    
    console.log(hero);
    this.heroe = this._heroesService.invocador(hero);     
    if(this.heroe>=0){this.router.navigate(['/heroe',this.heroe]);
    }else console.log("Error en la busqueda");
  }

  
}

