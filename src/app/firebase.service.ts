import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'money-track';
  constructor(
    private firestore: AngularFirestore
  ) { }

  get_transactions() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
}
