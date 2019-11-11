import { Component } from '@angular/core';
import { TemplateService } from '../../shared/services/template.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent  {

    isCollapse: boolean;
    isOpen: boolean;

    constructor(private tplSvc: TemplateService, private cookie: CookieService, private router: Router) {
    }

    ngOnInit(): void {
        this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
        this.tplSvc.isSidePanelOpenChanges.subscribe(isOpen => this.isOpen = isOpen);
    }

    toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    }

    toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    }

    logout() {
      console.log(this.router.url);
      this.cookie.delete('token', '*');
      this.cookie.delete('auth', '*');
      this.router.navigate(['authentication/sign-in']);
    }
}
