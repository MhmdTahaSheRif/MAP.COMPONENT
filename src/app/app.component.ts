import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('emc', { static: true }) emcRef!: ElementRef;

  triggerZoomToLayer(): void {
    const event = new CustomEvent('zoomToLayer', {
      detail: { MapLayerCode: 1 },
    });
    this.dispatchToMap(event);
  }

  triggerZoomToFeature(): void {
    const event = new CustomEvent('zoomToFeature', {
      detail: { MapLayerCode: 1, FeatureID: 19 },
    });
    this.dispatchToMap(event);
  }

  triggerIdentifyFeature(): void {
    const event = new CustomEvent('identifyFeature', {
      detail: { MapLayerCode: 9, FeatureID: 123456789012345 },
    });
    this.dispatchToMap(event);
  }

  private dispatchToMap(event: CustomEvent): void {
    if (this.emcRef?.nativeElement) {
      this.emcRef.nativeElement.dispatchEvent(event);
    } else {
      console.error('❌ Enterprise Map Control is not initialized.');
    }
  }
}
