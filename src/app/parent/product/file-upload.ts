export class FileUpload 
{ 
  $key: string;
  fileName: string;
  url: string;
  file: File;
 
  constructor(file: File) 
  {
    this.file = file;
  }
}