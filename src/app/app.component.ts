import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weather';
  IsChangeLocation=false;
  TodayDate: Date;
  weatherData: any;
  cityName: any;
  showCel=false;
  showFar=false;

  constructor(private service:CommonService){
    this.TodayDate = new Date();
  }

  changeLocation(){
    debugger
    this.IsChangeLocation = this.IsChangeLocation==true?false:true;
  }

  getWeatherDataByCity(){
    
    var city = $("#CityName").val();
    this.service.getWeatherData(city).subscribe(data=>{
      if(!data)
      console.log("Input a real city name")
      this.cityName = city;
      console.log('data',data)
      this.weatherData = data;
    
     
    })
  }
  transform(value: number): number {
    return Math.round(value);
  }
  disableFar(){
    debugger
    this.showFar=true;
    this.showCel=false;

  }
  DisableCel(){
    debugger
    this.showFar=false;
    this.showCel=true;

  }

}
