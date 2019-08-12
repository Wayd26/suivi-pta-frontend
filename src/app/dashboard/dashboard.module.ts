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
import {SourceFinancementListComponent} from './fichier/financement/source-financement-list/source-financement-list.component';
import { VilleAddComponent } from './fichier/localisation/ville/ville-add/ville-add.component';
import { DepartementAddComponent } from './fichier/localisation/departement/departement-add/departement-add.component';
import { TypeSourceFinancementAddComponent } from './fichier/financement/type_source_financement/type-source-financement-add/type-source-financement-add.component';
import { SourceFinancementAddComponent } from './fichier/financement/source-financement-add/source-financement-add.component';
import { MinistereListComponent } from './fichier/fichier-de-base/ministere/ministere-list/ministere-list.component';
import { MinistereAddComponent } from './fichier/fichier-de-base/ministere/ministere-add/ministere-add.component';
import { ProgrammeEditComponent } from './fichier/fichier-de-base/programme/programme-edit/programme-edit.component';
import { DepartementEditComponent } from './fichier/localisation/departement/departement-edit/departement-edit.component';
import { StructureEditComponent } from './fichier/fichier-de-base/structure/structure-edit/structure-edit.component';
import { MinistereEditComponent } from './fichier/fichier-de-base/ministere/ministere-edit/ministere-edit.component';
import { VilleEditComponent } from './fichier/localisation/ville/ville-edit/ville-edit.component';
import { TypeSourceFinancementEditComponent } from './fichier/financement/type_source_financement/type-source-financement-edit/type-source-financement-edit.component';
import { SourceFinancementEditComponent } from './fichier/financement/source-financement-edit/source-financement-edit.component';
import { ObjectifListComponent } from './fichier/fichier-de-base/objectif/objectif-list/objectif-list.component';
import { ObjectifAddComponent } from './fichier/fichier-de-base/objectif/objectif-add/objectif-add.component';
import { ObjectifEditComponent } from './fichier/fichier-de-base/objectif/objectif-edit/objectif-edit.component';
import { ExerciceListComponent } from './fichier/fichier-de-base/exercice/exercice-list/exercice-list.component';
import { ExerciceEditComponent } from './fichier/fichier-de-base/exercice/exercice-edit/exercice-edit.component';
import { ExerciceAddComponent } from './fichier/fichier-de-base/exercice/exercice-add/exercice-add.component';
import { ActionAddComponent } from './fichier/fichier-de-base/action/action-add/action-add.component';
import {TachesAddComponent} from './fichier/fichier-de-base/taches/taches-add/taches-add.component';

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
        SourceFinancementListComponent,
        TachesListComponent,
        StructureAddComponent,
        ProgrammeAddComponent,
        VilleAddComponent,
        DepartementAddComponent,
        TypeSourceFinancementAddComponent,
        SourceFinancementAddComponent,
        MinistereListComponent,
        MinistereAddComponent,
        ProgrammeEditComponent,
        DepartementEditComponent,
        StructureEditComponent,
        MinistereEditComponent,
        VilleEditComponent,
        TypeSourceFinancementEditComponent,
        SourceFinancementEditComponent,
        ObjectifListComponent,
        ObjectifAddComponent,
        ObjectifEditComponent,
        ExerciceListComponent,
        ExerciceEditComponent,
        ExerciceAddComponent,
        ActionAddComponent,
        TachesAddComponent
    ],
    providers: [
        ThemeConstants
    ]
})
export class DashboardModule { }
