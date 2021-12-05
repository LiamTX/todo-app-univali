import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    // @ts-ignore
    can: boolean;

    constructor(private userService: UserService, private router: Router) { }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            this.userService.verifyAuth().subscribe(resp => {
                if (resp) {
                    resolve(true);
                }
            }, err => {
                this.router.navigate(['login'])
                resolve(false);
            });
        });
    }
}