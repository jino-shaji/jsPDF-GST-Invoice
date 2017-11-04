function generate() {

  var doc = new jsPDF('p', 'pt');

  var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  doc.autoTable(res.columns, res.data, {margin: {top: 80}});

  var header = function(data) {
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    doc.text("Testing Report", data.settings.margin.center, 50);
  };

  var options = {
    beforePageContent: header,
    margin: {
      top: 80
    },
    startY: doc.autoTableEndPosY() + 20
  };

  doc.autoTable(res.columns, res.data, options);

  doc.save("table.pdf");
}

var comapnyJSON={
  CompanyName:'INTELLYZE LABS',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'KERALA (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'MEGHDOOT HOUSE,IX/642-D',
  CompanyAddressLine2:'VAPPALASSERRY P.O., NEDUMBASSERY',
  CompanyAddressLine3:'COCHIN',
  PIN: '683584',
  companyEmail:'viticosmetics@gmail.com',
  companyPhno:'+918189457845',
};

var customer_BillingInfoJSON={
  CustomerName:'Jino Shaji',
  CustomerGSTIN:'37B76C238B7E1Z5',
  CustomerState:'KERALA (09)',
  CustomerPAN:'B76C238B7E',
  CustomerAddressLine1:'MEGHDOOT HOUSE,IX/642-D',
  CustomerAddressLine2:'VAPPALASSERRY P.O., NEDUMBASSERY',
  CustomerAddressLine3:'COCHIN',
  PIN: '683584',
  CustomerEmail:'viticosmetics@gmail.com',
  CustomerPhno:'+918189457845',
};


var customer_ShippingInfoJSON={
  CustomerName:'Jino Shaji',
  CustomerGSTIN:'37B76C238B7E1Z5',
  CustomerState:'KERALA (09)',
  CustomerPAN:'B76C238B7E',
  CustomerAddressLine1:'MEGHDOOT HOUSE,IX/642-D',
  CustomerAddressLine2:'VAPPALASSERRY P.O., NEDUMBASSERY',
  CustomerAddressLine3:'COCHIN',
  PIN: '683584',
  CustomerEmail:'viticosmetics@gmail.com',
  CustomerPhno:'+918189457845',
};


var invoiceJSON={
  InvoiceNo:'INV-120152',
  InvoiceDate:'03-12-2017',
  RefNo:'REF-78445',
  TotalAmnt:'Rs.1,24,200',
  SubTotalAmnt:'Rs.1,04,200',
  TotalGST:'Rs.2,0000',
  TotalCGST:'Rs.1,0000',
  TotalSGST:'Rs.1,0000',
  TotalIGST:'Rs.0',
  TotalCESS:'Rs.0',
}

var company_logo = {
  srcl:'data:image/png;base64,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',
  src: 'data:image/png;base64,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',
  w: 80,
  h: 50
};

var fontSizes={
  HeadTitleFontSize:18,
  Head2TitleFontSize:16,
  TitleFontSize:14,
  SubTitleFontSize:12,
  NormalFontSize:10,
  SmallFontSize:8
};
 
var lineSpacing={
  NormalSpacing:12,
};

