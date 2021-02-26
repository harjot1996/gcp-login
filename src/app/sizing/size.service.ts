import { Injectable } from '@angular/core'
import { one, Size, three, two } from './size'

@Injectable({
    providedIn: 'root'
})

export class SizeService {
    private active: Size = one;
    private availableSizes: Size[] = [one, two, three];

    setSize(size: Size): void {
        this.active = size;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            )
        })
    }
}
