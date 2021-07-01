import { Component, OnInit } from '@angular/core';
import {DisgenetAPIService} from '@app/services/disgenet-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {searchTerms} from '@models/data';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.scss']
})
export class GeneComponent implements OnInit {
  geneForm: FormGroup;
  private submitted: boolean;
  commonSearchs = searchTerms;
  dbInfo = {};
  typesSearch = [{text: 'Gen', id: 1}, {text: 'Variante', id: 2}, {text: 'Enfermedad', id: 3}];
  typesSearchSelected: number;
  disGenetInfo: any;

  constructor(private disgenetAPIService: DisgenetAPIService,
              private fb: FormBuilder) {
    this.geneForm = this.fb.group({
      type: [undefined, [Validators.required]],
      searchTerm: [undefined, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getData(0, 'version');
  }
  get search(): any { return this.geneForm.controls; }
  getData(type: number, query: string): any{
    this.typesSearchSelected = type;
    this.disgenetAPIService.sendGetRequest(query).subscribe(data => {
      if (type === 0){
        this.dbInfo = data;
      }
      if ([1, 2, 3].includes(type)){
        this.disGenetInfo = data;
      }
      console.log(this.disGenetInfo);
    });
  }
  onSubmit(): any {
    this.submitted = true;
    const typesSearchSelected = this.geneForm.value.type;
    const searchTerm = this.geneForm.value.searchTerm;
    if (this.geneForm.invalid) {
      return;
    }
    let query = '';
    if (typesSearchSelected === 1) { query = 'gene/' + searchTerm; }
    if (typesSearchSelected === 2) { query = 'variant/' + searchTerm; }
    if (typesSearchSelected === 3) { query = 'disease/' + searchTerm; }
    // return;
    this.getData(typesSearchSelected, query);
  }

}
