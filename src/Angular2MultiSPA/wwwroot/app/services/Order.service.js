"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var auth_service_1 = require('./auth.service');
var OrderService = (function () {
    function OrderService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    OrderService.prototype.getOrder = function (orderId) {
        return this.http.get('api/order/' + orderId.toString(), { headers: this.authService.jsonHeaders() })
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.getOrders = function () {
        return this.http.get('api/order', { headers: this.authService.jsonHeaders() })
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=Order.service.js.map