import { Component, OnInit } from '@angular/core';
import { ViagemI } from './../models/viagem.interface';
import { ViagemService } from './../services/viagem.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  viagens: ViagemI[];

  constructor(private viagemService: ViagemService) {}
  ngOnInit()  {
    this.viagemService.getViagens().subscribe(res => this.viagens = res);
  }

}
