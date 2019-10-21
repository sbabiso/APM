import { Pipe , PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'converToSpaces'
})

export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}