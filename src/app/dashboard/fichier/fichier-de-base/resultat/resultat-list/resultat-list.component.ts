import { Component, OnInit } from '@angular/core';
import {ListObjectifResponse, ObjectifModel} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ListeResultatResponse, Resultat} from '../../../../../models/resultat.model';
import {ResultatService} from '../../../../../shared/services/resultat.service';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';


@Component({
  selector: 'app-resultat-list',
  templateUrl: './resultat-list.component.html',
  styleUrls: ['./resultat-list.component.css']
})
export class ResultatListComponent implements OnInit {

  Resultats: Resultat[];
  dtOptions: DataTables.Settings = {};

  constructor(private resultatService: ResultatService, private utilService: UtilsService, private router: Router, private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers'
    };
    // if (!this.dataService.getResultats()) {
    //   this.router.navigate(['/dashboard/fichier/base/resultat/load']);
    // }
    this.Resultats = this.dataService.getResultats();
    this.resultatService.getResultatList().subscribe((res: ListeResultatResponse) => {
      this.dataService.setResultats(res.data);
    }, (error) => {
      this.Resultats = [];
    }, () => {
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.Resultats)), 'resultat');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.Resultats)), 'Resultat');

  }

  onDelete(id) {

    swal({
      title: 'Attention !',
      text: 'Etes-vous sûr de vouloir effectuer cette suppression ? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer !',
      cancelButtonText: 'Non, Annuler !',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {



        this.resultatService.deleteResultat(id).subscribe((res) => {
          this.Resultats = this.Resultats.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/fichier/base/resultat/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });

  }

}
