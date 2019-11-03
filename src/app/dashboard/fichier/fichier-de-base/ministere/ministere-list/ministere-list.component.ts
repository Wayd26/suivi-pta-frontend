import { Component, OnInit } from '@angular/core';
import { MinistereService } from 'src/app/shared/services/ministere.service';
import { Ministere, ListMinistereResponse, MinistereExport } from 'src/app/models/ministere.model';
import { Router } from '@angular/router';
import {ListSourceFinancementResponse} from '../../../../../models/sourceFi.model';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ministere-list',
  templateUrl: './ministere-list.component.html',
  styleUrls: ['./ministere-list.component.css']
})
export class MinistereListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  Ministeres: Ministere[] = [];
  ministereExport: MinistereExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'denomination', 'sigle', 'bp', 'email', 'telephone', 'site_web', '_departement', '_ville'],
    nullToEmptyString: true,
  };
  constructor(private ministereService: MinistereService, private router: Router,
     private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers',
      columnDefs: [
        { 'width': '20%', 'targets': 0 },

      ]
    };
  //   if (!this.dataService.getMinisteres()) {
  //     this.router.navigate(['/dashboard/fichier/base/ministere/load']);
  // }
    this.Ministeres = this.dataService.getMinisteres();
    this.ministereService.getMinistereList().subscribe((res: ListMinistereResponse) => {
      this.dataService.setMinisteres(res.data);
    }, (error) => {
      this.Ministeres = [];
    }, () => {
    });
    // this.Ministeres.map((m) => {
    //   this.ministereExport.push({
    //     identifiant: m.identifiant,
    //     code: m.code,
    //     denomination: m.denomination,
    //     sigle: m.sigle,
    //     bp: m.sigle,
    //     email: m.email,
    //     telephone: m.telephone,
    //     site_web: m.site_web,
    //     _departement: m._departement,
    //     _ville: m._ville
    //   });
    // });
  }

  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.ministereExport)), 'ministere');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.ministereExport)), 'Ministere');

  }

  onDelete(id) {
    // const response = confirm(DELETE_CONFIRMATION);
    // if (response) {
    //   this.ministereService.deleteMinistere(id).subscribe((res) => {
    //       this.Ministeres = this.Ministeres.filter((action) => {
    //         return action.identifiant !== id;
    //       });
    //       this.router.navigate(['/dashboard/fichier/base/ministere/load']);
    //     }
    //   );
    // }

    swal({
      title: 'Attention !',
      text: 'Etes-vous sûr de vouloir supprimer ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Oui, Supprimer !',
      cancelButtonText: 'Non, Annuler !',
      buttonsStyling: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
    }).then(function() {

        this.ministereService.deleteMinistere(id).subscribe((res) => {
            this.Ministeres = this.Ministeres.filter((action) => {
              return action.identifiant !== id;
            });
            this.router.navigate(['/dashboard/fichier/base/ministere/load']);
          }
        );

      // swal(
      //   'Booyah!'
      // );

    });



    // swal({
    //   title: 'Etes-vous sûr ?',
    //   text: 'Impossible de retourner en arrière une fois effectué',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Oui, Supprimer !',
    //   cancelButtonText: 'Non, Annuler !',
    //   confirmButtonClass: 'btn btn-success',
    //   cancelButtonClass: 'btn btn-danger',
    //   buttonsStyling: false
    // }).then(function () {
    //   swal(
    //     'Supprimé !',
    //     'La suppression a été effectuée avec succès.',
    //     'success'
    //   );
    // }, function (dismiss) {
    //   // dismiss can be 'cancel', 'overlay',
    //   // 'close', and 'timer'
    //   // if (dismiss === 'cancel') {
    //     swal(
    //       'Annulation',
    //       'Suppression annulée',
    //       'error'
    //     );
    // //  }
    // });

  }

}
