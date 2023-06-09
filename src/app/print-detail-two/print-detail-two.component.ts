
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import html2canvas from 'html2canvas';
import  jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
//import  jsPDF from 'jspdf';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import jspdf from 'jspdf';
import { GeneratePDFTwoComponent } from '../generate-pdftwo/generate-pdftwo.component';

@Component({
  selector: 'app-print-detail-two',
  templateUrl: './print-detail-two.component.html',
  styleUrls: ['./print-detail-two.component.scss']
})
export class PrintDetailTwoComponent {

  pdfSrc: any;
  pdf!: PDFDocumentProxy;
result: any;
  Roles: any = ['Admin', 'Author', 'Reader'];
  @ViewChild('invoice') invoiceElement!: ElementRef;
  date:any='';
  title = 'Customer Card';
  showFiller = false;
  states: string[] = [
    'USA',
    'India',
    'Japan',
    'Australia',
    'Newzealand'
  ];

  details: string[] = [
    'Employee Name',
    'Login Details',
    'Email-Id'
  ];
  auth: any;
  result1: any;
  customerInfo:any;

myGroup:any;
  isExport: boolean=false;
custInfoResponse: any;
   constructor(private  loginAuth: AuthService,private formBuilder: FormBuilder,private router:Router,public dialog: MatDialog) { 

    this.getCustData();

   

   //this.dataForm = this.formBuilder.group(this.customerInfo);
  }
  dataForm = new FormGroup({
    kanjiname: new FormControl("") as unknown as any,
    kanjilastname: new FormControl("") as unknown as any,
    kananame: new FormControl("") as unknown as any,
    kanalastname: new FormControl("") as unknown as any,
    dob: new FormControl("") as unknown as any,
    gender: new FormControl("") as unknown as any,
    email: new FormControl('', [Validators.required, Validators.email]) as unknown as any,
    cell1: new FormControl("") as unknown as any,
    cell2: new FormControl("") as unknown as any,
    cell3: new FormControl("") as unknown as any,
    cell4: new FormControl("") as unknown as any,
    cell5: new FormControl("") as unknown as any,
    cell6: new FormControl("") as unknown as any,
    add1: new FormControl("") as unknown as any,
    add2: new FormControl("") as unknown as any,
    add3: new FormControl("") as unknown as any,
    add4: new FormControl("") as unknown as any,
    add5: new FormControl("") as unknown as any,
    phone1: new FormControl("") as unknown as any,
    phone2: new FormControl("") as unknown as any,
    phone3: new FormControl("") as unknown as any,
  
  });
 getCustData ()
  {

    this.loginAuth.getCustInfo().subscribe(data=>{

console.log(data)

    this.customerInfo = {
      kanjiname: data[1].kanjiname,
      kanjilastname: data[1].kanjilastname,
      kananame:data[1].kananame,
      kanalastname:data[1].kanalastname,
      dob:data[1].dob,
      gender:data[1].gender,
      email: data[1].email,
     
      cell1:  String(data[1].cell1).substring(0,3),
      cell2: String(data[1].cell1).substring(3,7),
      cell3: String(data[1].cell1).substring(7,11),
      cell4: String(data[1].cell2).substring(0,3),
      cell5:String(data[1].cell2).substring(3,7),
      cell6:String(data[1].cell2).substring(7,11),
      add1:data[1].add1,
      add2:data[1].add2,
      add3:data[1].add3,
      add4:data[1].add4,
      add5:data[1].add5,
     
      phone1:data[1].phone1,
      phone2: data[1].phone2,
      phone3: data[1].phone3
     

    }
    this.dataForm.patchValue({
       kanjiname: this.customerInfo.kanjiname,
      kanjilastname: this.customerInfo.kanjilastname,
      kananame:this.customerInfo.kananame,
      kanalastname:this.customerInfo.kanalastname,
      dob:this.customerInfo.dob,
      gender:this.customerInfo.gender,
      email: this.customerInfo.email,
      cell1:this.customerInfo.cell1,
      cell2:this.customerInfo.cell2,
      cell3:this.customerInfo.cell3,
      cell4:this.customerInfo.cell4,
      cell5:this.customerInfo.cell5,
      cell6:this.customerInfo.cell6,
      add1:this.customerInfo.add1,
      add2:this.customerInfo.add2,
      add3:this.customerInfo.add3,
      add4:this.customerInfo.add4,
      add5:this.customerInfo.add5,
      phone1:this.customerInfo.phone1,
      phone2: this.customerInfo.phone2,
      phone3: this.customerInfo.phone3});
    console.log( this.customerInfo)
  })
}



FormGroup: string | undefined;



isUserValid: boolean =false;












 //custinfo

