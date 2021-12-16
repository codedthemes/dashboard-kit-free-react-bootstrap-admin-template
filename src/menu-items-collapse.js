// Menu configuration for collapse layout
const menuItems = {
    items: [
        {
            type: 'group',
            id: 'navigation-group',
            children: [
                {
                    id: 'navigation',
                    title: 'Navigation',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    children: [
                        {
                            id: 'dashboard',
                            title: 'Dashboard',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'sales',
                                    title: 'Sales',
                                    type: 'item',
                                    url: '/dashboard/sales'
                                },
                                {
                                    id: 'analytics',
                                    title: 'Analytics',
                                    type: 'item',
                                    url: '/dashboard/analytics'
                                }
                            ]
                        },
                        {
                            id: 'widgets',
                            title: 'Widget',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'widget-statistic',
                                    title: 'Statistic',
                                    type: 'item',
                                    url: '/widgets/widget-statistic'
                                },
                                {
                                    id: 'widget-data',
                                    title: 'Data',
                                    type: 'item',
                                    url: '/widgets/widget-data'
                                },
                                {
                                    id: 'widget-chart',
                                    title: 'Chart',
                                    type: 'item',
                                    url: '/widgets/widget-chart'
                                }
                            ]
                        },
                        {
                            id: 'users',
                            title: 'User',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'user-profile',
                                    title: 'Profile',
                                    type: 'item',
                                    url: '/users/user-profile',
                                    breadcrumbs: true
                                },
                                {
                                    id: 'social-profile',
                                    title: 'Social Profile',
                                    type: 'item',
                                    url: '/users/social-profile',
                                    breadcrumbs: false
                                },
                                {
                                    id: 'user-cards',
                                    title: 'User Card',
                                    type: 'item',
                                    url: '/users/user-cards'
                                },
                                {
                                    id: 'user-list',
                                    title: 'User List',
                                    type: 'item',
                                    url: '/users/user-list'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'group',
            id: 'components-group',
            children: [
                {
                    id: 'components',
                    title: 'Components',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'basic',
                            title: 'Basic',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'alert',
                                    title: 'Alert',
                                    type: 'item',
                                    url: '/basic/alert'
                                },
                                {
                                    id: 'button',
                                    title: 'Button',
                                    type: 'item',
                                    url: '/basic/button'
                                },
                                {
                                    id: 'badges',
                                    title: 'Badges',
                                    type: 'item',
                                    url: '/basic/badges'
                                },
                                {
                                    id: 'breadcrumb-pagination',
                                    title: 'Breadcrumb & Pagination',
                                    type: 'item',
                                    url: '/basic/breadcrumb-pagination'
                                },
                                {
                                    id: 'cards',
                                    title: 'Cards',
                                    type: 'item',
                                    url: '/basic/cards'
                                },
                                {
                                    id: 'collapse',
                                    title: 'Collapse',
                                    type: 'item',
                                    url: '/basic/collapse'
                                },
                                {
                                    id: 'color',
                                    title: 'Color',
                                    type: 'item',
                                    url: '/basic/color'
                                },
                                {
                                    id: 'carousel',
                                    title: 'Carousel',
                                    type: 'item',
                                    url: '/basic/carousel'
                                },
                                {
                                    id: 'grid-system',
                                    title: 'Grid System',
                                    type: 'item',
                                    url: '/basic/grid-system'
                                },
                                {
                                    id: 'progress',
                                    title: 'Progress',
                                    type: 'item',
                                    url: '/basic/progress'
                                },
                                {
                                    id: 'list-group',
                                    title: 'List Group',
                                    type: 'item',
                                    url: '/basic/list-group'
                                },
                                {
                                    id: 'modal',
                                    title: 'Modal',
                                    type: 'item',
                                    url: '/basic/modal'
                                },
                                {
                                    id: 'spinner',
                                    title: 'Spinner',
                                    type: 'item',
                                    url: '/basic/spinner'
                                },
                                {
                                    id: 'tabs-pills',
                                    title: 'Tabs & Pills',
                                    type: 'item',
                                    url: '/basic/tabs-pills'
                                },
                                {
                                    id: 'typography',
                                    title: 'Typography',
                                    type: 'item',
                                    url: '/basic/typography'
                                },
                                {
                                    id: 'tooltip-popovers',
                                    title: 'Tooltip & Popovers',
                                    type: 'item',
                                    url: '/basic/tooltip-popovers'
                                },
                                {
                                    id: 'toasts',
                                    title: 'Toasts',
                                    type: 'item',
                                    url: '/basic/toasts'
                                },
                                {
                                    id: 'other',
                                    title: 'Other',
                                    type: 'item',
                                    url: '/basic/other'
                                }
                            ]
                        },
                        {
                            id: 'advance',
                            title: 'Advance',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'sweet-alert',
                                    title: 'Sweet Alert',
                                    type: 'item',
                                    url: '/advance/sweet-alert'
                                },
                                {
                                    id: 'datepicker',
                                    title: 'Datepicker',
                                    type: 'item',
                                    url: '/advance/datepicker'
                                },
                                {
                                    id: 'light-box',
                                    title: 'Light Box',
                                    type: 'item',
                                    url: '/advance/light-box'
                                },
                                {
                                    id: 'notification',
                                    title: 'Notification',
                                    type: 'item',
                                    url: '/advance/notification'
                                },
                                {
                                    id: 'p-notify',
                                    title: 'Pnotify',
                                    type: 'item',
                                    url: '/advance/p-notify'
                                },
                                {
                                    id: 'rating',
                                    title: 'Rating',
                                    type: 'item',
                                    url: '/advance/rating'
                                },
                                {
                                    id: 'range-slider',
                                    title: 'Range Slider',
                                    type: 'item',
                                    url: '/advance/range-slider'
                                },
                                {
                                    id: 'syntax-highlighter',
                                    title: 'Syntax Highlighter',
                                    type: 'item',
                                    url: '/advance/syntax-highlighter'
                                }
                            ]
                        },
                        {
                            id: 'icons',
                            title: 'Icons',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'feather',
                                    title: 'Feather',
                                    type: 'item',
                                    url: '/icons/Feather'
                                },
                                {
                                    id: 'font-awesome-5',
                                    title: 'Font Awesome',
                                    type: 'item',
                                    url: '/icons/font-awesome-5'
                                },
                                {
                                    id: 'material',
                                    title: 'Material',
                                    type: 'item',
                                    url: '/icons/material'
                                }
                            ]
                        },
                        {
                            id: 'form-elements',
                            title: 'Form Elements',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'form-basic',
                                    title: 'Form Basic',
                                    type: 'item',
                                    url: '/form-elements/form-basic'
                                },
                                {
                                    id: 'form-options',
                                    title: 'Form Options',
                                    type: 'item',
                                    url: '/form-elements/form-options'
                                },
                                {
                                    id: 'input-groups',
                                    title: 'Input Groups',
                                    type: 'item',
                                    url: '/form-elements/input-groups'
                                },
                                {
                                    id: 'checkboxes',
                                    title: 'Checkboxes',
                                    type: 'item',
                                    url: '/form-elements/checkboxes'
                                },
                                {
                                    id: 'radio',
                                    title: 'Radio',
                                    type: 'item',
                                    url: '/form-elements/radio'
                                },
                                {
                                    id: 'switch',
                                    title: 'Switch',
                                    type: 'item',
                                    url: '/form-elements/switch'
                                },
                                {
                                    id: 'mega-option',
                                    title: 'Mega Option',
                                    type: 'item',
                                    url: '/form-elements/mega-option'
                                }
                            ]
                        },
                        {
                            id: 'forms-plugins',
                            title: 'Forms Plugins',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'datepicker',
                                    title: 'Datepicker',
                                    type: 'item',
                                    url: '/forms-plugins/date/datepicker'
                                },
                                {
                                    id: 'date-range-slider',
                                    title: 'Date Range Picker',
                                    type: 'item',
                                    url: '/forms-plugins/date/date-range-slider'
                                },
                                {
                                    id: 'timepicker',
                                    title: 'Timepicker',
                                    type: 'item',
                                    url: '/forms-plugins/date/timepicker'
                                },
                                {
                                    id: 'multiple-splitter',
                                    title: 'Multiple Select Splitter',
                                    type: 'item',
                                    url: '/forms-plugins/select/multiple-splitter'
                                },
                                {
                                    id: 'choice-js',
                                    title: 'Choice js',
                                    type: 'item',
                                    url: '/forms-plugins/select/choice-js'
                                },
                                {
                                    id: 'select2',
                                    title: 'Select2',
                                    type: 'item',
                                    url: '/forms-plugins/select/select2'
                                },
                                {
                                    id: 'google-recaptcha',
                                    title: 'Google reCaptcha',
                                    type: 'item',
                                    url: '/forms-plugins/google-recaptcha'
                                }
                            ]
                        },
                        {
                            id: 'text-editors',
                            title: 'Text Editors',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'tinymce',
                                    title: 'Tinymce',
                                    type: 'item',
                                    url: '/text-editors/tinymce'
                                },
                                {
                                    id: 'quill',
                                    title: 'Quill',
                                    type: 'item',
                                    url: '/text-editors/quill'
                                },
                                {
                                    id: 'ck-editor',
                                    title: 'CK editor',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'classic',
                                            title: 'Classic',
                                            type: 'item',
                                            url: '/text-editors/ck-editor/classic'
                                        },
                                        {
                                            id: 'document',
                                            title: 'Document',
                                            type: 'item',
                                            url: '/text-editors/ck-editor/document'
                                        },
                                        {
                                            id: 'inline',
                                            title: 'Inline',
                                            type: 'item',
                                            url: '/text-editors/ck-editor/inline'
                                        },
                                        {
                                            id: 'balloon',
                                            title: 'Balloon',
                                            type: 'item',
                                            url: '/text-editors/ck-editor/balloon'
                                        }
                                    ]
                                },
                                {
                                    id: 'trumbowyg-editor',
                                    title: 'Trumbowyg editor',
                                    type: 'item',
                                    url: '/text-editors/trumbowyg-editor'
                                },
                                {
                                    id: 'markdown',
                                    title: 'Markdown',
                                    type: 'item',
                                    url: '/text-editors/markdown'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'group',
            id: 'tables-group',
            children: [
                {
                    id: 'tables',
                    title: 'Bootstrap table',
                    type: 'collapse',
                    icon: 'feather icon-grid',
                    children: [
                        {
                            id: 'tbl-basic',
                            title: 'Basic table',
                            type: 'item',
                            url: '/table/tbl-basic'
                        },
                        {
                            id: 'tbl-sizing',
                            title: 'Sizing table',
                            type: 'item',
                            url: '/table/tbl-sizing'
                        },
                        {
                            id: 'tbl-border',
                            title: 'Border table',
                            type: 'item',
                            url: '/table/tbl-border'
                        },
                        {
                            id: 'tbl-styline',
                            title: 'Styling Table',
                            type: 'item',
                            url: '/table/tbl-styline'
                        }
                    ]
                }
            ]
        },
        {
            type: 'group',
            id: 'sample-group',
            children: [
                {
                    id: 'sample',
                    title: 'Sample Page',
                    type: 'item',
                    icon: 'feather icon-sidebar',
                    url: '/sample-page'
                }
            ]
        }
    ]
};

export default menuItems;
