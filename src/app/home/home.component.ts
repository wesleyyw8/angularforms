import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Other"];
  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster) {

  }
  submitForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage)
    if (this.hasPrimaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model);
  }

  validatePrimaryLanguage(value) {
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}
