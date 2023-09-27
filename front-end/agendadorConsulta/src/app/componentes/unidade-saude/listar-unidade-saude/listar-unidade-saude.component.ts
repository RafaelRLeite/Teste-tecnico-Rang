import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';
import { ModalCriarUnidadeSaudeComponent } from '../modal/modal-criar-unidade-saude/modal-criar-unidade-saude.component';
import { ModalExcluirUnidadeSaudeComponent } from '../modal/modal-excluir-unidade-saude/modal-excluir-unidade-saude.component';
import { ModalUpdateUnidadeSaudeComponent } from '../modal/modal-update-unidade-saude/modal-update-unidade-saude.component';
import { PageEvent } from '@angular/material/paginator';
import { ModalCriarEnderecoComponent } from '../../endereco/modal/modal-criar-endereco/modal-criar-endereco.component';
import { ModalExcluirEnderecoComponent } from '../../endereco/modal/modal-excluir-endereco/modal-excluir-endereco.component';
import { ModalCriarTelefoneComponent } from '../../telefone/modal/modal-criar-telefone/modal-criar-telefone.component';
import { ModalExcluirTelefoneComponent } from '../../telefone/modal/modal-excluir-telefone/modal-excluir-telefone.component';
import { UnidadeSaude } from 'src/app/models/unidade-saude';

@Component({
  selector: 'app-listar-unidade-saude',
  templateUrl: './listar-unidade-saude.component.html',
  styleUrls: ['./listar-unidade-saude.component.css']
})
export class ListarUnidadeSaudeComponent implements OnInit {
  listaUnidadeSaude: Array<UnidadeSaude> = [];
  totalCount!: number;
  currentPageNumber: number = 0;
  pageSize: number = 5;

  constructor(private service: UnidadeSaudeService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.getPaginateAll(this.currentPageNumber, this.pageSize);
  }

  getPaginateAll(currentPageNumber: number, pageSize: number) {
    this.service.getPaginateAll(currentPageNumber, pageSize).subscribe((response) => {
        this.listaUnidadeSaude = response.content as UnidadeSaude[];
        this.totalCount = response.totalElements
          ? Number(response.totalElements)
          : 0;
      });
  }

  createUnidadeSaude() {
    this.modal.open(ModalCriarUnidadeSaudeComponent);
  }

  updateUnidadeSaude(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalUpdateUnidadeSaudeComponent);
      modalRef.componentInstance.id = id;
    }
  }

  deleteUnidadeSaude(id: number | undefined) {
    if (id != undefined) {
      const modalRef = this.modal.open(ModalExcluirUnidadeSaudeComponent);
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

  toggleExpandido(item: UnidadeSaude): void {
    this.listaUnidadeSaude.forEach((UnidadeSaude) => {
      if (UnidadeSaude.expandido && UnidadeSaude != item) {
        UnidadeSaude.expandido = false;
      }
    });
    item.expandido = !item.expandido;
  }

  onPageChange(event: PageEvent) {
    this.getPaginateAll(event.pageIndex, event.pageSize);
  }
}
