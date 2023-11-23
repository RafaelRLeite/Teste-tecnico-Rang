import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';
import { ModalCriarMedicoComponent } from '../modal/modal-criar-medico/modal-criar-medico.component';
import { ModalUpdateMedicoComponent } from '../modal/modal-update-medico/modal-update-medico.component';
import { ModalExcluirMedicoComponent } from '../modal/modal-excluir-medico/modal-excluir-medico.component';
import { ModalExcluirTelefoneComponent } from '../../telefone/modal/modal-excluir-telefone/modal-excluir-telefone.component';
import { ModalCriarTelefoneComponent } from '../../telefone/modal/modal-criar-telefone/modal-criar-telefone.component';
import { ModalCriarEnderecoComponent } from '../../endereco/modal/modal-criar-endereco/modal-criar-endereco.component';
import { ModalExcluirEnderecoComponent } from '../../endereco/modal/modal-excluir-endereco/modal-excluir-endereco.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css'],
})
export class ListarMedicosComponent implements OnInit {
  listaMedicos: Array<Medico> = [];
  totalCount!: number;
  currentPageNumber: number = 0;
  pageSize: number = 5;
  filterForm!: FormGroup;

  constructor(
    private service: MedicoService,
     private modal: NgbModal,
     private formBuilder: FormBuilder,
     ) {}

  ngOnInit(): void {
    this.getPaginateAll(this.currentPageNumber, this.pageSize);
    this.filterForm = this.formBuilder.group({
      tx_nome: ['']
    })
  }

  getPaginateAll(currentPageNumber: number, pageSize: number) {
    this.service.getPaginateAll(currentPageNumber, pageSize).subscribe((response) => {
        this.listaMedicos = response.content as Medico[];
        this.totalCount = response.totalElements
          ? Number(response.totalElements)
          : 0;
      });
  }

  getForFilterPaginateAll(){
    const filter = this.filterForm.get('tx_nome')?.value
    console.log(filter)
    this.service.getForFilterPaginateAll(this.currentPageNumber, this.pageSize, filter).subscribe((response) => {
      this.listaMedicos = response.content as Medico[];
        this.totalCount = response.totalElements
          ? Number(response.totalElements)
          : 0;
    });
  }

  createMedico() {
    this.modal.open(ModalCriarMedicoComponent);
  }

  updateMedico(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalUpdateMedicoComponent);
      modalRef.componentInstance.id = id;
    }
  }

  deleteMedico(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalExcluirMedicoComponent);
      modalRef.componentInstance.id = id;
    }
  }

  addTelefone(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalCriarTelefoneComponent);
      modalRef.componentInstance.id = id;
    }
  }

  deleteTelefone(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalExcluirTelefoneComponent);
      modalRef.componentInstance.id = id;
    }
  }

  addEndereco(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalCriarEnderecoComponent);
      modalRef.componentInstance.id = id;
    }
  }

  deleteEndereco(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalExcluirEnderecoComponent);
      modalRef.componentInstance.id = id;
    }
  }

  toggleExpandido(item: Medico): void {
    this.listaMedicos.forEach((medico) => {
      if (medico.expandido && medico != item) {
        medico.expandido = false;
      }
    });
    item.expandido = !item.expandido;
  }

  onPageChange(event: PageEvent) {
    this.getPaginateAll(event.pageIndex, event.pageSize);
  }
}
