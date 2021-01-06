import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myresume';
  isDark = false
  animateHero: AnimationOptions = {
    path: '/assets/img/drawkit-grape-animation-2-LOOP.json',
    loop: true,
    autoplay: true,
  };

  animateConnectOne: AnimationOptions = {
    path: 'assets/img/drawkit-grape-animation-8-LOOP.json',
    loop: true,
    autoplay: true,
  }

  animateConnectTwo: AnimationOptions = {
    path: 'assets/img/drawkit-grape-animation-7-LOOP.json',
    loop: true,
    autoplay: true,
  }

  animateConnectThree: AnimationOptions = {
    path: 'assets/img/drawkit-grape-animation-6-LOOP.json',
    loop: true,
    autoplay: true,
  }

  animateConnectFooter: AnimationOptions = {
    path: 'assets/img/drawkit-grape-animation-4-LOOP.json',
    loop: true,
    autoplay: true,
  }

  onChangeTheme(e) {
    //dark and light template trigger 
    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000)
    }
    if (e.target.checked) {
      trans()
      document.documentElement.setAttribute('data-template', 'dark')
    } else {
      trans()
      document.documentElement.setAttribute('data-template', 'light')
    }
  }
}