function generate_cutomPDF() {
  
    var doc = new jsPDF('p', 'pt');
  
    var rightStartCol1=400;
    var rightStartCol2=480;


    var InitialstartX=40;
    var startX=40;
    var InitialstartY=50;
    var startY=0;

    var lineHeights=12;

    var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
      res = doc.autoTableHtmlToJson(document.getElementById("tblInvoiceItemsList"));
    
    doc.setFontSize(fontSizes.SubTitleFontSize);
    doc.setFont('times');
    doc.setFontType('bold');
    
    //pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);
    doc.addImage(company_logo.srcl, 'PNG', startX,startY+=50, company_logo.w,company_logo.h);

    doc.textAlign(comapnyJSON.CompanyName, {align: "left"}, startX, startY+=15+company_logo.h);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.textAlign("GSTIN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(comapnyJSON.CompanyGSTIN, {align: "left"}, 80, startY);
    
    doc.setFontType('bold');
    doc.textAlign("STATE", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(comapnyJSON.CompanyState, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(comapnyJSON.CompanyPAN, {align: "left"}, 80, startY);

    // doc.setFontType('bold');
    // doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(comapnyJSON.CompanyAddressLine1, {align: "left"}, 80, startY);
    // doc.textAlign(comapnyJSON.CompanyAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
    // doc.textAlign(comapnyJSON.CompanyAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
     
    doc.setFontType('bold');
    doc.textAlign("PIN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(comapnyJSON.PIN, {align: "left"}, 80, startY);
    
    doc.setFontType('bold');
    doc.textAlign("EMAIL", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(comapnyJSON.companyEmail, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Phone: ", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(comapnyJSON.companyPhno, {align: "left"}, 80, startY);

   var tempY=InitialstartY;


    doc.setFontType('bold');
    doc.textAlign("INVOICE NO: ", {align: "left"},  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(invoiceJSON.InvoiceNo, {align: "left"}, rightStartCol2, tempY);


    doc.setFontType('bold');
    doc.textAlign("INVOICE Date: ", {align: "left"},  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(invoiceJSON.InvoiceDate, {align: "left"}, rightStartCol2, tempY);

    doc.setFontType('bold');
    doc.textAlign("Reference No: ", {align: "left"},  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(invoiceJSON.RefNo, {align: "left"}, rightStartCol2, tempY);

    doc.setFontType('bold');
    doc.textAlign("Total: ", {align: "left"},  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(invoiceJSON.TotalAmnt, {align: "left"}, rightStartCol2, tempY);
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });
   
    doc.setFontType('normal');
   
    doc.setLineWidth(1);
   // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
    doc.line(20, startY+lineSpacing.NormalSpacing, 220, startY+lineSpacing.NormalSpacing);
    doc.line(380, startY+lineSpacing.NormalSpacing, 580, startY+lineSpacing.NormalSpacing);
   
    doc.setFontSize(fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');
    doc.textAlign("TAX INVOICE", {align: "center"}, startX, startY+=lineSpacing.NormalSpacing+2);
     
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');

    //-------Customer Info Billing---------------------
   var startBilling=startY;

    doc.textAlign("Billing Address,", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.textAlign(customer_BillingInfoJSON.CustomerName, {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.textAlign("GSTIN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, {align: "left"}, 80, startY);
    
   
    // doc.setFontType('bold');
    // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, {align: "left"}, 80, startY);
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
     
    doc.setFontType('bold');
    doc.textAlign("STATE", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerState, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("PIN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.PIN, {align: "left"}, 80, startY);
    
    doc.setFontType('bold');
    doc.textAlign("EMAIL", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerEmail, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Phone: ", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerPhno, {align: "left"}, 80, startY);

    

    //-------Customer Info Shipping---------------------
    var rightcol1=340;
    var rightcol2=400;

    startY=startBilling;
    doc.setFontType('bold');
    doc.textAlign("Shipping Address,", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.textAlign(customer_BillingInfoJSON.CustomerName, {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.textAlign("GSTIN", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, {align: "left"},rightcol2, startY);
    
   
    // doc.setFontType('bold');
    // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
    // doc.setFontType('normal');
    // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

    doc.setFontType('bold');
    doc.textAlign("Address", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, {align: "left"}, rightcol2, startY);
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, {align: "left"}, rightcol2, startY+=lineSpacing.NormalSpacing);
    doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, {align: "left"}, rightcol2, startY+=lineSpacing.NormalSpacing);
     
    doc.setFontType('bold');
    doc.textAlign("STATE", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerState, {align: "left"}, rightcol2, startY);

    doc.setFontType('bold');
    doc.textAlign("PIN", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.PIN, {align: "left"}, rightcol2, startY);
    
    doc.setFontType('bold');
    doc.textAlign("EMAIL", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerEmail, {align: "left"}, rightcol2, startY);

    doc.setFontType('bold');
    doc.textAlign("Phone: ", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.textAlign(customer_BillingInfoJSON.CustomerPhno, {align: "left"}, rightcol2, startY);

    


    var header = function(data) {
      doc.setFontSize(8);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
     // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);
 
      //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
     // doc.text("Testing Report", 110, 50);
    };
   // doc.autoTable(res.columns, res.data, {margin: {top:  startY+=30}});
   doc.setFontSize(8);
   doc.setFontStyle('normal');
   
    var options = {
      beforePageContent: header,
      margin: {
        top: 50 
      },
      styles: {
        overflow: 'linebreak',
        fontSize: 8,
        rowHeight: 'auto',
        columnWidth: 'wrap'
      },
      columnStyles: {
        1: {columnWidth: 'auto'},
        2: {columnWidth: 'auto'},
        3: {columnWidth: 'auto'},
        4: {columnWidth: 'auto'},
        5: {columnWidth: 'auto'},
        6: {columnWidth: 'auto'},
      },
      startY: startY+=50
    };
  
    var columns = [
      {title: "ID", dataKey: "id",width: 90},
      {title: "Product", dataKey: "Product",width: 40}, 
      {title: "Rate/Item", dataKey: "Rate/Item",width: 40}, 
      {title: "Qty", dataKey: "Qty",width: 40}, 
      {title: "Dsnt", dataKey: "Dsnt",width: 40}, 
      {title: "S.Total", dataKey: "STotal",width: 40}, 
      {title: "CGST", dataKey: "CGST",width: 40}, 
      {title: "SGST", dataKey: "SGST",width: 40}, 
      {title: "IGST", dataKey: "IGST",width: 40}, 
      {title: "CESS", dataKey: "CESS",width: 40}, 
      {title: "Total", dataKey: "Total",width: 40}, 
  ];
  var rows = [
    {"id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 2, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 3, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": 4, "Product": "Shaw", "Rate/Item": "10","Qty" : "12","Dsnt":"10","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180},
    {"id": '', "Product": "", "Rate/Item": "Total","Qty" : "","Dsnt":"20","STotal":"360","CGST":60,"SGST":60,"IGST":0,"CESS":60,"Total":680},
 
  ];

  // columnStyles: {
  //   id: {fillColor: 255}
  // },
  
  doc.autoTable(columns, rows, options);   //From dynamic data.
  // doc.autoTable(res.columns, res.data, options); //From htmlTable
  


  //-------Invoice Footer---------------------
  var rightcol1=340;
  var rightcol2=430;

  startY=doc.autoTableEndPosY()+30;
  doc.setFontSize(fontSizes.NormalFontSize);
  
  doc.setFontType('bold');
  doc.textAlign("Sub Total,", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.textAlign(invoiceJSON.SubTotalAmnt, {align: "left"}, rightcol2, startY);
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType('bold');
  doc.textAlign("CGST Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalCGST, {align: "left"},rightcol2, startY);
  

  doc.setFontType('bold');
  doc.textAlign("SGST Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalSGST, {align: "left"},rightcol2, startY);
  
  doc.setFontType('bold');
  doc.textAlign("IGST Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalIGST, {align: "left"},rightcol2, startY);
  

  doc.setFontType('bold');
  doc.textAlign("CESS Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalCESS, {align: "left"},rightcol2, startY);
  
  doc.setFontType('bold');
  doc.textAlign("Total GST Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalGST, {align: "left"},rightcol2, startY);
  

  doc.setFontType('bold');
  doc.textAlign("Grand Total Rs.", {align: "left"}, rightcol1, startY+=lineSpacing.NormalSpacing);
  doc.setFontType('normal');
 // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.TotalAmnt, {align: "left"},rightcol2, startY);
  doc.setFontType('bold');
  doc.textAlign('For '+comapnyJSON.CompanyName+',', {align: "center"},rightcol2, startY+=lineSpacing.NormalSpacing+50);
  doc.textAlign('Authorised Signatory', {align: "center"},rightcol2, startY+=lineSpacing.NormalSpacing+50);
  
    doc.save("invoice.pdf");
}

