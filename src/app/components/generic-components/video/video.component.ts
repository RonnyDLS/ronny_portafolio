import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [],
    templateUrl: './video.component.html',
    styleUrl: './video.component.css'
})
export class VideoComponent {

  @Input() urlVideo: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  
  constructor(private sanitizer: DomSanitizer){}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
