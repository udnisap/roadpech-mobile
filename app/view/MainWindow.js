/*
 * File: app/view/MainWindow.js
 * Date: Sat Jul 13 2013 13:27:52 GMT+0530 (Sri Lanka Standard Time)
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

Ext.define('RoadPech.view.MainWindow', {
    extend: 'Ext.tab.Panel',

    requires: [
        'RoadPech.view.MapView'
    ],

    config: {
        layout: {
            animation: 'slide',
            type: 'card'
        },
        items: [
            {
                xtype: 'mapView',
                title: 'Map',
                iconCls: 'maps'
            },
            {
                xtype: 'panel',
                title: 'Settings',
                iconCls: 'settings'
            }
        ],
        tabBar: {
            docked: 'bottom',
            id: 'tabbar',
            layout: {
                align: 'center',
                type: 'hbox'
            }
        },
        listeners: [
            {
                fn: 'onTabpanelActivate',
                event: 'activate'
            }
        ]
    },

    onTabpanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        console.log("onTabpanelActivate");

    }

});