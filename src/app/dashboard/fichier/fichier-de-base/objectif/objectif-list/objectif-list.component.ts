import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListObjectifResponse, ObjectifModel, ObjectifModelExport} from '../../../../../models/objectif.model';
import {ObjectifService} from '../../../../../shared/services/objectif.service';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css']
})
export class ObjectifListComponent implements OnInit {
  Objectifs: ObjectifModel[] = [];
  dtOptions: DataTables.Settings = {};
  objectifExport: ObjectifModelExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'libelle', '_programme'],
    nullToEmptyString: true,
  };

  constructor(private objectifService: ObjectifService, private router: Router, private utilService: UtilsService,
     private dataService: DataService, private exportService: ExportAsExelService) { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY: '380',
      pagingType: 'full_numbers'
    };
  //   if (!this.dataService.getObjectifs()) {
  //     this.router.navigate(['/dashboard/fichier/base/objectif/load']);
  // }
    this.Objectifs = this.dataService.getObjectifs();
    this.objectifService.getObjectifList().subscribe((res: ListObjectifResponse) => {
      this.dataService.setObjectifs(res.data);
    }, (error) => {
      this.Objectifs = [];
    }, () => {
    });
    this.Objectifs.map((o) => {
      this.objectifExport.push({
        identifiant: o.id,
        code: o.code,
        libelle: o.denomination,
        _programme: o._programm
      });
    });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.objectifExport)), 'objectif');
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.objectifExport)), 'Objectif');

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
        this.objectifService.deleteObjectif(id).subscribe((res) => {
          this.Objectifs = this.Objectifs.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/fichier/base/objectif/load']);

      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });

  }

}
