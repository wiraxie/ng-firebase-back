export class Product 
{
    $prdKey: string;
    prdName: string;
    prdCategory: string; //Category
    prdSup: string; //supplier
    prdDescription: string;

    prdImage: string; //name
    prdUrl: string; //url
    file: File; //file

    constructor(file: File) 
    {
        this.file = file;
    }
}