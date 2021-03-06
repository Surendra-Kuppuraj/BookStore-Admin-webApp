import { Injectable } from '@angular/core';
import { 
	Http,
	Response,
	RequestOptions,
	Headers,
	HttpModule
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConst} from '../appConstant/AppConstant';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  sendCredential(username: string, password: string) {
	  	let url =AppConst.serverPath+ "/token";
	  	let encodedCredentials = btoa(username+":"+password);
	  	let basicHeader = "Basic "+encodedCredentials;
	  	let headers = new Headers ({
	  		'Content-Type' : 'application/x-www-form-urlencoded',
	  		'Authorization' : basicHeader
	  	});

	  	return this.http.get(url, {headers: headers});
  }

  checkSession(){
  		let url = AppConst.serverPath+"/isSessionExists";
	  	let headers = new Headers ({
	  		'x-auth-token' : localStorage.getItem('xAuthToken')
	  	});
	  	return this.http.get(url, {headers: headers});
  }
  
  logout() {
    let url = AppConst.serverPath+"/user/logout";
    
    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }

 
}