 inforesponse: any;
 model!: String[];

 information(){
  this.loginAuth.informationUser(this.model).subscribe(
    (      result: any) => {
      this.inforesponse = result;
      console.log('information', this.inforesponse);
      console.log(Object.keys(this.inforesponse[0].id));


    }
  )
}

_locale = 'ja-JP';

getDateFormatString(): string {
  if (this._locale === 'ja-JP') {
    return 'YYYY/MM/DD';
  } else if (this._locale === 'fr') {
    return 'DD/MM/YYYY';
  }
  return '';
}

getCurrentDate()
{
  let yourDate = new Date()
  const offset = yourDate.getTimezoneOffset()
 yourDate = new Date(yourDate.getTime() - (offset*60*1000))
 return yourDate.toISOString().split('T')[0]
}

Screen()

{
  let fn=this.getCurrentDate();
  const fileName = fn.replace(/-/g, "");  
  console.log(fileName)
    var data =this.invoiceElement;  
    html2canvas(data.nativeElement).then(canvas => {  
    //     // Few necessary setting options  
       var imgWidth = 208;   
       var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;
       const contentDataURL = canvas.toDataURL('image/png')  
      
        let doc = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
         
        var position = 0;  
        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
     this.loginAuth.pdfImg=doc.output('bloburl');
   
     const name =this.customerInfo.kananame;
     const dob = this.customerInfo.dob;
     const password = name.substring(0, 4) + dob.replaceAll('-', '');
  // this logic is for print functionality without passowrd
      let  printPdf = new jsPDF({
        orientation: 'p',
        unit:'mm', // set the unit of measurement to px
        format: 'a4', // set your paper size format
        // set the DPI you desire. We used 72 because thats 
     
     
          })
       this.loginAuth.printPDF=   printPdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     
    //this is for download functionality with password protection
     let  pdf = new jsPDF({
      orientation: 'p',
      unit:'mm', // set the unit of measurement to px
      format: 'a4', // set your paper size format
      // set the DPI you desire. We used 72 because thats 
   
       encryption: {
             userPassword:fileName,
            ownerPassword:"test",
              userPermissions:['print']
         } 
        })
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     this.loginAuth.pdfFile=pdf
     this.openDialog()
     
     // window.open(pdf.output('bloburl'))
      // pdf.output(pdf.save('filename.pdf'));
     //   console.log(">>>"+typeof(pdfOutput));// Generated PDF 
     
    });  
}
confirmDialog(): void {
  this.loginAuth.printpdfData=this.customerInfo
  const message = `Customer information displayed and extracted by this function will be used only for sales promotion and marketing activities, and confidentially will be strictly `;

  const dialogData = new ConfirmDialogModel("Message", message);

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  
    data: dialogData,
    panelClass: 'custom-modalbox1'
  });

  dialogRef.afterClosed().subscribe(dialogResult => {
    this.result1 = dialogResult;
    if(this.result1==true){
      this.isExport=true
      const data=[
        this.customerInfo.kanalastname,
        this.customerInfo.kanalastname,
         this.customerInfo.kanalastname,
      this.customerInfo.kanalastname,
      this.customerInfo.gender,
       this.customerInfo.email,
       this.customerInfo.cell1,
     this.customerInfo.cell2,
       this.customerInfo.phone1,
      this.customerInfo.phone2,
     this.customerInfo.phone3,
       this.customerInfo.dob,
       this.customerInfo.add1,
     this.customerInfo.address2,
        this.customerInfo.address3,
       this.customerInfo.address4,
       this.customerInfo.address5
     ];
 
      this.Screen()
    //this.exportDataToPDF()
    }
  });
}
updateDOB(dateObject:any) {
  // convert object to string then trim it to yyyy-mm-dd
  const stringified = JSON.stringify(dateObject.value);
  const dob = stringified.substring(1, 11);

 
  this.dataForm.value.dob = dob;

  
}
printPdf() {
  this.isExport=false
  this.loginAuth.pdfFile.autoPrint();
  window.open(this.loginAuth.pdfFile.output('bloburl'), '_blank');
   
 }

// openDialog(){

// if(this.router.url=='/printDetailTwo'){
//  //this.router.navigate(['/printPdf'])
//  window.open(this.loginAuth.printPDF.output('bloburl'), '_blank',"top=100,left=200,width=1000,height=500");

// }
// if(this.router.url=='/printDetail/tab'){
//   this.router.navigate(['/printPdf/tab'])
// }

// }
openDialog(): void {
  let dialogRef = this.dialog.open(GeneratePDFTwoComponent, {
    maxHeight: '90vh'
    // data: { name: this.name, animal: this.animal }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
  });
}


}


