import{a as X}from"./chunk-BP5HCOGR.js";import{C as ke,b as Ne,h as Oe,q as Se,t as je}from"./chunk-FF5WFXL7.js";import{d as K,l as Fe,m as Re,u as re,v as se,x as j,y as k,z as de}from"./chunk-VLQVHMOJ.js";import{A as E,Ab as ne,Ca as J,Cb as m,Db as ie,Eb as v,G as ge,Gb as Ie,Hb as Te,Ib as ae,Jb as oe,Kb as M,Lb as x,Nb as P,Ob as Me,Pb as F,Q as xe,Qb as R,Rb as N,Sa as h,Ta as s,Va as ee,Xa as ye,Y as b,Zb as O,_ as w,ac as S,bb as Q,bc as Pe,db as be,e as q,eb as B,fa as g,fb as I,ga as A,ha as C,ia as _,j as Y,jb as D,kb as te,l as ue,lb as f,mb as we,na as G,nb as U,oa as W,pa as Z,pb as $,qa as _e,rb as Ce,sa as ve,sb as De,tb as c,ub as p,va as z,vb as Ee,wa as u,wb as T,xb as Ae,z as fe}from"./chunk-KVYNTSTH.js";var He=new w("CdkAccordion");var et=0,Ve=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,i,a){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=a,this._openCloseAllSubscription=q.EMPTY,this.closed=new u,this.opened=new u,this.destroyed=new u,this.expandedChange=new u,this.id=`cdk-accordion-child-${et++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=a.listen((d,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==d&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(i){return new(i||e)(s(He,12),s(O),s(X))},e.\u0275dir=_({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[g.HasDecoratorInputTransform,"expanded","expanded",S],disabled:[g.HasDecoratorInputTransform,"disabled","disabled",S]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[F([{provide:He,useValue:void 0}]),I]});let n=e;return n})(),Le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=b({});let n=e;return n})();var H=class{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},le=class extends H{constructor(e,o,t,i,a){super(),this.component=e,this.viewContainerRef=o,this.injector=t,this.componentFactoryResolver=i,this.projectableNodes=a}},V=class extends H{constructor(e,o,t,i){super(),this.templateRef=e,this.viewContainerRef=o,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(e,o=this.context){return this.context=o,super.attach(e)}detach(){return this.context=void 0,super.detach()}},pe=class extends H{constructor(e){super(),this.element=e instanceof z?e.nativeElement:e}},he=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof le)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof V)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof pe)return this._attachedPortal=e,this.attachDomPortal(e)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var qe=(()=>{let e=class e extends he{constructor(t,i,a){super(),this._componentFactoryResolver=t,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new u,this.attachDomPortal=d=>{this._document;let r=d.element;r.parentNode;let l=this._document.createComment("dom-portal");d.setAttachedHost(this),r.parentNode.insertBefore(l,r),this._getRootNode().appendChild(r),this._attachedPortal=d,super.setDisposeFn(()=>{l.parentNode&&l.parentNode.replaceChild(r,l)})},this._document=a}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,d=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r=i.createComponent(d,i.length,t.injector||i.injector,t.projectableNodes||void 0);return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}};e.\u0275fac=function(i){return new(i||e)(s(ye),s(Q),s(K))},e.\u0275dir=_({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[g.None,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[B]});let n=e;return n})();var ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=b({});let n=e;return n})();var at=["body"],ot=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],rt=["mat-expansion-panel-header","*","mat-action-row"];function st(n,e){}var dt=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ct=["mat-panel-title","mat-panel-description","*"];function lt(n,e){if(n&1&&(c(0,"span",1),_e(),c(1,"svg",2),Ee(2,"path",3),p()()),n&2){let o=m();f("@indicatorRotate",o._getExpandedState())}}var Qe=new w("MAT_ACCORDION"),Be="225ms cubic-bezier(0.4,0.0,0.2,1)",$e={indicatorRotate:re("indicatorRotate",[k("collapsed, void",j({transform:"rotate(0deg)"})),k("expanded",j({transform:"rotate(180deg)"})),de("expanded <=> collapsed, void => collapsed",se(Be))]),bodyExpansion:re("bodyExpansion",[k("collapsed, void",j({height:"0px",visibility:"hidden"})),k("expanded",j({height:"*",visibility:""})),de("expanded <=> collapsed, void => collapsed",se(Be))])},Ke=new w("MAT_EXPANSION_PANEL"),pt=(()=>{let e=class e{constructor(t,i){this._template=t,this._expansionPanel=i}};e.\u0275fac=function(i){return new(i||e)(s(ee),s(Ke,8))},e.\u0275dir=_({type:e,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let n=e;return n})(),ht=0,Xe=new w("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),me=(()=>{let e=class e extends Ve{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,a,d,r,l,L){super(t,i,a),this._viewContainerRef=d,this._animationMode=l,this._hideToggle=!1,this.afterExpand=new u,this.afterCollapse=new u,this._inputChanges=new Y,this._headerId=`mat-expansion-panel-header-${ht++}`,this.accordion=t,this._document=r,this._animationsDisabled=l==="NoopAnimations",L&&(this.hideToggle=L.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(xe(null),E(()=>this.expanded&&!this._portal),ge(1)).subscribe(()=>{this._portal=new V(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}_animationStarted(t){!Ue(t)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(t){Ue(t)||(t.toState==="expanded"?this.afterExpand.emit():t.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};e.\u0275fac=function(i){return new(i||e)(s(Qe,12),s(O),s(X),s(Q),s(K),s(J,8),s(Xe,8))},e.\u0275cmp=A({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(i,a,d){if(i&1&&Ie(d,pt,5),i&2){let r;ae(r=oe())&&(a._lazyContent=r.first)}},viewQuery:function(i,a){if(i&1&&Te(at,5),i&2){let d;ae(d=oe())&&(a._body=d.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,a){i&2&&U("mat-expanded",a.expanded)("_mat-animation-noopable",a._animationsDisabled)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[g.HasDecoratorInputTransform,"hideToggle","hideToggle",S],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[F([{provide:Qe,useValue:void 0},{provide:Ke,useExisting:e}]),I,B,G,R],ngContentSelectors:rt,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,a){if(i&1){let d=Ae();ie(ot),v(0),c(1,"div",1,0),ne("@bodyExpansion.start",function(l){return W(d),Z(a._animationStarted(l))})("@bodyExpansion.done",function(l){return W(d),Z(a._animationDone(l))}),c(3,"div",2),v(4,1),D(5,st,0,0,"ng-template",3),p(),v(6,2),p()}i&2&&(h(),f("@bodyExpansion",a._getExpandedState())("id",a.id),te("aria-labelledby",a._headerId),h(4),f("cdkPortalOutlet",a._portal))},dependencies:[qe],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[$e.bodyExpansion]},changeDetection:0});let n=e;return n})();function Ue(n){return n.fromState==="void"}var Ye=(()=>{let e=class e{constructor(t,i,a,d,r,l,L){this.panel=t,this._element=i,this._focusMonitor=a,this._changeDetectorRef=d,this._animationMode=l,this._parentChangeSubscription=q.EMPTY,this.tabIndex=0;let Ze=t.accordion?t.accordion._stateChanges.pipe(E(y=>!!(y.hideToggle||y.togglePosition))):ue;this.tabIndex=parseInt(L||"")||0,this._parentChangeSubscription=fe(t.opened,t.closed,Ze,t._inputChanges.pipe(E(y=>!!(y.hideToggle||y.disabled||y.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(E(()=>t._containsFocus())).subscribe(()=>a.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Oe(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(i){return new(i||e)(s(me,1),s(z),s(Se),s(O),s(Xe,8),s(J,8),ve("tabindex"))},e.\u0275cmp=A({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,a){i&1&&ne("click",function(){return a._toggle()})("keydown",function(r){return a._keydown(r)}),i&2&&(te("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),we("height",a._getHeaderHeight()),U("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before")("_mat-animation-noopable",a._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[g.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>t==null?0:Pe(t)]},standalone:!0,features:[I,R],ngContentSelectors:ct,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,a){i&1&&(ie(dt),c(0,"span",0),v(1),v(2,1),v(3,2),p(),D(4,lt,3,1,"span",1)),i&2&&(U("mat-content-hide-toggle",!a._showToggle()),h(4),$(4,a._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[$e.indicatorRotate]},changeDetection:0});let n=e;return n})();var Ge=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=_({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let n=e;return n})();var We=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=b({imports:[je,Le,ze]});let n=e;return n})();var ut=(n,e)=>e.id;function ft(n,e){if(n&1&&T(0,5),n&2){let o=m().$implicit;m();let t=M(4);f("ngTemplateOutlet",t)("ngTemplateOutletContext",o)}}function gt(n,e){if(n&1&&T(0,5),n&2){let o=m().$implicit;m();let t=M(6);f("ngTemplateOutlet",t)("ngTemplateOutletContext",o)}}function xt(n,e){if(n&1&&T(0,5),n&2){let o=m().$implicit;m();let t=M(8);f("ngTemplateOutlet",t)("ngTemplateOutletContext",o)}}function _t(n,e){if(n&1&&T(0,5),n&2){let o=m().$implicit;m();let t=M(10);f("ngTemplateOutlet",t)("ngTemplateOutletContext",o)}}function vt(n,e){n&1&&x(0," INVALID ")}function yt(n,e){if(n&1&&(c(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),x(3),p()(),c(4,"div"),D(5,ft,1,2,"ng-container",5)(6,gt,1,2)(7,xt,1,2)(8,_t,1,2)(9,vt,1,0),p()()),n&2){let o=e.$implicit,t=e.$index;h(3),Me("",t+1,". ",o.question,""),h(2),$(5,o.ansType=="text"?5:o.ansType=="bullents"?6:o.ansType=="tabular"?7:o.ansType=="codeSnippet"?8:9)}}function bt(n,e){n&1&&(c(0,"div"),x(1,"No questions to display"),p())}function wt(n,e){if(n&1&&(c(0,"p"),x(1),p()),n&2){let o=e.ansType;h(),P("This is a text: ",o,"")}}function Ct(n,e){if(n&1&&(c(0,"p"),x(1),p()),n&2){let o=e.ansType;h(),P("This is a bullents: ",o,"")}}function Dt(n,e){if(n&1&&(c(0,"p"),x(1),p()),n&2){let o=e.ansType;h(),P("This is a tabular: ",o,"")}}function Et(n,e){if(n&1&&(c(0,"p"),x(1),p()),n&2){let o=e.ansType;h(),P("This is a codeSnippet: ",o,"")}}var An=(()=>{let e=class e{constructor(t){this.sharedService=t,this.panelOpenState=be(!1),this.qaList=[]}ngOnInit(){this.sharedService.getQAList("angularQA.json").subscribe(i=>{this.qaList=i})}};e.\u0275fac=function(i){return new(i||e)(s(ke))},e.\u0275cmp=A({type:e,selectors:[["app-angular"]],standalone:!0,features:[R],decls:11,vars:1,consts:[["text",""],["bullents",""],["tabular",""],["codeSnippet",""],[2,"margin-bottom","5px"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,a){i&1&&(Ce(0,yt,10,3,"mat-expansion-panel",4,ut,!1,bt,2,0,"div"),D(3,wt,2,1,"ng-template",null,0,N)(5,Ct,2,1,"ng-template",null,1,N)(7,Dt,2,1,"ng-template",null,2,N)(9,Et,2,1,"ng-template",null,3,N)),i&2&&De(a.qaList)},dependencies:[We,me,Ye,Ge,Ne,Re,Fe]});let n=e;return n})();export{An as AngularComponent};
