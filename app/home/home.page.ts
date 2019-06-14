import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import {NavController } from '@ionic/angular';


declare var evothings: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    beaconData: any;

  constructor(private navCtrl:NavController, private change: ChangeDetectorRef ,private platform: Platform) {}


  
  ngOnInit() {
    this.startScanningforBeacons()
  }

   startScanningforBeacons() {
    this.platform.ready().then(() => {
      evothings.eddystone.startScan((data) => {
        this.beaconData = data;
        setTimeout(() => {
          this.change.detectChanges();
        }, 1000);
      }, error => console.error(error));
      
    
    });
  }
}
