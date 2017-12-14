import { Url } from "url";

export class Product 
{
    $prdKey: string;
    prdName: string;
    prdCategory: string; //Category
    prdSup: string; //supplier
    prdImage: Url;
    //prdImage: ImageData;
    prdDescription: string;
}