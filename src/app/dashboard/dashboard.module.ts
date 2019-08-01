import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { DataTablesModule } from 'angular-datatables';

import { DashboardRoutes } from './dashboard-routing.module';
import { CommonModule} from '@angular/common';
import {NgSelectizeModule} from 'ng-selectize';


//Dashboard Component
import { DashboardComponent } from './dashboard.component';
import { ProgrammeListComponent } from './fichier/fichier-de-base/programme/programme-list/programme-list.component';
import { StructureListComponent } from './fichier/fichier-de-base/structure/structure-list/structure-list.component';
import { ActionListComponent } from './fichier/fichier-de-base/action/action-list/action-list.component';
import { TypeSourceFinancementListComponent } from './fichier/financement/type_source_financement/type-source-financement-list/type-source-financement-list.component';
import { ActiviteListComponent } from './fichier/fichier-de-base/activite/activite-list/activite-list.component';
import { VilleListComponent } from './fichier/localisation/ville/ville-list/ville-list.component';
import { DepartementListComponent } from './fichier/localisation/departement/departement-list/departement-list.component';
import { TachesListComponent } from './fichier/fichier-de-base/taches/taches-list/taches-list.component';
import { StructureAddComponent } from './fichier/fichier-de-base/structure/structure-add/structure-add.component';
import {FormsModule} from '@angular/forms';
import { ProgrammeAddComponent } from './fichier/fichier-de-base/programme/programme-add/programme-add.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes),
    DataTablesModule,
    CommonModule,
    NgSelectizeModule,
    FormsModule

  ],
    declarations: [
        DashboardComponent,
        ProgrammeListComponent,
        StructureListComponent,
        ActionListComponent,
        TypeSourceFinancementListComponent,
        ActiviteListComponent,
        VilleListComponent,
        DepartementListComponent,
        TachesListComponent,
        StructureAddComponent,
        ProgrammeAddComponent
    ],
    providers: [
        ThemeConstants
    ]
})
export class DashboardModule { }
