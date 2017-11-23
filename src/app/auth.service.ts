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
    console.log('ini' ,this.user);
  }
  
  login() 
  {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.afAuth.auth.subscribe(auth => console.log(auth));
  }
    
  public currentUser: firebase.User = null;
  isLogin()
  {
    if(this.currentUser == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  logOut() 
  {
    //this.user = null;
    this.afAuth.auth.signOut();
  }
}
