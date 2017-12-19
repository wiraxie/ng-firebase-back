import { Url } from "url";
import { HtmlTagDefinition, TagContentType, TagDefinition, HtmlParser } from "@angular/compiler";

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