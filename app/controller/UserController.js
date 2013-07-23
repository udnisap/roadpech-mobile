/*
 * File: app/controller/UserController.js
 * Date: Sun Jul 14 2013 02:59:26 GMT+0530 (Sri Lanka Standard Time)
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

Ext.define('RoadPech.controller.UserController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'User'
        ],
        stores: [
            'Users'
        ],
        views: [
            'RegistrationView'
        ],

        routes: {
            'login': 'loginHandler',
            'register': 'registerHandler'
        },

        refs: {
            fieldset: '#regTitle',
            username: '#username',
            email: '#email',
            password: '#password',
            btnYes: '#btnYes',
            btnNo: '#btnNo'
        },

        control: {
            "button#btnYes": {
                tap: 'onYesTap'
            },
            "button#btnNo": {
                tap: 'onNoTap'
            }
        }
    },

    onYesTap: function(button, e, eOpts) {
        var username = this.getUsername().text();
        var password = this.getPassword().text();

        if(button.getText()=="Register"){
            var email = this.getEmail().text();
            this.Register(username, email, password);

        }else if (button.getText()=="Login"){
            this.Login(username, password);
        }

    },

    onNoTap: function(button, e, eOpts) {

    },

    loginHandler: function() {
        console.log('sd');
        this.getFieldset().setTitle("Login");
        this.getUsername().hide();
        this.getBtnYes().setText('Login');
        this.getBtnNo().setText('Register');
    },

    registerHandler: function() {
        this.getFieldset().setTitle("Register");
        this.getUsername().show();
        this.getBtnNo().setText('Login');
        this.getBtnYes().setText('Register');
        console.log('sd');
    },

    Login: function(username, password) {
        console.log('Login in with '+username+" "+password);
    },

    Register: function(username, email, password) {
        console.log('Login in with '+username+" "+email+" "+password);
    }

});