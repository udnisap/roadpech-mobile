/*
 * File: app/view/Welcome.js
 * Date: Sun Jul 14 2013 03:52:24 GMT+0530 (Sri Lanka Standard Time)
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

Ext.define('RoadPech.view.Welcome', {
    extend: 'Ext.Panel',
    alias: 'widget.welcomePanel',

    config: {
        fullscreen: true,
        html: '<h1>Welcome</h1>',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'button',
                docked: 'bottom',
                itemId: 'btnHide',
                margin: '20px',
                ui: 'action',
                text: 'Hide'
            },
            {
                xtype: 'checkboxfield',
                docked: 'bottom',
                itemId: 'hideNextTime',
                label: 'Do not show this window again',
                labelAlign: 'right',
                labelWidth: '',
                labelWrap: true
            }
        ],
        listeners: [
            {
                fn: 'onHideTap',
                event: 'tap',
                delegate: 'button#btnHide'
            }
        ]
    },

    onHideTap: function(button, e, eOpts) {
        if (this.down('checkboxfield#hideNextTime').isChecked()){
            localStorage.showWelcomeScreen = false;
        }else{
            localStorage.showWelcomeScreen = true;
        }
        this.destroy();
        RoadPech.app.redirectTo("map");
    }

});