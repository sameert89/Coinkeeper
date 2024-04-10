export interface UserDataModel {
  name: string;
  email: string;
  preferences: PreferenceDataModel;
}

export interface PreferenceDataModel {
  budget: number;
  defaultPage: string;
  customCategories: string[];
}
