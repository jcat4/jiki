import { Injectable, ComponentFactoryResolver, Inject, ReflectiveInjector } from '@angular/core';
import {EditableSectionComponent} from "./editable-section/editable-section.component";

@Injectable()
export class AddSectionService {

  rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef){
    this.rootViewContainer  = viewContainerRef;
  }

  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(EditableSectionComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);
  }

}
