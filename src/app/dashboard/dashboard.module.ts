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
import { ActionAddComponent } from './fichier/fichier-de-base/action/action-add/action-add.component';
import {TachesAddComponent} from './fichier/fichier-de-base/taches/taches-add/taches-add.component';
import { ActionEditComponent } from './fichier/fichier-de-base/action/action-edit/action-edit.component';
import { ActiviteAddComponent } from './fichier/fichier-de-base/activite/activite-add/activite-add.component';
import {ActiviteEditComponent} from './fichier/fichier-de-base/activite/activite-edit/activite-edit.component';
import { LoaderComponent } from './fichier/fichier-de-base/programme/loader/loader.component';
import { ActionLoaderComponent } from './fichier/fichier-de-base/action/action-loader/action-loader.component';
import { ActiviteLoaderComponent } from './fichier/fichier-de-base/activite/activite-loader/activite-loader.component';
import { MinistereLoaderComponent } from './fichier/fichier-de-base/ministere/ministere-loader/ministere-loader.component';
import { ObjectifLoaderComponent } from './fichier/fichier-de-base/objectif/objectif-loader/objectif-loader.component';
import { StructureLoaderComponent } from './fichier/fichier-de-base/structure/structure-loader/structure-loader.component';
import { TacheLoaderComponent } from './fichier/fichier-de-base/taches/tache-loader/tache-loader.component';
import { TypeSourceLoaderComponent } from './fichier/financement/type_source_financement/type-source-loader/type-source-loader.component';
import { SourceLoaderComponent } from './fichier/financement/source-loader/source-loader.component';
import { DepartementLoaderComponent } from './fichier/localisation/departement/departement-loader/departement-loader.component';
import { VilleLoaderComponent } from './fichier/localisation/ville/ville-loader/ville-loader.component';
import { TachesEditComponent } from './fichier/fichier-de-base/taches/taches-edit/taches-edit.component';
import {ArchwizardModule} from 'angular-archwizard';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { ProgrammeImportComponent } from './fichier/fichier-de-base/programme/programme-import/programme-import.component';
import { ObjectifImportComponent } from './fichier/fichier-de-base/objectif/objectif-import/objectif-import.component';
import { StructureImportComponent } from './fichier/fichier-de-base/structure/structure-import/structure-import.component';
import { ExerciceLoaderComponent } from './Paramètres/exercice/exercice-loader/exercice-loader.component';
import { ExerciceAddComponent} from './Paramètres/exercice/exercice-add/exercice-add.component';
import { ExerciceEditComponent} from './Paramètres/exercice/exercice-edit/exercice-edit.component';
import { ExerciceListComponent} from './Paramètres/exercice/exercice-list/exercice-list.component';
import { MinistereImportComponent } from './fichier/fichier-de-base/ministere/ministere-import/ministere-import.component';
import { ActionImportComponent } from './fichier/fichier-de-base/action/action-import/action-import.component';
import { ActiviteImportComponent } from './fichier/fichier-de-base/activite/activite-import/activite-import.component';
import { TacheImportComponent } from './fichier/fichier-de-base/taches/tache-import/tache-import.component';
import { DepartementImportComponent } from './fichier/localisation/departement/departement-import/departement-import.component';
import { VilleImportComponent } from './fichier/localisation/ville/ville-import/ville-import.component';
import { TypeSourceImportComponent } from './fichier/financement/type_source_financement/type-source-import/type-source-import.component';
import { SourceImportComponent } from './fichier/financement/source-import/source-import.component';
import {IndicateurActiviteComponent} from './statistique/liste/indicateur-activite/indicateur-activite.component';
import { ActiviteLocalisationComponent } from './statistique/liste/activite-localisation/activite-localisation.component';
import { TacheParPeriodeComponent } from './statistique/liste/tache-par-periode/tache-par-periode.component';
import { SyntheseComponent } from './statistique/rapport/synthese/synthese.component';
import { TepActionComponent } from './statistique/divers/tep-action/tep-action.component';
import { TepProgrammeComponent } from './statistique/divers/tep-programme/tep-programme.component';
import { TepProjetComponent } from './statistique/divers/tep-projet/tep-projet.component';
import { TepPtaComponent } from './statistique/divers/tep-pta/tep-pta.component';
import { TepPipComponent } from './statistique/divers/tep-pip/tep-pip.component';
import { ResultatLoaderComponent } from './fichier/fichier-de-base/resultat/resultat-loader/resultat-loader.component';
import { ResultatListComponent } from './fichier/fichier-de-base/resultat/resultat-list/resultat-list.component';
import { ResultatAddComponent } from './fichier/fichier-de-base/resultat/resultat-add/resultat-add.component';
import { ResultatEditComponent } from './fichier/fichier-de-base/resultat/resultat-edit/resultat-edit.component';
import {ProgrammationDesTachesListComponent} from './traitement/programmation_des_taches/programmation-des-taches-list/programmation-des-taches-list.component';
import {IndicateursRealisesListComponent} from './traitement/indicateurs_realises/indicateurs-realises-list/indicateurs-realises-list.component';
import {ProgrammationDesTachesLoaderComponent} from './traitement/programmation_des_taches/programmation-des-taches-loader/programmation-des-taches-loader.component';
import {IndicateursRealisesEditComponent} from './traitement/indicateurs_realises/indicateurs-realises-edit/indicateurs-realises-edit.component';
import {ProgrammationDesTachesEditComponent} from './traitement/programmation_des_taches/programmation-des-taches-edit/programmation-des-taches-edit.component';
import {IndicateursRealisesLoaderComponent} from './traitement/indicateurs_realises/indicateurs-realises-loader/indicateurs-realises-loader.component';
import {SuiviPtaEditComponent} from './traitement/suivi_pta/suivi-pta-edit/suivi-pta-edit.component';
import {SuiviPtaListComponent} from './traitement/suivi_pta/suivi-pta-list/suivi-pta-list.component';
import {SuiviPtaLoaderComponent} from './traitement/suivi_pta/suivi-pta-loader/suivi-pta-loader.component';
import {ProgrammationDesTachesAddComponent} from './traitement/programmation_des_taches/programmation-des-taches-add/programmation-des-taches-add.component';
import {AgGridModule} from 'ag-grid-angular';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { SousActionListComponent } from './fichier/fichier-de-base/sous-action/sous-action-list/sous-action-list.component';
import { SousActionAddComponent } from './fichier/fichier-de-base/sous-action/sous-action-add/sous-action-add.component';
import { SousActionEditComponent } from './fichier/fichier-de-base/sous-action/sous-action-edit/sous-action-edit.component';
import { SousActionLoaderComponent } from './fichier/fichier-de-base/sous-action/sous-action-loader/sous-action-loader.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes),
    DataTablesModule,
    CommonModule,
    NgSelectizeModule,
    FormsModule,
    ArchwizardModule,
    NgbDatepickerModule,
    AgGridModule,
    Ng2SmartTableModule

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
        TachesAddComponent,
        ActionEditComponent,
        ActiviteAddComponent,
        ActiviteEditComponent,
        LoaderComponent,
        ActionLoaderComponent,
        ActiviteLoaderComponent,
        MinistereLoaderComponent,
        ObjectifLoaderComponent,
        StructureLoaderComponent,
        TacheLoaderComponent,
        TypeSourceLoaderComponent,
        SourceLoaderComponent,
        DepartementLoaderComponent,
        VilleLoaderComponent,
        TachesEditComponent,
        ProgrammeImportComponent,
        ObjectifImportComponent,
        StructureImportComponent,
        TachesEditComponent,
        ProgrammationDesTachesListComponent,
        ProgrammationDesTachesAddComponent,
        SuiviPtaLoaderComponent,
        SuiviPtaListComponent,
        SuiviPtaEditComponent,
        IndicateursRealisesLoaderComponent,
        IndicateursRealisesListComponent,
        IndicateursRealisesEditComponent,
        ProgrammationDesTachesEditComponent,
        ProgrammationDesTachesLoaderComponent,
        ExerciceLoaderComponent,
        IndicateursRealisesEditComponent,
        MinistereImportComponent,
        ActionImportComponent,
        ActiviteImportComponent,
        TacheImportComponent,
        DepartementImportComponent,
        VilleImportComponent,
        TypeSourceImportComponent,
        SourceImportComponent,
        IndicateurActiviteComponent,
        ActiviteLocalisationComponent,
        TacheParPeriodeComponent,
        SyntheseComponent,
        TepActionComponent,
        TepProgrammeComponent,
        TepProjetComponent,
        TepPtaComponent,
        TepPipComponent,
        ResultatLoaderComponent,
        ResultatListComponent,
        ResultatAddComponent,
        ResultatEditComponent,
        SousActionListComponent,
        SousActionAddComponent,
        SousActionEditComponent,
        SousActionLoaderComponent
    ],
    providers: [
        ThemeConstants
    ]
})
export class DashboardModule { }
