import { Component } from '@angular/core';
import { I18nService } from '@eui/core';
import {  TranslateService } from '@ngx-translate/core';


@Component({
    templateUrl: './module1.component.html',
})
export class Module1Component {
    constructor(private translateService: TranslateService ,
        private i18n: I18nService){
        }

}
