import { Injectable, ComponentRef, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { MyLibComponent } from './my-lib/my-lib.component'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationRef?: ComponentRef<MyLibComponent>;

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  showMessage(message: string) {
    if (this.notificationRef) {
      this.notificationRef.destroy(); // Eliminar notificación previa si existe
    }

    // Crear el componente de notificación
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyLibComponent);
    this.notificationRef = factory.create(this.injector);

    // Pasar el mensaje
    this.notificationRef.instance.message = message;
    this.notificationRef.instance.closeEvent.subscribe(() => this.close());

    // Adjuntar al DOM
    this.appRef.attachView(this.notificationRef.hostView);
    document.body.appendChild(this.notificationRef.location.nativeElement);

    // Auto cerrar después de 5 segundos
    setTimeout(() => this.close(), 5000*2);
  }

  close() {
    if (this.notificationRef) {
      this.appRef.detachView(this.notificationRef.hostView);
      this.notificationRef.destroy();
      this.notificationRef = undefined;
    }
  }
}
