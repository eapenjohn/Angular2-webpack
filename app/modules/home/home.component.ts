import './home.scss'

import {
    Component
} from '@angular/core'

import {
    Router
} from '@angular/router'

import { MdIconRegistry } from '@angular/material'

import { DomSanitizer } from "@angular/platform-browser"

@Component({
    selector: 'home',
    template: require('./home.html'),
})
export class HomeComponent {
    constructor(private router, private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer) {
        mdIconRegistry.addSvgIcon("share", domSanitizer.bypassSecurityTrustResourceUrl("https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/share.svg"));
        mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl("https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/avatars.svg"))
    }
    isplayDeatils() {
        this.router.navigateByUrl('(details:details-items;id:1)')
    }
}

HomeComponent['parameters'] = [Router, MdIconRegistry, DomSanitizer]