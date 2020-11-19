import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'gfgangularwebcam'; 
  
  public webcamImage: WebcamImage = null; 
  private trigger: Subject<void> = new Subject<void>(); 
  triggerSnapshot(): void { 
   this.trigger.next(); 
  } 
  handleImage(webcamImage: WebcamImage): void { 
   console.info('Saved webcam image', webcamImage); 
   this.webcamImage = webcamImage; 
  } 
   
  public get triggerObservable(): Observable<void> { 
   return this.trigger.asObservable(); 
  } 
}
