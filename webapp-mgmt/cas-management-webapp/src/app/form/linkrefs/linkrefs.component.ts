import {Component, OnInit, Input} from '@angular/core';
import {Messages} from "../../messages";
import {AbstractRegisteredService} from "../../../domain/registered-service";
import {Data} from "../data";

@Component({
  selector: 'app-linkrefs',
  templateUrl: './linkrefs.component.html'
})
export class LinkrefsComponent implements OnInit {

  service: AbstractRegisteredService;

  constructor(public messages: Messages,
              private data: Data) {
    this.service = data.service;
  }

  ngOnInit() {
  }

}
