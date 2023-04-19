import { Component } from '@angular/core';
import { ZodiacService } from '../zodiac.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {

  public _birthdate!: Date;
  public _zodiacSign: string = "";

  public sign!: string;
  public day!: string;

  constructor(private zodiacService: ZodiacService) {}

  ngOnInit(): void {
    this._birthdate = new Date();
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  get zodiacSign(): string {
    return this._zodiacSign;
  }

  onBirthdateSelected() {
    const day = this._birthdate.getDate().toString();
    const month = (this._birthdate.getMonth() + 1).toString();
    const year = this._birthdate.getFullYear().toString();
    const sign = this.getZodiacSign(day, month);
    this.zodiacService.getZodiacSign(sign, 'today').subscribe(
      (response: any) => {
        this._zodiacSign = response.description;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getZodiacSign(day: string, month: string): string {
    const zodiacSigns = [
      { name: 'Capricorn', start: '01-01', end: '01-19' },
      { name: 'Aquarius', start: '01-20', end: '02-18' },
      { name: 'Pisces', start: '02-19', end: '03-20' },
      { name: 'Aries', start: '03-21', end: '04-19' },
      { name: 'Taurus', start: '04-20', end: '05-20' },
      { name: 'Gemini', start: '05-21', end: '06-20' },
      { name: 'Cancer', start: '06-21', end: '07-22' },
      { name: 'Leo', start: '07-23', end: '08-22' },
      { name: 'Virgo', start: '08-23', end: '09-22' },
      { name: 'Libra', start: '09-23', end: '10-22' },
      { name: 'Scorpio', start: '10-23', end: '11-21' },
      { name: 'Sagittarius', start: '11-22', end: '12-21' },
      { name: 'Capricorn', start: '12-22', end: '12-31' },
    ];
  
    const birthdate = `${month}-${day}`;
  
    for (const sign of zodiacSigns) {
      if (
        birthdate >= sign.start &&
        birthdate <= sign.end
      ) {
        return sign.name;
      }
    }
    return 'GOVNO';
  }
}