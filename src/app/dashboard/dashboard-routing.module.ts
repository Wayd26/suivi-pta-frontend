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
  }
];

