import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AuthService 
{
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) 
  {
    this.user = this.afAuth.authState
  }
  
  login() 
  {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
    
  logOut() 
  {
    //this.user = null;
    this.afAuth.auth.signOut();
  }
}
