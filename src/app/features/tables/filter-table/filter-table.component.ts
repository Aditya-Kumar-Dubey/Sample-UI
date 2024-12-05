import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-filter-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.scss'
})
export class FilterTableComponent {

  data: any[][] = [];  // To hold the Excel data as a 2D array

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const binaryStr: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onCellEdit(rowIndex: number, colIndex: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement?.value;

    if (newValue !== null && newValue !== undefined) {
      this.data[rowIndex][colIndex] = newValue;
    }
  }

  saveAsExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'EditedExcelFile.xlsx');
  }

}
