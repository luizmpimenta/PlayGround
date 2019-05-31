import { Component, OnInit } from '@angular/core';
import { ViagemService } from './../../services/viagem.service';
import { ViagemI } from './../../models/viagem.interface';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-viagem-details',
  templateUrl: './viagem-details.page.html',
  styleUrls: ['./viagem-details.page.scss'],
})
export class ViagemDetailsPage implements OnInit {
  viagem: ViagemI = {
    tituloViagem: '',
    dataIni: '',
    dataFin: '',
    status: '',
    hospedagem: '',
  destino: '',
  compromissos: '' ,
  obs: ''
  };
  viagemId = null;
  constructor(
    private route: ActivatedRoute, private nav:NavController,
    private viagemService: ViagemService , private loadingController: LoadingController
    ) {}

  ngOnInit() {
    this.viagemId = this.route.snapshot.params['id'];

    if(this.viagemId){
      this.loadViagem();
    }
  }
  async loadViagem(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.viagemService.getViagem(this.viagemId).subscribe(res => {
      loading.dismiss();
      this.viagem = res;
    });
  }
  async saveViagem(){
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();
    if(this.viagemId) {
      // Update
      this.viagemService.updateViagem(this.viagem, this.viagemId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      // Add
      this.viagemService.addViagem(this.viagem).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }

  }
  onRemove(viagemId: string){
    this.viagemService.removeViagem(viagemId);
  }

}
