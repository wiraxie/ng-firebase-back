import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AuthService 
{
  authState: any = null;
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) 
  {
    this.afAuth.authState.subscribe((auth) => {this.authState = auth});
    console.log('ini' ,this.user);
  }
  
  login() 
  {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.afAuth.auth.subscribe(auth => console.log(auth));
  }
    
  // public currentUser: firebase.User = null;
  // isLogin()
  // {
  //   if(this.currentUser == null)
  //   {
  //     return false;
  //   }
  //   else
  //   {
  //     return true;
  //   }
  // }

  logOut(): void
  {
    //this.user = null;
    this.afAuth.auth.signOut();
  }

  //test by email
  get isUserAnonymousLoggedIn(): boolean 
  {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }
 
  get currentUserId(): string 
  {
    return (this.authState !== null) ? this.authState.uid : ''
  }
 
  get currentUserName(): string
  {
    return this.authState['email']
  }
 
  get currentUser(): any 
  {
    return (this.authState !== null) ? this.authState : null;
  }
 
  get isUserEmailLoggedIn(): boolean 
  {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) 
    {
      return true
    } 
    else 
    {
      return false
    }
  }
 
  signUpWithEmail(email: string, password: string) 
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => 
      {
        this.authState = user
      })
      .catch(error => 
      {
        console.log(error)
        throw error
      });
  }
 
  loginWithEmail(email: string, password: string)
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => 
      {
        this.authState = user
      })
      .catch(error => 
      {
        console.log(error)
        throw error
      });
  }
 
  signOut(): void 
  {
    this.afAuth.auth.signOut();
    //isUserEmailLoggedInthis.router.navigate(['/'])
  }
  //test by email

}
