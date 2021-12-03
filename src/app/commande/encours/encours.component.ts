import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
} from "primeng/api";
import { Table } from "primeng/table";
import { appconstants } from "../../appconstants";

import { CommandeService } from "../commande.service";

import { NgxPermissionsService } from "ngx-permissions";
import { EMPTY } from "rxjs";
import { DatePipe } from "@angular/common";
import { isNgTemplate } from "@angular/compiler";
import { map } from "rxjs/operators";
//import { NgxSpinnerService } from "ngx-spinner";
import { Observable, forkJoin } from "rxjs";

@Component({
  selector: "app-encours",
  templateUrl: "./encours.component.html",
  styleUrls: ["./encours.component.css"],
  providers: [MessageService, ConfirmationService, DatePipe],
})
export class EncoursComponent implements OnInit {

  commandes: any[] = [];



  totalRecords: number;


  //userId: Agent = JSON.parse(localStorage.getItem("id"));

  constructor(

    private commandeService: CommandeService,

    public datepipe: DatePipe //  private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.commandeService.getAllCommandesEnCours().subscribe((res) => {
        this.commandes = res['data'];
      });
    }, 1);
  }






}
