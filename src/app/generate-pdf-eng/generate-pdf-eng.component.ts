import { Component,  ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
import { AuthService } from '../auth.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent, AlertDialogModel } from '../alert-dialog/alert-dialog.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-generate-pdf-eng',
  templateUrl: './generate-pdf-eng.component.html',
  styleUrls: ['./generate-pdf-eng.component.css']
})
export class GeneratePdfEngComponent {
 

    pdfSrc: any;
    pdf!: PDFDocumentProxy;
    @ViewChild(PdfViewerComponent, { static: false })
   
    private pdfComponent!: PdfViewerComponent;result: any;
    isdownloadClick: boolean=false;
    ispasswordMatched: any=false;
  ;
    constructor(private  loginAuth: AuthService,protected sanitizer: DomSanitizer,public dialog: MatDialog,private router:Router) { 
      this.pdfSrc=this.loginAuth.pdfImg
    }
    head=[
      'kanalastname','kananame','kanjilastname','kanjiname','gender','email','cell1','cell2','phone1'
   ,'phone2','phone3','dob','address1','address2','address3','address4','address5'  ]
   getCurrentDate()
  {
    let yourDate = new Date()
    const offset = yourDate.getTimezoneOffset()
   yourDate = new Date(yourDate.getTime() - (offset*60*1000))
   return yourDate.toISOString().split('T')[0]
  }
   ScreenDownload()
  {  
    let fn=this.getCurrentDate();
    const fileName = fn.replace(/-/g, "");  
    console.log(fileName)
  
    var a = document.createElement("a");
    let title="customer_info"
  
    
      this.loginAuth.pdfFile.save(fileName);
      window.open(this.loginAuth.pdfFile.output('bloburl')) 
     
       //window.open(URL.createObjectURL( this.loginAuth.pdfFile.output("blob")))
       
  // var options = {
  //   keyLength: 128,
  //   password: 'YOUR_PASSWORD_TO_ENCRYPT'
  // }
  
  // qpdf.encrypt(fileName, options);
  
       
  
      
      // let path= this.loginAuth.pdfFile.path()
     //  console.log(path)
  
       
     
  }
  
  printPdf() {
    this.loginAuth.printPDF.autoPrint();
    window.open(this.loginAuth.printPDF.output('bloburl'), '_blank');
     
   }
  callBackFn(pdf: PDFDocumentProxy) {
  
    console.log(pdf);
    if (pdf) {
      const printOptions = {
        paperWidth: 8.5,
        paperHeight: 11,
        orientation: 'portrait',
      };
      //pdf.open(printOptions);  
    }
  }
  
  
  
  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }
  openAlertDialog() {
    const message = `This file is password protected. Please enter a password to open the file. `
    const dialogData = new AlertDialogModel("Message", message);
  
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      maxWidth: "800px",
      data: { message:message,dialogData:this.loginAuth.alertPdfData },
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(this.loginAuth.printpdfData.kananame)
      if(this.result==true){
      if(this.loginAuth.alertPdfData==this.loginAuth.printpdfData.kananame){
     
  console.log("result is,",this.loginAuth.alertPdfData)
  this.ScreenDownload();
  }
  else{
    console.log("error")
    alert('Invalid Password');    
  }
      }
     
    })
  }
  noclick()
  {
    this.router.navigate(['/printDetail'])
  }
  
  }