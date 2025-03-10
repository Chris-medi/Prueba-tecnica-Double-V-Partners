import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infoPipe',
})
export class InfoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if ( value === 0 ) return "Sin seguidores"
    return value
  }
}
