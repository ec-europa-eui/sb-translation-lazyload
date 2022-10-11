import { ModulesConfig } from '@eui/core';
import { environment } from '../environments/environment';  


export const MODULES: ModulesConfig = {
    core: {
        base: '/api',
    },
    module1: {
        i18nFolders: ['i18n-module1'], 
     },
     module2: {
       i18nServices: [`${environment.apiBaseUrl}translations?lang=`], // don't forget '/'
      
     }
};
