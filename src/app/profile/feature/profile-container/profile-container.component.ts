import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { UserDataModel } from '../../../shared/data-access/user-data.model';
import { ProfileDataService } from '../../data-access/profile-data.service';

@Component({
  selector: 'app-profile-container',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
})
export class ProfileContainerComponent {
  constructor(
    private profileDataService: ProfileDataService,
    private snackbar: MatSnackBar
  ) {}
  userData: UserDataModel = {
    name: '',
    email: '',
    preferences: {
      budget: 0,
      defaultPage: '',
      customCategories: [],
    },
  };
  userDataFormGroup = new FormGroup({
    name: new FormControl(this.userData.name, Validators.required),
    email: new FormControl(this.userData.email, [
      Validators.email,
      Validators.required,
    ]),
    preferences: new FormGroup({
      budget: new FormControl(this.userData.preferences.budget, [
        Validators.required,
      ]),
      defaultPage: new FormControl(this.userData.preferences.defaultPage, [
        Validators.required,
      ]),
      customCategories: new FormControl(
        this.userData.preferences.customCategories
      ),
    }),
  });
  ngOnInit() {
    this.profileDataService.fetchProfileData().subscribe({
      next: (response) => {
        this.userDataFormGroup.value.name = response.name;
        this.userDataFormGroup.value.email = response.email;
        this.userDataFormGroup.value.preferences!.budget =
          response.preferences.budget;
        this.userDataFormGroup.value.preferences!.defaultPage =
          response.preferences.defaultPage;
        this.userDataFormGroup.value.preferences!.customCategories =
          response?.preferences?.customCategories || [];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  // updateProfileData(): void {
  //   const updatedProfileData: UserDataModel = {
  //     name: this.userDataFormGroup.value.name!,
  //     email: this.userDataFormGroup.value.email!,
  //     preferences: {
  //       budget: this.userDataFormGroup.value.preferences?.budget!,
  //       defaultPage: this.userDataFormGroup.value.preferences?.defaultPage!,
  //       customCategories:
  //         this.userDataFormGroup.value.preferences?.customCategories!,
  //     },
  //   };
  //   this.profileDataService.updateProfileData(updatedProfileData).subscribe({
  //     next: (response) => {
  //       this.snackbar.open('Userdata updated successfuly', 'Close');
  //     },
  //     error: (error) => {
  //       this.snackbar.open('Error while updating userdata', 'Close');
  //       console.log(error);
  //     },
  //   });
  // }
}
