import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit, AfterViewInit {
  
  UsuarioActivo = '';

  constructor(private UsuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.UsuarioService.UsuarioActivo.subscribe(Usuario =>{
      this.UsuarioActivo = Usuario;
    })
  }

  ngAfterViewInit(): void {
    this.CambiarImagen();
  }
  
  CambiarImagen(): void { 
    const Imagen = document.getElementById("Cuerpo") as HTMLElement;
    const Fondo = document.getElementById("Fondo") as HTMLElement;
    switch (this.UsuarioService.GetUsuarioActivo()) {
      case "Dueños": {
        Imagen.style.setProperty("--fondo", `url('/assets/fondo-dueno.png')`);
        Fondo.style.setProperty("--tamano", "1330px");
        break;
      }
      case "Veterinario": {
        Imagen.style.setProperty("--fondo", `url('/assets/fondo-vet.png')`);
        Fondo.style.setProperty("--tamano", "1539px");
        break;
      }
      case "Albergues": {
        Imagen.style.setProperty("--fondo", `url('/assets/fondo-albergue.png')`);
        Fondo.style.setProperty("--tamano", "1539px");
        break;
      }
    }
  }

  Mostrar(): string {
    return this.UsuarioService.GetUsuarioActivo();
  }

  OcultarContrasena(){
    const Contrasena_1 = document.getElementById("Ver-contrasena_1") as HTMLElement;
    const Contrasena_2 = document.getElementById("Ver-contrasena_2") as HTMLElement;
    const tipo= Contrasena_1.getAttribute('type') === 'password' ? 'text': 'password';
    Contrasena_1.setAttribute('type', tipo);
    Contrasena_2.setAttribute('type', tipo);
  }
}
