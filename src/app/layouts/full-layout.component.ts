
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../_services/auth.service';
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {

  mobileQuery: MediaQueryList;

  private menus:any;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private authService:AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.menus=[{name:"Dashboard",link:"dashboard"},{name:"Login",link:"login"},{name:"Register",link:"register"}];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
 
  }

  ngAfterViewInit() {
    $(function() {

      $('#menu').metisMenu();
    
    });

    
}

  shouldRun = true;








  // onExitAppClick(){
  //   this.router.navigate(['./pages/login']);
  // }


  onExitAppClick() {
    this.authService.logout();
  }



 }

