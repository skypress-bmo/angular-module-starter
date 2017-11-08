/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './angular-module-starter.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './angular-module-starter.service';
import * as import9 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_AngularModuleStarterComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AngularModuleStarterComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AngularModuleStarterComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AngularModuleStarterComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AngularModuleStarterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AngularModuleStarterComponent>;
  _AngularModuleStarterComponent_0_3:Wrapper_AngularModuleStarterComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AngularModuleStarterComponent_Host0,renderType_AngularModuleStarterComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'angular-module-starter',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AngularModuleStarterComponent0(this.viewUtils,this,0,this._el_0);
    this._AngularModuleStarterComponent_0_3 = new Wrapper_AngularModuleStarterComponent(this.injectorGet(import8.AngularModuleStarterService,this.parentIndex));
    this.compView_0.create(this._AngularModuleStarterComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AngularModuleStarterComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AngularModuleStarterComponent) && (0 === requestNodeIndex))) { return this._AngularModuleStarterComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AngularModuleStarterComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AngularModuleStarterComponentNgFactory:import7.ComponentFactory<import0.AngularModuleStarterComponent> = new import7.ComponentFactory<import0.AngularModuleStarterComponent>('angular-module-starter',View_AngularModuleStarterComponent_Host0,import0.AngularModuleStarterComponent);
const styles_AngularModuleStarterComponent:any[] = ([] as any[]);
var renderType_AngularModuleStarterComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AngularModuleStarterComponent,{});
export class View_AngularModuleStarterComponent0 extends import1.AppView<import0.AngularModuleStarterComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AngularModuleStarterComponent0,renderType_AngularModuleStarterComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_4 = import9.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = import3.inlineInterpolate(1,'',this.context.message,'');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_2,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
}