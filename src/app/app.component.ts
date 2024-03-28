import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
  listStatus = 'loaded';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(
    private router: Router,
    private readonly keycloakService: KeycloakService
  ) {
    this.keycloakService.loadUserProfile().then(profile => {
      this.email = profile.email;
      this.completeName = `${profile.firstName} ${profile.lastName}`;
    });
  }

  email = 'ze@ninguem.com'
  completeName = 'Zé Ninguem'

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloakService.loadUserProfile();
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  public logoff() {
    this.keycloakService.logout();
  }

  public profile() {
    // window.open(`${environment['KEYCLOAK_URL']}realms/${environment['KEYCLOAK_REALM']}/account/#/personal-info`, '_blank');
  }

}