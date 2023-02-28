import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem: string=''

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  verificarRadio() {
if(this.radioSelecionada==='option1'){
  this.mensagem='Você escolheu a primeira opção'
}
if(this.radioSelecionada==='option2'){
  this.mensagem='Você escolheu a segunda opção'
}
if(this.radioSelecionada==='option3'){
  this.mensagem='Você escolheu a terceira opção'
}
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
      position: "bottom",
      color:"danger"
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }

}
