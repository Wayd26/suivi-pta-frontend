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
      path: 'fichier/base/programme/add',
      component: ProgrammeAddComponent,
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
  path: 'fichier/base/activite',
  component: ActiviteListComponent,
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
  path: 'fichier/localisation/departement',
  component: DepartementListComponent,
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
  path: 'fichier/financement/type/source',
  component: TypeSourceFinancementListComponent,
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
    path: 'fichier/base/structures/edit',
    component: StructureEditComponent,
    data: {
      title: 'Dashboard'
    }
    },

  {
    path: 'fichier/financement/source/edit',
    component: SourceFinancementEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/financement/type/source/edit',
    component: TypeSourceFinancementEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/ville/edit',
    component: VilleEditComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'fichier/localisation/departement/edit',
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
  }
];

