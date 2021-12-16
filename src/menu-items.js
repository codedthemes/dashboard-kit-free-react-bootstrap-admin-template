// Menu configuration for default layout
const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: 'material-icons-two-tone',
                    iconname: 'home',
                    url: '/dashboard/sales'
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'ELEMENTS',
            subtitle: 'UI Components',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'typography',
                    title: 'Typography',
                    type: 'item',
                    url: '/basic/typography',
                    icon: 'material-icons-two-tone',
                    iconname: 'business_center',
                    breadcrumbs: false
                },
                {
                    id: 'icons',
                    title: 'Icons',
                    type: 'item',
                    url: '/icons/Feather',
                    icon: 'material-icons-two-tone',
                    iconname: 'history_edu'
                }
            ]
        },
        {
            id: 'table',
            title: 'Table',
            subtitle: 'Advance Datatable Integrated',
            type: 'group',
            icon: 'icon-table',
            children: [
                {
                    id: 'bootstrap-table',
                    title: 'Bootstrap table',
                    url: '/bootstrap-table/basic-table',
                    type: 'item',
                    icon: 'feather icon-server'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            subtitle: 'Tones Of Readymade Charts',
            type: 'group',
            children: [
                {
                    id: 'charts',
                    title: 'Chart',
                    type: 'item',
                    url: '/charts/apex-chart',
                    icon: 'material-icons-two-tone',
                    iconname: 'bubble_chart'
                },
                {
                    id: 'maps',
                    title: 'Maps',
                    type: 'item',
                    url: '/maps/google-map',
                    icon: 'material-icons-two-tone',
                    iconname: 'my_location'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            subtitle: '15+ Redymade Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'material-icons-two-tone',
                    iconname: 'https',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'support',
            title: 'OTHER',
            subtitle: 'Extra More Things',
            type: 'group',
            icon: 'icon-support',
            children: [
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'material-icons-two-tone',
                    iconname: 'list_alt',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#'
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#'
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#'
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'material-icons-two-tone',
                    iconname: 'storefront'
                }
            ]
        }
    ]
};

export default menuItems;
