import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: null
})

export class RouteguardService implements CanActivate{
    canActivate(){
        return true;
    }

}