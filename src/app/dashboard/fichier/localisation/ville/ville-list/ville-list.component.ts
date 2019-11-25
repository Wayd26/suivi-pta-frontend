import { Component, OnInit } from '@angular/core';
import { Ville, ListVilleResponse, VilleExport } from 'src/app/models/ville.model';
import { VilleService } from 'src/app/shared/services/ville.service';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  villes: Ville[] = [];
  villeExport: VilleExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'denomination', '_departement'],
    nullToEmptyString: true,
  };

  constructor(private villeService: VilleService, private router: Router, private utilService: UtilsService,
    private dataService: DataService, private exportService: ExportAsExelService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers',
      columnDefs: [
        {'width': '20%', 'targets': 0},
        {'width': '20%', 'targets': 1}
      ]
    };
    // if (!this.dataService.getVilles()) {
    //   this.router.navigate(['/dashboard/fichier/localisation/ville/load']);
    // }
    this.villes = this.dataService.getVilles();
    this.villeService.getVilleList().subscribe((res: ListVilleResponse) => {
      this.dataService.setVilles(res.data);
    }, (error) => {
      this.villes = [];
    }, () => {
    });
    this.villes.map((v) => {
      this.villeExport.push( {
        identifiant: v.id,
        code: v.code,
        denomination: v.denomination,
        _departement: v._department
    });
    });
  }

  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.villeExport)), 'ville');
  }

  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.villeExport)), 'Villes');

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



        this.villeService.deleteVille(id).subscribe((res) => {
          this.villes = this.villes.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/fichier/localisation/ville/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });
  }
}
