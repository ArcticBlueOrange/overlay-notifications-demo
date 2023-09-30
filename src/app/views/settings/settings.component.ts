import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'abo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    const mn = parseInt(localStorage.getItem('maxNotifications') || '10');
    const dd = parseInt(localStorage.getItem('destroyDelay') || '5000') / 1000;
    console.log(mn);
    console.log(dd);
    this.settingsForm = this.fb.group({
      // maxNotifications: [mn],
      // destroyDelay: [dd]
      maxNotifications: ['0'],
      destroyDelay: ['0']
    })
  }

  onSubmit() {
    const v = this.settingsForm.value;
    console.log(v)
    localStorage.setItem('maxNotifications', v.maxNotifications);
    localStorage.setItem('destroyDelay', `${v.destroyDelay * 1000}`);
    console.log("Saving")
  }

}
