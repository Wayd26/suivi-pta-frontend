import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {Ville, VilleResponse} from '../../../../../models/ville.model';
import {NgForm} from '@angular/forms';
import {DepartementService} from '../../../../../shared/services/departement.service';
import {ListDepartementResponse} from '../../../../../models/departement.model';

@Component({
  selector: 'app-ville-edit',
  templateUrl: './ville-edit.component.html',
  styleUrls: ['./ville-edit.component.css']
})
export class VilleEditComponent implements OnInit {
  singleSelectOptions: any = [];
  message: string;
  ville: Ville;

  singleSelectConfig: any = {
    labelField: 'label',
    valueField: 'value',
    searchField: ['label']
  };
  id: number;

  singleSelectValue: string[] = [];
  constructor(private villeService: VilleService , private router: Router, private departementService: DepartementService, private utilService: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.id = +this.route.snapshot.params['id'];
    this.villeService.getVille(+this.route.snapshot.params['id']).subscribe((res: VilleResponse) => {
      this.ville = res.data;

      // this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'departement')];
      console.log(res.data);

      this.singleSelectValue = [this.utilService.getIdData(res.data.links, 'department')];
      console.log('Info Rech ' + this.singleSelectValue);
    });


    this.departementService.getDepartementList()
      .subscribe((res: ListDepartementResponse) => {
        res.data.map((dep) => {
          this.singleSelectOptions.push({
            label: dep.denomination,
            value: dep.id.toString(),
            code: dep.code
          });
        });
      });
  }
  onSubmit(form: NgForm) {
    this.villeService.update(form.value['code_ville'], form.value['nom_ville'], +this.singleSelectValue, this.id)
      .subscribe((resp) => {
        this.utilService.notifModif_OK();
        this.router.navigate(['/dashboard/fichier/localisation/ville/load']);
      } , (error) => {
        console.log(error);
        this.utilService.notifModif_Error();
        this.router.navigate(['/dashboard/fichier/localisation/ville/edit/' + this.id]);
      });
  }
}
