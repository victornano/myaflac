import { Component, ElementRef, ViewChild } from '@angular/core';
import { CameraResultType, Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'aflac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('imageElement')
  imageElement: ElementRef;

  async handleOpenCameraClick() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    this.imageElement.nativeElement.src = image.webPath;
  }

}
