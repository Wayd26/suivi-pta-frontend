import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FooterComponent } from './footer/footer.component';
import { Sidebar_Directives } from '../shared/directives/side-nav.directive';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SidePanelComponent,
        FooterComponent,
        Sidebar_Directives
    ],
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SidePanelComponent,
        FooterComponent,
        Sidebar_Directives
    ],
    providers: []
})


export class TemplateModule { }
