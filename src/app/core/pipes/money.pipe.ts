import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(money: number): string {
    return money.toString().slice(0, 1) + ',' + money.toString().slice(1);
  }
}
