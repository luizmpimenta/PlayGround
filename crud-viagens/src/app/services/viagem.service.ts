import { Injectable } from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { ViagemI } from './../models/viagem.interface';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
private viagemCollection: AngularFirestoreCollection<ViagemI>;
private viagens: Observable<ViagemI[]>;

  constructor(db: AngularFirestore) {
    this.viagemCollection = db.collection<ViagemI>('viagens');
    this.viagens = this.viagemCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });

      }
    ));
   }
   getViagens(){
     return this.viagens;
   }
   getViagem(id: string)  {
     return this.viagemCollection.doc<ViagemI>(id).valueChanges();

   }
   updateViagem(viagem: ViagemI, id: string)  {
     return this.viagemCollection.doc(id).update(viagem);

   }
   addViagem(viagem: ViagemI) {
     return this.viagemCollection.add(viagem);

   }
   removeViagem(id: string){
     return this.viagemCollection.doc(id).delete();
   }
}
