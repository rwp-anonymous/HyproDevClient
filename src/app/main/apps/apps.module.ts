import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { MrnDetailsComponent } from './mrn-details/mrn-details.component';
import { MrnComponent } from './mrn/mrn.component';
import { MrnCreateComponent } from './mrn-create/mrn-create.component';


const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path        : 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    },
    {
        path        : 'mrn',
        loadChildren: './mrn/mrn.module#MrnModule'
    },
    {

        path        : 'srn',
        loadChildren: './srn/srn.module#SrnModule'
    },
    {
        path        : 'mrn-details',
        loadChildren: './mrn-details/mrn-details.module#MrnDetailsModule'

    },
    {
        path        : 'srn-details',
        loadChildren: './srn-details/srn-details.module#SrnDetailsModule'

    },
    { 
        path        : 'mrn-create',
        loadChildren: './mrn-create/mrn-create.module#MrnCreateModule'
    },
    {
        path        : 'srn-document-generator',
        loadChildren: './srn-document-generator/srn-document-generator.module#SrnDocumentGeneratorModule'
       

    },
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule
    ],
    declarations: [],
    
    
})
export class AppsModule
{
}
