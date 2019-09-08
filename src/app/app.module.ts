import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { TemplateService } from './shared/services/template.service';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule} from '@angular/common';

// Layout Component
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';
import { ProgrammeService } from './shared/services/programme.service';
import { UtilsService } from './shared/services/utils.service';
import { StructureService } from './shared/services/structure.service';
import { ActionService } from './shared/services/action.service';
import { TypeSourceFinancementService } from './shared/services/type-source-financement.service';
import { ActiviteService } from './shared/services/activite.service';
import { VilleService } from './shared/services/ville.service';
import { DepartementService } from './shared/services/departement.service';
import { TacheService } from './shared/services/tache.service';
import {NgSelectizeModule} from 'ng-selectize';
import {MinistereService} from './shared/services/ministere.service';
import {ExercieService} from './shared/services/exercie.service';
import {ObjectifService} from './shared/services/objectif.service';
import {DataService} from './shared/services/data.service';
import {ExportAsExelService} from './shared/services/export-as-exel.service';
import {ExportAsModule} from 'ngx-export-as';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        SharedModule,
        TemplateModule,
        HttpClientModule,
        CommonModule,
        NgSelectizeModule,
      ExportAsModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent
    ],
    providers: [TemplateService, ProgrammeService, UtilsService, StructureService,
       ActionService, TypeSourceFinancementService, ActiviteService, VilleService, DepartementService,
      TacheService, MinistereService, ExercieService, ObjectifService, DataService, ExportAsExelService],
    bootstrap: [AppComponent]
})


export class AppModule { }
