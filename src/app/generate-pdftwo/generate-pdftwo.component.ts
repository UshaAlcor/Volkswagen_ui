
  import { Component, ElementRef, SecurityContext, ViewChild } from '@angular/core';
  import { DomSanitizer } from '@angular/platform-browser';
  import { PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
  import { MatDialog, MatDialogRef } from '@angular/material/dialog';

  import { Router } from '@angular/router';
  import { AlertDialogModel, AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
  import { AuthService } from 'src/app/auth.service';

  @Component({
    selector: 'app-generate-pdftwo',
    templateUrl: './generate-pdftwo.component.html',
    styleUrls: ['./generate-pdftwo.component.css']
  })
  export class GeneratePDFTwoComponent {
  
    pdfSrc: any;
    pdf!: PDFDocumentProxy;
    @ViewChild(PdfViewerComponent, { static: false })
   
    private pdfComponent!: PdfViewerComponent;result: any;
    isdownloadClick: boolean=false;
    ispasswordMatched: any=false;
    tabView: boolean;
  ;
    constructor(private  loginAuth: AuthService,protected sanitizer: DomSanitizer,public dialog: MatDialog,private router:Router) { 
      this.pdfSrc=this.loginAuth.pdfImg
      console.log(this.pdfSrc)
    }
    ngOnInit()
    {
      console.log(this.router.url )
      if(this.router.url==='/printPdf/tab'){
        this.tabView=true
      }
      else{
        this.tabView=false
      }
  
      this.pdfSrc=this.loginAuth.pdfImg
      console.log(this.pdfSrc)
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
    if(!this.tabView)
    {
    window.open(this.loginAuth.pdfFile.output('bloburl'), '_blank',"top=100,left=200,width=1000,height=500");
    }
    if(this.tabView)
    {
    window.open(this.loginAuth.pdfFile.output('bloburl'), '_blank')
    
    }
    //window.open(this.loginAuth.pdfFile.output('bloburl')', '_blank', 'toolbar=0,location=0,menubar=0');
     // window.open(this.loginAuth.pdfFile.output('bloburl' , "", "width=200,height=100"));
  
       
     
  }
  
  printPdf() {
    
    this.loginAuth.printPDF.autoPrint();
    if(!this.tabView)
    {
    window.open(this.loginAuth.printPDF.output('bloburl'), '_blank',"top=100,left=200,width=1000,height=500");
    }
    if(this.tabView)
    {
    window.open(this.loginAuth.printPDF.output('bloburl'), '_blank')
    
    }
   // window.open(this.loginAuth.printPDF.output('bloburl'), '_blank');
  // window.open(this.loginAuth.printPDF.output('bloburl'), '_blank',"top=100,left=200,width=1000,height=500");
  
     
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

