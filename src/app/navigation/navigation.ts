import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics'
                    }
                ]
            },
            {
                id       : 'mrns',
                title    : 'MRN',
                translate: 'MRN',
                type     : 'collapsable',
                icon     : 'user',
                children : [
                    {
                        id   : 'mrn',
                        title: 'Meterial Requisition Note',
                        type : 'item',
                        url  : '/apps/mrn/mrn'
                    },
                    {
                        id   : 'mrn',
                        title: 'M R N Details',
                        type : 'item',
                        url  : '/apps/mrn/mrndetails'
                    }
                ]
                //url      : '/apps/mrn'
            },
            {
                id       : 'srn',
                title    : 'SRN',
                translate: 'SRN',
                type     : 'item',
                icon     : 'user',
                url      : '/apps/srn/srn'
            },
            {
                id       : 'e-commerce',
                title    : 'Notes',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'GIN',
                        type      : 'item',
                        url       : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'GRN',
                        type      : 'item',
                        url       : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'MRN',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'PO',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            }
            
        ]
    }
];
