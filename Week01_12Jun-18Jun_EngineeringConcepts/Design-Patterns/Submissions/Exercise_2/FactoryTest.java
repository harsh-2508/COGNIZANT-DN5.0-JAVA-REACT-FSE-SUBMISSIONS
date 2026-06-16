package Exercise_2;

public class FactoryTest {

  public static void main(String[] args) {
    DocumentFactory wordFactory = new WordDocumentFactory();
    Document wordDoc = wordFactory.createDocument();
    wordDoc.open();


    DocumentFactory pdfFactory=new PdfDocumentFactory();
    Document pdfDoc=pdfFactory.createDocument();
    pdfDoc.open();

    DocumentFactory ExcelFactory=new ExcelDocumentFactory();
    Document ExcelDoc=ExcelFactory.createDocument();
    ExcelDoc.open();

  }

}