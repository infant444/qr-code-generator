import { Injectable } from '@angular/core';
import { title } from 'src/app/data/module/data';
import { Tag } from 'src/app/data/module/tag';

@Injectable({
  providedIn: 'root'
})
export class QrdataService {

  constructor() { }

  tags():Tag[]{
    return title;
  }
}
