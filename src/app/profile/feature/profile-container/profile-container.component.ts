import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { UserDataModel } from '../../../shared/data-access/user-data.model';
import { LogoutComponent } from '../../../shared/feature/logout/logout.component';
import { ProfileDataService } from '../../data-access/profile-data.service';

@Component({
  selector: 'app-profile-container',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LogoutComponent,
  ],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
})
export class ProfileContainerComponent {
  constructor(
    private profileDataService: ProfileDataService,
    private snackbar: MatSnackBar
  ) {}
  isEditing = false;
  buttonText = 'Edit';
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
    this.userDataFormGroup.disable();
    this.profileDataService.fetchProfileData().subscribe({
      next: (response) => {
        this.userDataFormGroup.setValue({
          name: response.name,
          email: response.email,
          preferences: {
            budget: response.preferences.budget || 0,
            defaultPage: response.preferences.defaultPage || '',
            customCategories: response.preferences.customCategories || [],
          },
        });
        this.generateUserProfilePicUrl();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  profile: string = '';
  generateUserProfilePicUrl(): string {
    if (!this.profile)
      return (this.profile =
        'https://api.dicebear.com/8.x/thumbs/svg?seed=' +
        this.userDataFormGroup.value.name);
    else return this.profile;
  }
  handleEditButtonPress() {
    if (!this.isEditing) {
      this.userDataFormGroup.enable();
      this.buttonText = 'Save';
      this.isEditing = true;
      // Make the call to update in the server
    } else {
      this.buttonText = 'Edit';
      this.isEditing = false;
      this.userDataFormGroup.disable();
      this.updateProfileData();
    }
  }
  updateProfileData(): void {
    const updatedProfileData: UserDataModel = {
      name: this.userDataFormGroup.value.name!,
      email: this.userDataFormGroup.value.email!,
      preferences: {
        budget: this.userDataFormGroup.value.preferences?.budget!,
        defaultPage: this.userDataFormGroup.value.preferences?.defaultPage!,
        customCategories:
          this.userDataFormGroup.value.preferences?.customCategories!,
      },
    };
    this.profileDataService.updateProfileData(updatedProfileData).subscribe({
      next: (response) => {
        this.snackbar.open('Userdata updated successfuly', 'Close');
        this.profile = '';
        this.generateUserProfilePicUrl();
      },
      error: (error) => {
        this.snackbar.open('Error while updating userdata', 'Close');
        console.log(error);
      },
    });
  }
}
