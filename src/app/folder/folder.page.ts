import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// LÍNEAS PROGRAMADAS: Agregamos herramientas para el control reactivo del formulario y alertas nativas
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  // SE INCLUYEN TODOS LOS MÓDULOS REQUERIDOS PARA EVITAR LA PANTALLA EN BLANCO
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class FolderPage implements OnInit {
  public folder!: string;
  // Atributo explícito programado para gestionar el formulario de contacto
  public contactoForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Captura el parámetro de la sección actual
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';

    // Programación lógica de las reglas y criterios de validación de negocio
    this.contactoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Controlador personalizado programado manualmente para procesar el envío
  async enviarFormulario() {
    if (this.contactoForm.valid) {
      const datosUsuario = this.contactoForm.value;

      // Invocación explícita del componente nativo AlertController para feedback de interfaz
      const alert = await this.alertController.create({
        header: '¡Formulario Recibido!',
        message: `Muchas Gracias ${datosUsuario.nombre}. Tu mensaje de contacto fue procesado exitosamente.`,
        buttons: ['Entendido']
      });

      await alert.present();
      this.contactoForm.reset(); // Reseteo controlado de los campos
    }
  }
}



// Dentro de este archivo es donde esta toda la logica para poder recibir la palabra clave de la URL dinamica
// Esto se hace usando el servicio de ActivatedRoute de Angular, ya que este es el que permite
// que el codigo lea la barra de navegacion cuando la pagina carga.
//  Luego el sistema busca el parametro :id,  ya que este es el que contiene la palabra clave que pusimos
// en el otro archivo que era inicio, contacto, y esta se almacena en la variable de folder.
// Y asi es como gracias a esto la app sabe exactamente que seccion fue la que uno selecciona al darle click
// y se lo informa al archivo HTML para que muestre la parte correcta

//En esta sesion programe un formulario reactivo ulitizando FormBuilder, que es una herramienta que
//nos ayuda a crear formularios interactivos, se definieron los validadores obligatorios, las restriciones
// de longitud minima y la validacion de formato de correo electronico. Esto es lo que nos permite validar
// los datos en tiempo real antes de habilitar el boton de envio, verificando que se cumplan
// las condiciones antes de habilitar el boton de enviar. Y el AlertController le avisa al usuario que todo
// esta bien genera la alerta diciendo gracias por su mensaje
//  y luego limpia los campos dejando todo reseteado con el metodo reset.





 

