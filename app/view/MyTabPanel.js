/*
 * File: app/view/MyTabPanel.js
 * Date: Thu Jun 27 2013 11:34:02 GMT+0530 (Sri Lanka Standard Time)
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    requires: [
        'MyApp.view.Registration'
    ],

    config: {
        layout: {
            animation: 'fade',
            type: 'card'
        },
        items: [
            {
                xtype: 'Registration',
                title: 'Register',
                iconCls: 'compose'
            },
            {
                xtype: 'panel',
                title: 'Map',
                iconCls: 'maps',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        ui: 'light',
                        items: [
                            {
                                xtype: 'sliderfield',
                                flex: 3,
                                name: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'decline',
                                iconCls: 'arrow_down',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'confirm',
                                iconAlign: 'center',
                                iconCls: 'arrow_up',
                                text: ''
                            },
                            {
                                xtype: 'selectfield',
                                flex: 1,
                                label: '',
                                options: [
                                    {
                                        text: 'Accedent',
                                        value: 1
                                    },
                                    {
                                        text: 'Road block',
                                        value: 2
                                    },
                                    {
                                        text: 'Protest',
                                        value: 3
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'map',
                        flex: 1,
                        height: '100%',
                        itemId: 'mymap',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    this.setConfig({
                                        mapOptions : {
                                            center: new google.maps.LatLng(6.79724,79.901837), 
                                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                                            zoom: 17
                                        }
                                    });
                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'User',
                iconCls: 'user'
            }
        ],
        tabBar: {
            docked: 'bottom',
            layout: {
                align: 'center',
                type: 'hbox'
            }
        }
    }

});