import {Component, Input, OnInit} from '@angular/core';
import {DisgenetAPIService} from '@app/services/disgenet-api.service';

@Component({
  selector: 'app-gene-result',
  templateUrl: './gene-result.component.html',
  styleUrls: ['./gene-result.component.scss']
})
export class GeneResultComponent implements OnInit {

  @Input() data: object[];
  constructor(private disgenetAPIService: DisgenetAPIService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  getData(query: string): any{
    console.log(query);
    this.disgenetAPIService.sendGetRequest(query).subscribe(data => {
      console.log(this.data);
    });
  }
  getGenDiseases(uniprot: string): any{
    const query = 'gda/gene/uniprot/' + uniprot + '?limit=20';
    this.getData(query);
  }
  getGenVariants(symbol: string): any{
    const query = 'variant/gene/' + symbol + '?limit=20';
    this.getData(query);
  }

}
