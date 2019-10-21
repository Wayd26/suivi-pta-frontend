import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { DashboardComponent } from './dashboard.component';
import { ProgrammeListComponent } from './fichier/fichier-de-base/programme/programme-list/programme-list.component';
import { StructureListComponent } from './fichier/fichier-de-base/structure/structure-list/structure-list.component';
import { ActionListComponent } from './fichier/fichier-de-base/action/action-list/action-list.component';
import { TypeSourceFinancementListComponent } from './fichier/financement/type_source_financement/type-source-financement-list/type-source-financement-list.component';
import { ActiviteListComponent } from './fichier/fichier-de-base/activite/activite-list/activite-list.component';
import { DepartementListComponent } from './fichier/localisation/departement/departement-list/departement-list.component';
import { VilleListComponent } from './fichier/localisation/ville/ville-list/ville-list.component';
import { TachesListComponent } from './fichier/fichier-de-base/taches/taches-list/taches-list.component';
import {StructureAddComponent} from './fichier/fichier-de-base/structure/structure-add/structure-add.component';
import {ProgrammeAddComponent} from './fichier/fichier-de-base/programme/programme-add/programme-add.component';
import {SourceFinancementListComponent} from './fichier/financement/source-financement-list/source-financement-list.component';
import {VilleAddComponent} from './fichier/localisation/ville/ville-add/ville-add.component';
import {DepartementAddComponent} from './fichier/localisation/departement/departement-add/departement-add.component';
import {TypeSourceFinancementAddComponent} from './fichier/financement/type_source_financement/type-source-financement-add/type-source-financement-add.component';
import {SourceFinancementAddComponent} from './fichier/financement/source-financement-add/source-financement-add.component';
import {MinistereAddComponent} from './fichier/fichier-de-base/ministere/ministere-add/ministere-add.component';
import {MinistereListComponent} from './fichier/fichier-de-base/ministere/ministere-list/ministere-list.component';
import { ProgrammeEditComponent } from './fichier/fichier-de-base/programme/programme-edit/programme-edit.component';
import {MinistereEditComponent} from './fichier/fichier-de-base/ministere/ministere-edit/ministere-edit.component';
import {StructureEditComponent} from './fichier/fichier-de-base/structure/structure-edit/structure-edit.component';
import {SourceFinancementEditComponent} from './fichier/financement/source-financement-edit/source-financement-edit.component';
import {TypeSourceFinancementEditComponent} from './fichier/financement/type_source_financement/type-source-financement-edit/type-source-financement-edit.component';
import {VilleEditComponent} from './fichier/localisation/ville/ville-edit/ville-edit.component';
import {DepartementEditComponent} from './fichier/localisation/departement/departement-edit/departement-edit.component';
import {ActionAddComponent} from './fichier/fichier-de-base/action/action-add/action-add.component';
import {TachesAddComponent} from './fichier/fichier-de-base/taches/taches-add/taches-add.component';
import {ObjectifListComponent} from './fichier/fichier-de-base/objectif/objectif-list/objectif-list.component';
import {ObjectifAddComponent} from './fichier/fichier-de-base/objectif/objectif-add/objectif-add.component';
import {ObjectifEditComponent} from './fichier/fichier-de-base/objectif/objectif-edit/objectif-edit.component';
import {ActionEditComponent} from './fichier/fichier-de-base/action/action-edit/action-edit.component';
import {ActiviteAddComponent} from './fichier/fichier-de-base/activite/activite-add/activite-add.component';
import {ActiviteEditComponent} from './fichier/fichier-de-base/activite/activite-edit/activite-edit.component';
import {LoaderComponent} from './fichier/fichier-de-base/programme/loader/loader.component';
import {ActionLoaderComponent} from './fichier/fichier-de-base/action/action-loader/action-loader.component';
import {ObjectifLoaderComponent} from './fichier/fichier-de-base/objectif/objectif-loader/objectif-loader.component';
import {StructureLoaderComponent} from './fichier/fichier-de-base/structure/structure-loader/structure-loader.component';
import {TacheLoaderComponent} from './fichier/fichier-de-base/taches/tache-loader/tache-loader.component';
import {TypeSourceLoaderComponent} from './fichier/financement/type_source_financement/type-source-loader/type-source-loader.component';
import {SourceLoaderComponent} from './fichier/financement/source-loader/source-loader.component';
import {DepartementLoaderComponent} from './fichier/localisation/departement/departement-loader/departement-loader.component';
import {VilleLoaderComponent} from './fichier/localisation/ville/ville-loader/ville-loader.component';
import { MinistereLoaderComponent } from './fichier/fichier-de-base/ministere/ministere-loader/ministere-loader.component';
import {TachesEditComponent} from './fichier/fichier-de-base/taches/taches-edit/taches-edit.component';
import {ActiviteLoaderComponent} from './fichier/fichier-de-base/activite/activite-loader/activite-loader.component';
import {ProgrammeImportComponent} from './fichier/fichier-de-base/programme/programme-import/programme-import.component';
import {ObjectifImportComponent} from './fichier/fichier-de-base/objectif/objectif-import/objectif-import.component';
import {StructureImportComponent} from './fichier/fichier-de-base/structure/structure-import/structure-import.component';
import {ExerciceAddComponent} from './Paramètres/exercice/exercice-add/exercice-add.component';
import {ExerciceListComponent} from './Paramètres/exercice/exercice-list/exercice-list.component';
import {ExerciceEditComponent} from './Paramètres/exercice/exercice-edit/exercice-edit.component';
import {ExerciceLoaderComponent} from './Paramètres/exercice/exercice-loader/exercice-loader.component';
import {MinistereImportComponent} from './fichier/fichier-de-base/ministere/ministere-import/ministere-import.component';
import {ActionImportComponent} from './fichier/fichier-de-base/action/action-import/action-import.component';
import {ActiviteImportComponent} from './fichier/fichier-de-base/activite/activite-import/activite-import.component';
import {TacheImportComponent} from './fichier/fichier-de-base/taches/tache-import/tache-import.component';
import {DepartementImportComponent} from './fichier/localisation/departement/departement-import/departement-import.component';
import {VilleImportComponent} from './fichier/localisation/ville/ville-import/ville-import.component';
import {TypeSourceImportComponent} from './fichier/financement/type_source_financement/type-source-import/type-source-import.component';
import {SourceImportComponent} from './fichier/financement/source-import/source-import.component';
import {IndicateurActiviteComponent} from './statistique/liste/indicateur-activite/indicateur-activite.component';
import {ActiviteLocalisationComponent} from './statistique/liste/activite-localisation/activite-localisation.component';
import {TacheParPeriodeComponent} from './statistique/liste/tache-par-periode/tache-par-periode.component';
import {SyntheseComponent} from './statistique/rapport/synthese/synthese.component';
import {TepActionComponent} from './statistique/divers/tep-action/tep-action.component';
import {TepProgrammeComponent} from './statistique/divers/tep-programme/tep-programme.component';
import {TepProjetComponent} from './statistique/divers/tep-projet/tep-projet.component';
import {TepPtaComponent} from './statistique/divers/tep-pta/tep-pta.component';
import {TepPipComponent} from './statistique/divers/tep-pip/tep-pip.component';
import {ResultatEditComponent} from './fichier/fichier-de-base/resultat/resultat-edit/resultat-edit.component';
import {ResultatLoaderComponent} from './fichier/fichier-de-base/resultat/resultat-loader/resultat-loader.component';
import {ResultatAddComponent} from './fichier/fichier-de-base/resultat/resultat-add/resultat-add.component';
import {ResultatListComponent} from './fichier/fichier-de-base/resultat/resultat-list/resultat-list.component';
import {ProgrammationDesTachesEditComponent} from './traitement/programmation_des_taches/programmation-des-taches-edit/programmation-des-taches-edit.component';
import {ProgrammationDesTachesLoaderComponent} from './traitement/programmation_des_taches/programmation-des-taches-loader/programmation-des-taches-loader.component';
import {ProgrammationDesTachesListComponent} from './traitement/programmation_des_taches/programmation-des-taches-list/programmation-des-taches-list.component';
import {ProgrammationDesTachesAddComponent} from './traitement/programmation_des_taches/programmation-des-taches-add/programmation-des-taches-add.component';
import {SuiviPtaLoaderComponent} from './traitement/suivi_pta/suivi-pta-loader/suivi-pta-loader.component';
import {SuiviPtaEditComponent} from './traitement/suivi_pta/suivi-pta-edit/suivi-pta-edit.component';
import {SuiviPtaListComponent} from './traitement/suivi_pta/suivi-pta-list/suivi-pta-list.component';
import {IndicateursRealisesLoaderComponent} from './traitement/indicateurs_realises/indicateurs-realises-loader/indicateurs-realises-loader.component';
import {IndicateursRealisesListComponent} from './traitement/indicateurs_realises/indicateurs-realises-list/indicateurs-realises-list.component';
import {IndicateursRealisesEditComponent} from './traitement/indicateurs_realises/indicateurs-realises-edit/indicateurs-realises-edit.component';
import {SousActionListComponent} from './fichier/fichier-de-base/sous-action/sous-action-list/sous-action-list.component';
import {SousActionLoaderComponent} from './fichier/fichier-de-base/sous-action/sous-action-loader/sous-action-loader.component';
import {SousActionAddComponent} from './fichier/fichier-de-base/sous-action/sous-action-add/sous-action-add.component';
import {SousActionEditComponent} from './fichier/fichier-de-base/sous-action/sous-action-edit/sous-action-edit.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
           title: 'Dashboard'
        }
    },
    {
      path: 'fichier/base/programme',
      component: ProgrammeListComponent,
      data: {
         title: 'Dashboard'
      }
  },
    {
      path: 'fichier/base/programme/load',
      component: LoaderComponent,
      data: {
         title: 'Dashboard'
      }
  },
    {
      path: 'fichier/base/programme/add',
      component: ProgrammeAddComponent,
      data: {
         title: 'Dashboard'
      }
  },
    {
      path: 'fichier/base/programme/import',
      component: ProgrammeImportComponent,
      data: {
         title: 'Dashboard'
      }
  },
  {
    path: 'fichier/base/programme/edit/:id',
    component: ProgrammeEditComponent,
    data: {
       title: 'Dashboard'
    }
},
  {
    path: 'fichier/base/structures',
    component: StructureListComponent,
    data: {
       title: 'Dashboard'
    }
},
  {
    path: 'fichier/base/structures/add',
    component: StructureAddComponent,
    data: {
       title: 'Dashboard'
    }
},
  {
    path: 'fichier/base/structures/import',
    component: StructureImportComponent,
    data: {
       title: 'Dashboard'
    }
},
  {
    path: 'fichier/base/structures/edit/:id',
    component: StructureEditComponent,
    data: {
       title: 'Dashboard'
    }
},
{
  path: 'fichier/base/action',
  component: ActionListComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/base/action/load',
  component: ActionLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
  {
    path: 'fichier/base/action/add',
    component: ActionAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/action/edit/:id',
    component: ActionEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
{
  path: 'fichier/base/activite',
  component: ActiviteListComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/base/activite/load',
  component: ActiviteLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
  {
    path: 'fichier/base/activite/add',
    component: ActiviteAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/activite/import',
    component: ActiviteImportComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/activite/edit/:id',
    component: ActiviteEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
{
  path: 'fichier/base/tache',
  component: TachesListComponent,
  data: {
     title: 'Dashboard'
  }
},
  {
    path: 'fichier/base/tache/add',
    component: TachesAddComponent,
    data: {
      title: 'Dashboard'
    }
    },
  {
    path: 'fichier/base/tache/import',
    component: TacheImportComponent,
    data: {
      title: 'Dashboard'
    }
    },
  {
    path: 'fichier/base/tache/edit/:id',
    component: TachesEditComponent,
    data: {
      title: 'Dashboard'
    }
  },

  {
  path: 'fichier/base/tache/load',
  component: TacheLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/departement',
  component: DepartementListComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/departement/load',
  component: DepartementLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/departement/import',
  component: DepartementImportComponent,
  data: {
     title: 'Dashboard'
  }
},
  {
  path: 'fichier/localisation/departement/add',
  component: DepartementAddComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/departement/edit/:id',
  component: DepartementEditComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/ville',
  component: VilleListComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/ville/load',
  component: VilleLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/localisation/ville/import',
  component: VilleImportComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/financement/type/source',
  component: TypeSourceFinancementListComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/financement/type/source/load',
  component: TypeSourceLoaderComponent,
  data: {
     title: 'Dashboard'
  }
},
{
  path: 'fichier/financement/type/source/import',
  component: TypeSourceImportComponent,
  data: {
     title: 'Dashboard'
  }
},

  {
    path: 'fichier/financement/source',
    component: SourceFinancementListComponent,
    data: {
      title: 'Dashboard'
    }
  },

  {
    path: 'fichier/financement/source/load',
    component: SourceLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },

  {
    path: 'fichier/financement/source/import',
    component: SourceImportComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/ville/add',
    component: VilleAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/departement/add',
    component: DepartementAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/financement/type/source/add',
    component: TypeSourceFinancementAddComponent,
    data: {
      title: 'Dashboard'
    }
  },

  {
    path: 'fichier/financement/source/add',
    component: SourceFinancementAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/ministere',
    component: MinistereListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/ministere/load',
    component: MinistereLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/ministere/import',
    component: MinistereImportComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/ministere/add',
    component: MinistereAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/ministere/edit/:id',
    component: MinistereEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/structures/edit/:id',
    component: StructureEditComponent,
    data: {
      title: 'Dashboard'
    }
    },
  {
    path: 'fichier/base/structures/load',
    component: StructureLoaderComponent,
    data: {
      title: 'Dashboard'
    }
    },

  {
    path: 'fichier/financement/source/edit/:id',
    component: SourceFinancementEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/financement/type/source/edit/:id',
    component: TypeSourceFinancementEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/ville/edit/:id',
    component: VilleEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/departement/edit/:id',
    component: DepartementEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/action/add',
    component: ActionAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/action/import',
    component: ActionImportComponent,
    data: {
      title: 'Dashboard'
    }
  }
  ,
  {
    path: 'fichier/base/tache/add',
    component: TachesAddComponent,
    data: {
      title: 'Dashboard'
    }
  } ,
  {
    path: 'fichier/base/objectif',
    component: ObjectifListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/objectif/load',
    component: ObjectifLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/objectif/import',
    component: ObjectifImportComponent,
    data: {
      title: 'Dashboard'
    }
  } ,
  {
    path: 'fichier/base/objectif/add',
    component: ObjectifAddComponent,
    data: {
      title: 'Dashboard'
    }
  } ,
  {
    path: 'fichier/base/objectif/edit/:id',
    component: ObjectifEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/programmation_des_taches/load',
    component: ProgrammationDesTachesLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/programmation_des_taches',
    component: ProgrammationDesTachesListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/programmation_des_taches/add',
    component: ProgrammationDesTachesAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/programmation_des_taches/edit/:id',
    component: ProgrammationDesTachesEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/suivi_pta/load',
    component: SuiviPtaLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/suivi_pta/edit/:id',
    component: SuiviPtaEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/suivi_pta',
    component: SuiviPtaListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/indicateurs_realises/load',
    component: IndicateursRealisesLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/indicateurs_realises/edit/:id',
    component: IndicateursRealisesEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'traitement/indicateurs_realises',
    component: IndicateursRealisesListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'parametres/exercice',
    component: ExerciceListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'parametres/exercice/add',
    component: ExerciceAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'parametres/exercice/edit/:id',
    component: ExerciceEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'parametres/exercice/load',
    component: ExerciceLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/list/indicateur/activite',
    component: IndicateurActiviteComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/list/activite/localisation',
    component: ActiviteLocalisationComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/list/pta/structure',
    component: TacheParPeriodeComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/rapport/synthese',
    component: SyntheseComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/diver/tep/action',
    component: TepActionComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/diver/tep/programme',
    component: TepProgrammeComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/diver/tep/projet',
    component: TepProjetComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/diver/tep/pta',
    component: TepPtaComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'statistique/diver/tep/pip',
    component: TepPipComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/resultat/load',
    component: ResultatLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/resultat/add',
    component: ResultatAddComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/resultat/edit/:id',
    component: ResultatEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/resultat',
    component:  ResultatListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/sous_action',
    component: SousActionListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/sous_action/load',
    component: SousActionLoaderComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/base/sous_action/add',
    component: SousActionAddComponent,
    data: {
      title: 'Dashboard'
    }
  } ,
  {
    path: 'fichier/base/sous_action/edit/:id',
    component: SousActionEditComponent,
    data: {
      title: 'Dashboard'
    }
  }


];

