import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirebaseService } from './services/firebase/firebase.service';
import { FeatureSection } from './models/type/firebase.type';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortafolio';

  @ViewChild('cambios', { read: ViewContainerRef }) cambios!: ViewContainerRef;
  navContent: ComponentRef<NavbarComponent>;
  bienvenidaContent: ComponentRef<BienvenidaComponent>;

  constructor(private readonly fb: FirebaseService){}

  async ngAfterViewInit(): Promise<void> {
    const featureSection: FeatureSection = await this.fb.getFeatureSection();

    if(featureSection.animatePortfolioIntro) {
      this.bienvenidaContent = this.cambios.createComponent(BienvenidaComponent);
      setTimeout(()=>{
        this.bienvenidaContent.destroy()
        this.cambios.createComponent(NavbarComponent);
      }, 4000)
    } else {
      this.cambios.createComponent(NavbarComponent);
    }
  }
}
