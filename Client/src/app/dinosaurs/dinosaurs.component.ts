import { Component, OnInit } from '@angular/core';
import { DinosaursService } from '../services/dinosaurs.service';
@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {
  allDinos: Object;

  constructor(private dinos: DinosaursService) { }

  ngOnInit() {
  	this.dinos.getDinos().subscribe(retrievedData => {
  		this.allDinos = (retrievedData as any).dinosaurs;
  	});
  }
}
