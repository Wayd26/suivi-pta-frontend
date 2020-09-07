import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../../../../shared/services/action.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {TacheService} from '../../../../../shared/services/tache.service';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-taches-add',
  templateUrl: './taches-add.component.html',
  styleUrls: ['./taches-add.component.css']
})
export class TachesAddComponent implements OnInit {

  message: string;
  constructor(private tacheService: TacheService, private router: Router, private utils: UtilsService) { }

  ngOnInit() {
    this.message = '';
  }
  onSubmit(form: NgForm) {
    this.tacheService.createTache(form.value['code_tache'], form.value['libelle_tache'])
      .subscribe((resp) => {
        this.utils.notifAjout_OK();
        this.router.navigate(['/dashboard/fichier/base/tache/load']);
      } , (error: ErrorResponse) => {
        console.log(error);
        console.log(error.error['error']);
        this.utils.notifAjout_Error();
        this.router.navigate(['/dashboard/fichier/base/tache/add']);
      });
  }
}
