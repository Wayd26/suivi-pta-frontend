import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../../../../shared/services/ville.service';
import {UtilsService} from '../../../../../shared/services/utils.service';
import {StructureService} from '../../../../../shared/services/structure.service';
import {Router} from '@angular/router';
import {ListVilleResponse, Ville} from '../../../../../models/ville.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-structure-import',
  templateUrl: './structure-import.component.html',
  styleUrls: ['./structure-import.component.css']
})
export class StructureImportComponent implements OnInit {
  villes: Ville[];
  arrayBuffer: any;
  file: File;
  message: String = '';
  dataNumber = 0;
  constructor(private villeService: VilleService, private utilService: UtilsService, private structureService: StructureService,
              private router: Router) { }

  ngOnInit() {
    this.villeService.getVilleList()
      .subscribe((res: ListVilleResponse) => {
        this.villes = res.data;
      });
  }

  getVilleId(libelle) {
    console.log(libelle);
    const vil = this.villes.find((e) => {
      return e.denomination === libelle;
    });
    console.log(vil);
    return vil !== undefined ? vil.identifiant : 0;
  }
  incomingfile($event) {
    console.log(this.villes);
    this.file = $event.target.files[0];
  }

  Upload() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      // tslint:disable-next-line:triple-equals
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      const info = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      info.map((i) => {
          this.dataNumber += 1;
          this.structureService.createStructure(i['denomination'], i['email'], i['telephone'], +this.getVilleId(i['_ville']) , i['sigle'], i['boite_postal'])
            .subscribe((resp) => {
              console.log(resp);

            } , (error) => {
              console.log(error);
              this.message = 'Echec de l\'operation';
              //this.router.navigate(['/dashboard/fichier/base/programmes/import']);
            });
          console.log(this.dataNumber + '===' + info.length);
          if (this.dataNumber === info.length) {
            this.router.navigate(['/dashboard/fichier/base/objectif/load']);
          }
        }
      );
      console.log(info[0]['identifiant']);
    };
    fileReader.readAsArrayBuffer(this.file);

  }

}
