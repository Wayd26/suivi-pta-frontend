import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ActionService} from '../../../../../shared/services/action.service';

@Component({
  selector: 'app-action-add',
  templateUrl: './action-add.component.html',
  styleUrls: ['./action-add.component.css']
})
export class ActionAddComponent implements OnInit {

  message: string;
  constructor(private actionService: ActionService, private router: Router) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.actionService.createAction(form.value['libelle_action'], form.value['poids_action'], form.value['resultat_action'])
      .subscribe((resp) => {
        this.router.navigate(['/dashboard/fichier/base/action']);
      } , (error) => {
        this.message = 'Echec de l\'operation';
        this.router.navigate(['/dashboard/fichier/base/action/add']);
      });
  }
}
