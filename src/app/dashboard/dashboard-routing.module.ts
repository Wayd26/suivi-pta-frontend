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
  }
];

