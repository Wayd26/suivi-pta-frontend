import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Programme, ListProgrammeResponse, ProgrammeExport } from 'src/app/models/programme.model';
import { Router } from '@angular/router';
import {DataService} from '../../../../../shared/services/data.service';
import {DELETE_CONFIRMATION} from '../../../../../constants/urlConstants';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ExportAsExelService} from '../../../../../shared/services/export-as-exel.service';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import swal from 'sweetalert2';
import {UtilsService} from '../../../../../shared/services/utils.service';


@Component({
  selector: 'app-programme-list',
  templateUrl: './programme-list.component.html',
  styleUrls: ['./programme-list.component.css']
})
export class ProgrammeListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  programmes: Programme[] = [];
  exportAsConfig: ExportAsConfig = {
    type: 'csv', // the type you want to download
    elementId: 'programmeTable', // the id of html/table element
  };
  programmeExport: ProgrammeExport[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: true,
    headers: ['identifiant', 'code', 'libelle', 'poids', '_exercice', '_ministere'],
    nullToEmptyString: true,
  };
  constructor(private programmeService: ProgrammeService, private router: Router, private utilService: UtilsService,
     private dataService: DataService, private exportService: ExportAsExelService, private exportAsService: ExportAsService) { }

  ngOnInit(): void {
      this.dtOptions = {
          scrollY: '380',
          pagingType: 'full_numbers',
          columnDefs: [
            { 'width': '20%', 'targets': 0 },

          ]
      };
    //   if (!this.dataService.getProgrammes()) {
    //     this.router.navigate(['/dashboard/fichier/base/programme/load']);
    // }
    this.programmes = this.dataService.getProgrammes();

      this.programmeService.getProgrammeList().subscribe((res: ListProgrammeResponse) => {
       this.dataService.setProgrammes(res.data) ;
       this.programmes.map((p) => {
         console.log(JSON.parse(JSON.stringify(p)));
       });
      }, (error) => {}, () => {
    });
      console.log(this.dataService.getProgrammes());
      this.programmes.map((p) => {
        this.programmeExport.push({
          identifiant: p.id,
          code: p.code,
          libelle: p.denomination,
          poids: p.weight_in_programm,
          _exercice: p._exercise,
          _ministere: p._ministry
        });
      });
  }
  execelExport() {
    this.exportService.exportAsExcelFile(JSON.parse(JSON.stringify(this.programmeExport)), 'programmes');
  }
  pdfExport() {
    this.exportAsService.save(this.exportAsConfig, 'Programmes').subscribe(() => {
      // save started
    });
  }
  csvExport() {
    return new Angular5Csv(JSON.parse(JSON.stringify(this.programmeExport)), 'Programme');

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
        this.programmeService.deleteProgramme(id).subscribe((res) => {
          this.programmes = this.programmes.filter((action) => {
            return action.id !== id;
          });
          swal('Suppression !', 'Opération effectuée', 'success');

        }, ( error: ErrorResponse) => {
          this.utilService.notifSupprImpo();

          console.log(error.error['error']);
        });

        this.router.navigate(['/dashboard/fichier/base/programme/load']);


      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Annulé !', '', 'warning');
      }
    });
  }

}
