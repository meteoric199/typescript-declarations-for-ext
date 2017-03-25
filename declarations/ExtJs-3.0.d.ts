// Ext type declarations (Typescript 1.4 or newer) generated on Sat Mar 25 2017 08:03:14 GMT+0800 (中国标准时间)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static BLANK_IMAGE_URL: string;
    static SSL_SECURE_URL: string;
    static USE_NATIVE_JSON: boolean;
    static emptyFn: Function;
    static enableFx: boolean;
    static enableGarbageCollector: boolean;
    static enableListenerCollection: boolean;
    static isAir: boolean;
    static isBorderBox: boolean;
    static isChrome: boolean;
    static isGecko: boolean;
    static isGecko2: boolean;
    static isGecko3: boolean;
    static isIE: boolean;
    static isIE6: boolean;
    static isIE7: boolean;
    static isIE8: boolean;
    static isLinux: boolean;
    static isMac: boolean;
    static isOpera: boolean;
    static isReady: boolean;
    static isSafari: boolean;
    static isSafari2: boolean;
    static isSafari3: boolean;
    static isSafari4: boolean;
    static isSecure: boolean;
    static isStrict: boolean;
    static isWebKit: boolean;
    static isWindows: boolean;
    static useShims: boolean;
    static ux: any;
    static version: string;
    static addBehaviors(obj: any):void;
    static apply(obj: any, config: any, defaults: any):any;
    static applyIf(obj: any, config: any):any;
    static clean(arr: any[]|NodeList):any[];
    static copyTo(The: any, Either: any[]|string):any;
    static decode(json: string, safe?: boolean):any;
    static destroy(arg1: any, arg2?: any, etc?: any):void;
    static destroyMembers(o: any, arg1: any, etc: any):void;
    static each(array: any, fn: Function, scope: any):void;
    static encode(o: any):string;
    static escapeRe(str: string):string;
    static extend(subclass: Function, superclass: Function, overrides?: any):Function;
    static flatten(arr: any[]):any[];
    static fly(el: string|HTMLElement, named?: string):any;
    static get(el: any):any;
    static getBody():any;
    static getCmp(id: string):any;
    static getDoc():any;
    static getDom(el: any):any;
    static id(el?: any, prefix?: string):string;
    static invoke(arr: any[]|NodeList, methodName: string, undefined: any):any[];
    static isArray(object: any):boolean;
    static isBoolean(v: any):boolean;
    static isDate(object: any):boolean;
    static isDefined(v: any):boolean;
    static isEmpty(value: any, allowBlank?: boolean):boolean;
    static isFunction(object: any):boolean;
    static isNumber(v: any):boolean;
    static isObject(object: any):boolean;
    static isPrimitive(value: any):boolean;
    static isString(v: any):boolean;
    static iterate(object: any, fn: Function, scope: any):void;
    static max(arr: any[]|NodeList, comp?: Function):any;
    static mean(arr: any[]):number;
    static min(arr: any[]|NodeList, comp?: Function):any;
    static namespace(namespace1: string, namespace2: string, etc: string):void;
    static num(value: any, defaultValue: number):number;
    static onReady(fn: Function, scope: any, options?: boolean):void;
    static override(origclass: any, overrides: any):void;
    static partition(arr: any[]|NodeList, truth?: Function):any[];
    static pluck(arr: any[]|NodeList, prop: string):any[];
    static preg(ptype: string, cls: any):void;
    static query(path: string, root?: any):any[];
    static reg(xtype: string, cls: any):void;
    static removeNode(node: HTMLElement):void;
    static select(selector: string|any[], unique?: boolean, root?: HTMLElement|string):any;
    static sum(arr: any[]):number;
    static toArray(the: any):any;
    static type(object: any):string;
    static unique(arr: any[]):any[];
    static urlAppend(url: string, s: string):any;
    static urlDecode(string: string, overwrite?: boolean):any;
    static urlEncode(o: any, pre?: string):string;
    static value(value: any, defaultValue: any, allowBlank?: boolean):any;
    static zip(arr: any, zipper?: Function):any[];
}
declare module Ext {
    export class Action {
        disabled: boolean;
        handler: Function;
        hidden: boolean;
        iconCls: string;
        itemId: string;
        scope: any;
        text: string;
        constructor(config: any);
        disable():void;
        each(fn: Function, scope: any):void;
        enable():void;
        execute(arg1?: any, arg2?: any, etc?: any):void;
        getIconClass():void;
        getText():void;
        hide():void;
        isDisabled():void;
        isHidden():void;
        setDisabled(disabled: boolean):void;
        setHandler(fn: Function, scope: any):void;
        setHidden(hidden: boolean):void;
        setIconClass(cls: string):void;
        setText(text: string):void;
        show():void;
    }
    export class Ajax {
        static autoAbort: boolean;
        static defaultHeaders: any;
        static disableCaching: boolean;
        static extraParams: any;
        static method: string;
        static timeout: number;
        static url: string;
        static abort(transactionId?: number):void;
        static addEvents(object: any):void;
        static addListener(eventName: string, handler: Function, scope?: any, options?: any):void;
        static enableBubble(events: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static hasListener(eventName: string):boolean;
        static isLoading(transactionId?: number):boolean;
        static on(eventName: string, handler: Function, scope?: any, options?: any):void;
        static purgeListeners():void;
        static relayEvents(o: any, events: any[]):void;
        static removeListener(eventName: string, handler: Function, scope?: any):void;
        static request(options: any):number;
        static resumeEvents():void;
        static serializeForm(form: string|HTMLElement):string;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, handler: Function, scope?: any):void;
    }
    export class BoxComponent extends Ext.Component {
        autoHeight: boolean;
        autoWidth: boolean;
        height: number;
        margins: any;
        pageX: number;
        pageY: number;
        region: string;
        width: number;
        x: number;
        y: number;
        constructor(config: any);
        getBox(local?: boolean):any;
        getHeight():number;
        getOuterSize():any;
        getPosition(local?: boolean):any[];
        getResizeEl():void;
        getSize():any;
        getWidth():number;
        setHeight(height: number):Ext.BoxComponent;
        setPagePosition(x: number, y: number):Ext.BoxComponent;
        setPosition(left: number, top: number):Ext.BoxComponent;
        setSize(width: any, height: any):Ext.BoxComponent;
        setWidth(width: number):Ext.BoxComponent;
        syncSize():Ext.BoxComponent;
        updateBox(box: any):Ext.BoxComponent;
    }
    export class Button extends Ext.BoxComponent {
        allowDepress: boolean;
        arrowAlign: string;
        buttonSelector: string;
        clickEvent: string;
        enableToggle: boolean;
        handleMouseEvents: boolean;
        handler: Function;
        icon: string;
        iconAlign: string;
        iconCls: string;
        menuAlign: string;
        minWidth: number;
        overflowText: string;
        repeat: any;
        scale: string;
        scope: any;
        tabIndex: number;
        template: Ext.Template;
        text: string;
        toggleGroup: string;
        toggleHandler: Function;
        tooltip: any;
        tooltipType: string;
        type: string;
        btnEl: Ext.Element;
        menu: any;
        pressed: boolean|boolean;
        constructor(config: any);
        getPressed(group: string):any;
        getTemplateArgs():any;
        getText():string;
        hasVisibleMenu():boolean;
        hideMenu():Ext.Button;
        setHandler(handler: Function, scope?: any):Ext.Button;
        setIconClass(cls: string):Ext.Button;
        setText(text: string):Ext.Button;
        setTooltip(tooltip: any):Ext.Button;
        showMenu():Ext.Button;
        toggle(state?: boolean, supressEvent?: boolean):Ext.Button;
    }
    export class ButtonGroup extends Ext.Panel {
        columns: number;
        constructor(config: any);
    }
    export class ColorPalette extends Ext.Component {
        allowReselect: boolean;
        tpl: string;
        value: string;
        colors: any[];
        constructor(config: any);
        select(color: string):void;
    }
    export class Component extends Ext.util.Observable {
        allowDomMove: boolean;
        anchor: string;
        applyTo: any;
        autoEl: any;
        autoShow: boolean;
        clearCls: string;
        cls: string;
        ctCls: string;
        disabled: boolean;
        disabledClass: string;
        fieldLabel: string;
        hidden: boolean;
        hideLabel: boolean;
        hideMode: string;
        hideParent: boolean;
        id: string;
        itemCls: string;
        itemId: string;
        labelSeparator: string;
        labelStyle: string;
        overCls: string;
        plugins: any;
        ptype: string;
        ref: string;
        renderTo: any;
        stateEvents: any[];
        stateId: string;
        stateful: boolean;
        style: string;
        xtype: string;
        '': boolean;
        el: Ext.Element;
        initialConfig: any;
        ownerCt: Ext.Container;
        rendered: boolean;
        constructor(config: any);
        addClass(cls: string):Ext.Component;
        applyToMarkup(el: string|HTMLElement):void;
        cloneConfig(overrides: any):Ext.Component;
        destroy():void;
        disable(silent: any):Ext.Component;
        enable():Ext.Component;
        findParentBy(fn: Function):Ext.Container;
        findParentByType(xtype: any):Ext.Container;
        focus(selectText?: boolean, delay?: boolean|number):Ext.Component;
        getBubbleTarget():Ext.Container;
        getEl():Ext.Element;
        getId():string;
        getItemId():string;
        getXType():string;
        getXTypes():string;
        hide():Ext.Component;
        isVisible():boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        nextSibling():any;
        previousSibling():any;
        removeClass(cls: string):Ext.Component;
        render(container?: any, position?: string|number):Ext.Component;
        setDisabled(disabled: boolean):Ext.Component;
        setVisible(visible: boolean):Ext.Component;
        show():Ext.Component;
    }
    export class ComponentMgr {
        static all: any;
        static create(config: any, defaultType: any):Ext.Component;
        static createPlugin(config: any, defaultType: any):Ext.Component;
        static get(id: string):any;
        static isRegistered(xtype: Ext.Component):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(c: Ext.Component):void;
        static registerPlugin(ptype: string, cls: any):void;
        static registerType(xtype: string, cls: any):void;
        static unregister(c: Ext.Component):void;
    }
    export class CompositeElement extends Ext.CompositeElementLite {
        add(els: string|any[]):any;
    }
    export class CompositeElementLite {
        clear():void;
        contains(el: any):any;
        each(fn: Function, scope?: any):any;
        fill(els: string|any[]):any;
        filter(selector: string):any;
        first():Ext.Element;
        getCount():any;
        indexOf(el: any):any;
        item(index: number):Ext.Element;
        last():Ext.Element;
        removeElement(el: any, removeDom?: boolean):any;
        replaceElement(el: any, replacement: any, domReplace?: boolean):any;
    }
    export class Container extends Ext.BoxComponent {
        activeItem: string|number;
        autoDestroy: boolean;
        bufferResize: boolean|number;
        defaultType: string;
        defaults: any;
        forceLayout: boolean;
        hideBorders: boolean;
        layout: any;
        layoutConfig: any;
        monitorResize: boolean;
        items: any;
        constructor(config: any);
        add(component: any, undefined?: any):Ext.Component;
        bubble(fn: Function, scope?: any, args?: any[]):Ext.Container;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.Container;
        doLayout(shallow?: boolean, force?: boolean):Ext.Container;
        find(prop: string, value: string):any[];
        findBy(fn: Function, scope?: any):any[];
        findById(id: string):any;
        findByType(xtype: any, shallow?: boolean):any[];
        get(key: string|number):Ext.Component;
        getComponent(comp: string|number):any;
        getLayout():any;
        getLayoutTarget():Ext.Element;
        insert(index: number, component: Ext.Component):Ext.Component;
        remove(component: any, autoDestroy?: boolean):Ext.Component;
        removeAll(autoDestroy?: boolean):any[];
    }
    export class CycleButton extends Ext.SplitButton {
        changeHandler: Function;
        forceIcon: string;
        items: any[];
        prependText: string;
        showText: boolean;
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent: boolean):void;
        toggleSelected():void;
    }
    export class DataView extends Ext.BoxComponent {
        deferEmptyText: boolean;
        emptyText: string;
        itemSelector: string;
        loadingText: string;
        multiSelect: boolean;
        overClass: string;
        selectedClass: string;
        simpleSelect: boolean;
        singleSelect: boolean;
        store: Ext.data.Store;
        tpl: string|any[];
        trackOver: boolean;
        constructor(config: any);
        bindStore(store: any):void;
        clearSelections(suppressEvent?: boolean):void;
        collectData(records: any[], startIndex: number):any[];
        deselect(node: HTMLElement|number):void;
        findItemFromChild(node: HTMLElement):HTMLElement;
        getNode(nodeInfo: HTMLElement|string|number):HTMLElement;
        getNodes(start?: number, end?: number):any[];
        getRecord(node: HTMLElement):any;
        getRecords(nodes: any[]):any[];
        getSelectedIndexes():any[];
        getSelectedNodes():any[];
        getSelectedRecords():any[];
        getSelectionCount():number;
        getStore():Ext.data.Store;
        indexOf(nodeInfo: HTMLElement|string|number):number;
        isSelected(node: HTMLElement|number):boolean;
        prepareData(data: any, recordIndex: number, record: any):any;
        refresh():void;
        refreshNode(index: number):void;
        select(nodeInfo: any[]|HTMLElement|string|number, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectRange(start: number, end: number, keepExisting?: boolean):void;
        setStore(store: any):void;
    }
    export class DatePicker extends Ext.Component {
        cancelText: string;
        dayNames: any[];
        disabledDates: any[];
        disabledDatesRE: RegExp;
        disabledDatesText: string;
        disabledDays: any[];
        disabledDaysText: string;
        format: string;
        maxDate: Date;
        maxText: string;
        minDate: Date;
        minText: string;
        monthNames: any[];
        monthYearText: string;
        nextText: string;
        okText: string;
        prevText: string;
        showToday: boolean;
        startDay: number;
        todayText: string;
        todayTip: string;
        constructor(config: any);
        getValue():Date;
        setDisabledDates(disabledDates: any[]|RegExp):void;
        setDisabledDays(disabledDays: any[]):void;
        setMaxDate(value: Date):void;
        setMinDate(value: Date):void;
        setValue(value: Date):void;
    }
    export class Direct {
        static eventTypes: any;
        static exceptions: any;
        static addEvents(object: any):void;
        static addListener(eventName: string, handler: Function, scope?: any, options?: any):void;
        static addProvider(provider: any):void;
        static enableBubble(events: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getProvider(id: string):void;
        static hasListener(eventName: string):boolean;
        static on(eventName: string, handler: Function, scope?: any, options?: any):void;
        static purgeListeners():void;
        static relayEvents(o: any, events: any[]):void;
        static removeListener(eventName: string, handler: Function, scope?: any):void;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, handler: Function, scope?: any):void;
    }
    export class DomHelper {
        static useDom: boolean;
        static applyStyles(el: string|HTMLElement, styles: any):void;
        static createDom(o: any):HTMLElement;
        static createTemplate(o: any):Ext.Template;
        static insertHtml(where: string, el: HTMLElement, html: string):HTMLElement;
        static markup(o: any):string;
        static overwrite(el: any, o: any, returnElement?: boolean):HTMLElement|Ext.Element;
    }
    export class DomQuery {
        static matchers: any[];
        static operators: any;
        static pseudos: any;
        static compile(selector: string, type?: string):Function;
        static filter(el: any[], selector: string, nonMatches: boolean):any[];
        static is(el: string|HTMLElement|any[], selector: string):boolean;
        static select(selector: string, root?: any):any[];
        static selectNode(selector: string, root?: any):any;
        static selectNumber(selector: string, root?: any, defaultValue?: number):number;
        static selectValue(selector: string, root?: any, defaultValue?: string):string;
    }
    export class Editor extends Ext.Component {
        alignment: string;
        allowBlur: boolean;
        autoSize: boolean|string;
        cancelOnEsc: boolean;
        completeOnEnter: boolean;
        constrain: boolean;
        field: Ext.form.Field;
        hideEl: boolean;
        ignoreNoChange: boolean;
        revertInvalid: boolean;
        shadow: boolean|string;
        swallowKeys: boolean;
        updateEl: boolean;
        value: any;
        constructor(config: any);
        cancelEdit(remainVisible: boolean):void;
        completeEdit(remainVisible: boolean):void;
        getValue():any;
        realign():void;
        setSize(width: number, height: number):void;
        setValue(value: any):void;
        startEdit(el: any, value?: string):void;
    }
    export class Element {
        autoBoxAdjust: boolean;
        defaultUnit: string;
        dom: HTMLElement;
        id: string;
        originalDisplay: string;
        static DISPLAY: number;
        static VISIBILITY: number;
        constructor(element: string|HTMLElement, forceNew?: boolean);
        addClass(className: string|any[]):Ext.Element;
        addClassOnClick(className: string):Ext.Element;
        addClassOnFocus(className: string):Ext.Element;
        addClassOnOver(className: string):Ext.Element;
        addKeyListener(key: any, fn: Function, scope?: any):Ext.KeyMap;
        addKeyMap(config: any):Ext.KeyMap;
        addListener(eventName: string, fn: Function, scope?: any, options?: any):Ext.Element;
        alignTo(element: any, position: string, offsets?: any[], animate?: any):Ext.Element;
        anchorTo(element: any, position: string, offsets?: any[], animate?: any, monitorScroll?: boolean|number, callback?: Function):Ext.Element;
        animate(args: any, duration?: any, onComplete?: Function, easing?: string, animType?: string):Ext.Element;
        appendChild(el: any):Ext.Element;
        appendTo(el: any):Ext.Element;
        applyStyles(styles: any):Ext.Element;
        autoHeight(animate?: boolean, duration?: any, onComplete?: Function, easing?: string):Ext.Element;
        blur():Ext.Element;
        boxWrap(class_?: string):Ext.Element;
        center(centerIn?: any):void;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.Element;
        clean(forceReclean?: boolean):void;
        clearOpacity():Ext.Element;
        clearPositioning(value?: string):Ext.Element;
        clip():Ext.Element;
        contains(el: HTMLElement|string):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.Element;
        createProxy(config: any, renderTo?: string|HTMLElement, matchBox?: boolean):Ext.Element;
        createShim():Ext.Element;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.Element;
        enableDisplayMode(display?: string):Ext.Element;
        findParent(selector: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        first(selector?: string, returnDom?: boolean):Ext.Element|HTMLElement;
        fly(el: string|HTMLElement, named?: string):any;
        focus(defer?: number):Ext.Element;
        getAlignToXY(element: any, position: string, offsets?: any[]):any[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):any[];
        getAttribute(name: string, namespace?: string):string;
        getAttributeNS(namespace: string, name: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getCenterXY():any[];
        getColor(attr: string, defaultValue: string, prefix?: string):void;
        getComputedHeight():number;
        getComputedWidth():number;
        getFrameWidth(sides: string):number;
        getHeight(contentHeight?: boolean):number;
        getLeft(local: boolean):number;
        getMargins(sides?: string):any;
        getOffsetsTo(element: any):any[];
        getPadding(side: string):number;
        getPositioning():any;
        getRegion():any;
        getRight(local: boolean):number;
        getScroll():any;
        getSize(contentSize?: boolean):any;
        getStyle(property: string):string;
        getStyles(style1: string, style2: string, etc: string):any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getUpdater():Ext.Updater;
        getValue(asNumber: boolean):string|number;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        hasClass(className: string):boolean;
        hide(animate?: any):Ext.Element;
        hover(overFn: Function, outFn: Function, scope?: any, options?: any):Ext.Element;
        initDD(group: string, config: any, overrides: any):Ext.dd.DD;
        initDDProxy(group: string, config: any, overrides: any):Ext.dd.DDProxy;
        initDDTarget(group: string, config: any, overrides: any):Ext.dd.DDTarget;
        insertAfter(el: any):Ext.Element;
        insertBefore(el: any):Ext.Element;
        insertFirst(el: any):Ext.Element;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.Element;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.Element;
        is(selector: string):boolean;
        isBorderBox():boolean;
        isDisplayed():boolean;
        isMasked():boolean;
        isScrollable():boolean;
        isVisible(deep?: boolean):boolean;
        last(selector?: string, returnDom?: boolean):Ext.Element|HTMLElement;
        load():Ext.Element;
        mask(msg?: string, msgCls?: string):any;
        move(direction: string, distance: number, animate?: any):Ext.Element;
        moveTo(x: number, y: number, animate?: any):Ext.Element;
        next(selector?: string, returnDom?: boolean):Ext.Element|HTMLElement;
        on(eventName: string, fn: Function, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):Ext.Element|HTMLElement;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):Ext.Element|HTMLElement;
        query(selector: string):any[];
        radioClass(className: string|any[]):Ext.Element;
        relayEvent(eventName: string, object: any):void;
        remove():void;
        removeAllListeners():Ext.Element;
        removeClass(className: string|any[]):Ext.Element;
        removeListener(eventName: string, fn: Function, scope?: any):Ext.Element;
        repaint():Ext.Element;
        replace(el: any):Ext.Element;
        replaceClass(oldClassName: string, newClassName: string):Ext.Element;
        replaceWith(el: any):Ext.Element;
        scroll(direction: string, distance: number, animate?: any):boolean;
        scrollIntoView(container?: any, hscroll?: boolean):Ext.Element;
        scrollTo(side: string, value: number, animate?: any):any;
        select(selector: string, unique?: boolean):any;
        set(o: any, useSet?: boolean):Ext.Element;
        setBottom(bottom: string):Ext.Element;
        setBounds(x: number, y: number, width: any, height: any, animate?: any):Ext.Element;
        setBox(box: any, adjust?: boolean, animate?: any):Ext.Element;
        setDisplayed(value: any):Ext.Element;
        setHeight(height: any, animate?: any):Ext.Element;
        setLeft(left: string):Ext.Element;
        setLeftTop(left: string, top: string):Ext.Element;
        setLocation(x: number, y: number, animate?: any):Ext.Element;
        setOpacity(opacity: any, animate?: any):Ext.Element;
        setPositioning(posCfg: any):Ext.Element;
        setRegion(region: any, animate?: any):Ext.Element;
        setRight(right: string):Ext.Element;
        setSize(width: any, height: any, animate?: any):Ext.Element;
        setStyle(property: any, value?: string):Ext.Element;
        setTop(top: string):Ext.Element;
        setVisibilityMode(visMode: any):Ext.Element;
        setVisible(visible: boolean, animate?: any):Ext.Element;
        setWidth(width: any, animate?: any):Ext.Element;
        setX(The: number, animate?: any):Ext.Element;
        setXY(pos: any[], animate?: any):Ext.Element;
        setY(The: number, animate?: any):Ext.Element;
        show(animate?: any):Ext.Element;
        swallowEvent(eventName: string|any[], preventDefault?: boolean):Ext.Element;
        toggle(animate?: any):Ext.Element;
        toggleClass(className: string):Ext.Element;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: string, fn: Function, scope?: any):Ext.Element;
        unclip():Ext.Element;
        unmask():void;
        unselectable():Ext.Element;
        up(selector: string, maxDepth?: any):Ext.Element;
        update(html: string, loadScripts?: boolean, callback?: Function):Ext.Element;
        wrap(config?: any, returnDom?: boolean):any;
        static get(el: any):any;
    }
    export class Error {
        getMessage():string;
        getName():string;
        toJson():string;
    }
    export class EventManager {
        static A: number;
        static ALT: number;
        static B: number;
        static BACKSPACE: number;
        static C: number;
        static CAPS_LOCK: number;
        static CONTEXT_MENU: number;
        static CTRL: number;
        static D: number;
        static DELETE: number;
        static DOWN: number;
        static E: number;
        static EIGHT: number;
        static END: number;
        static ENTER: number;
        static ESC: number;
        static F: number;
        static F1: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static FIVE: number;
        static FOUR: number;
        static G: number;
        static H: number;
        static HOME: number;
        static I: number;
        static INSERT: number;
        static J: number;
        static K: number;
        static L: number;
        static LEFT: number;
        static M: number;
        static N: number;
        static NINE: number;
        static NUM_CENTER: number;
        static NUM_DIVISION: number;
        static NUM_EIGHT: number;
        static NUM_FIVE: number;
        static NUM_FOUR: number;
        static NUM_MINUS: number;
        static NUM_MULTIPLY: number;
        static NUM_NINE: number;
        static NUM_ONE: number;
        static NUM_PERIOD: number;
        static NUM_PLUS: number;
        static NUM_SEVEN: number;
        static NUM_SIX: number;
        static NUM_THREE: number;
        static NUM_TWO: number;
        static NUM_ZERO: number;
        static O: number;
        static ONE: number;
        static P: number;
        static PAGE_DOWN: number;
        static PAGE_UP: number;
        static PAUSE: number;
        static PRINT_SCREEN: number;
        static Q: number;
        static R: number;
        static RETURN: number;
        static RIGHT: number;
        static S: number;
        static SEVEN: number;
        static SHIFT: number;
        static SIX: number;
        static SPACE: number;
        static T: number;
        static TAB: number;
        static THREE: number;
        static TWO: number;
        static U: number;
        static UP: number;
        static V: number;
        static W: number;
        static X: number;
        static Y: number;
        static Z: number;
        static ZERO: number;
        static ieDeferSrc: boolean;
        static textResizeInterval: number;
        static addListener(el: string|HTMLElement, eventName: string, handler: Function, scope?: any, options?: any):void;
        static hasModifier():boolean;
        static on(el: string|HTMLElement, eventName: string, handler: Function, scope?: any, options?: any):void;
        static onDocumentReady(fn: Function, scope?: any, options?: boolean):void;
        static onTextResize(fn: Function, scope: any, options: boolean):void;
        static onWindowResize(fn: Function, scope: any, options: boolean):void;
        static removeAll(el: string|HTMLElement):void;
        static removeListener(el: string|HTMLElement, eventName: string, fn: Function):void;
        static removeResizeListener(fn: Function, scope: any):void;
        static un(el: string|HTMLElement, eventName: string, fn: Function):boolean;
    }
    export class EventObject {
        static getCharCode():number;
        static getKey():number;
        static getPageX():number;
        static getPageY():number;
        static getRelatedTarget():HTMLElement;
        static getTarget(selector?: string, maxDepth?: any, returnEl?: boolean):any;
        static getWheelDelta():number;
        static getXY():any[];
        static preventDefault():void;
        static stopEvent():void;
        static stopPropagation():void;
        static within(el: any, related?: boolean, allowEl?: boolean):boolean;
    }
    export class FlashComponent extends Ext.BoxComponent {
        backgroundColor: string;
        expressInstall: boolean;
        flashVersion: string;
        url: string;
        wmode: string;
        static EXPRESS_INSTALL_URL: string;
        constructor();
    }
    export class FlashProxy {
    }
    export class Fx {
        afterCls: string;
        afterStyle: any;
        block: boolean;
        callback: Function;
        concurrent: boolean;
        duration: number;
        easing: string;
        endOpacity: number;
        remove: boolean;
        scope: any;
        useDisplay: boolean;
        fadeIn(options?: any):Ext.Element;
        fadeOut(options?: any):Ext.Element;
        frame(color?: string, count?: number, options?: any):Ext.Element;
        ghost(anchor?: string, options?: any):Ext.Element;
        hasActiveFx():boolean;
        hasFxBlock():boolean;
        highlight(color?: string, options?: any):Ext.Element;
        pause(seconds: number):Ext.Element;
        puff(options?: any):Ext.Element;
        scale(width: number, height: number, options?: any):Ext.Element;
        sequenceFx():Ext.Element;
        shift(options: any):Ext.Element;
        slideIn(anchor?: string, options?: any):Ext.Element;
        slideOut(anchor?: string, options?: any):Ext.Element;
        stopFx(finish: any):Ext.Element;
        switchOff(options?: any):Ext.Element;
        syncFx():Ext.Element;
    }
    export class History {
        static fieldId: string;
        static iframeId: string;
        static add(token: string, preventDuplicates: boolean):void;
        static addEvents(object: any):void;
        static addListener(eventName: string, handler: Function, scope?: any, options?: any):void;
        static back():void;
        static enableBubble(events: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static forward():void;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: boolean, scope?: any):void;
        static on(eventName: string, handler: Function, scope?: any, options?: any):void;
        static purgeListeners():void;
        static relayEvents(o: any, events: any[]):void;
        static removeListener(eventName: string, handler: Function, scope?: any):void;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, handler: Function, scope?: any):void;
    }
    export class KeyMap {
        stopEvent: boolean;
        constructor(el: any, config: any, eventName?: string);
        addBinding(config: any):void;
        disable():void;
        enable():void;
        isEnabled():boolean;
        on(key: any, fn: Function, scope?: any):void;
        setDisabled(disabled: boolean):void;
    }
    export class KeyNav {
        defaultEventAction: string;
        disabled: boolean;
        forceKeyDown: boolean;
        constructor(el: any, config: any);
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class Layer extends Ext.Element {
        cls: string;
        constrain: boolean;
        dh: any;
        shadow: string|boolean;
        shadowOffset: number;
        shim: boolean;
        useDisplay: boolean;
        zindex: number;
        constructor(config: any, existingEl?: string|HTMLElement);
        setZIndex(zindex: number):any;
    }
    export class ListView extends Ext.DataView {
        columnResize: any;
        columnSort: any;
        columns: any[];
        hideHeaders: boolean;
        internalTpl: string|any[];
        reserveScrollOffset: boolean;
        scrollOffset: number;
        disableHeaders: boolean;
        constructor(config: any);
    }
    export class LoadMask {
        msg: string;
        msgCls: string;
        removeMask: boolean;
        store: Ext.data.Store;
        disabled: boolean;
        constructor(el: any, config: any);
        disable():void;
        enable():void;
        hide():void;
        show():void;
    }
    export class MessageBox {
        static CANCEL: any;
        static ERROR: string;
        static INFO: string;
        static OK: any;
        static OKCANCEL: any;
        static QUESTION: string;
        static WARNING: string;
        static YESNO: any;
        static YESNOCANCEL: any;
        static buttonText: any;
        static defaultTextHeight: number;
        static maxWidth: number;
        static minProgressWidth: number;
        static minWidth: number;
        static alert(title: string, msg: string, fn?: Function, scope?: any):Ext.MessageBox;
        static confirm(title: string, msg: string, fn?: Function, scope?: any):Ext.MessageBox;
        static getDialog(titleText: any):Ext.Window;
        static hide():Ext.MessageBox;
        static isVisible():boolean;
        static progress(title: string, msg: string, progressText?: string):Ext.MessageBox;
        static prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: boolean|number, value?: string):Ext.MessageBox;
        static setIcon(icon: string):Ext.MessageBox;
        static show(config: any):Ext.MessageBox;
        static updateProgress(value: number, progressText: string, msg: string):Ext.MessageBox;
        static updateText(text?: string):Ext.MessageBox;
        static wait(msg: string, title?: string, config?: any):Ext.MessageBox;
    }
    export class Msg {
    }
    export class PagingToolbar extends Ext.Toolbar {
        afterPageText: string;
        beforePageText: string;
        displayInfo: boolean;
        displayMsg: string;
        emptyMsg: string;
        firstText: string;
        lastText: string;
        nextText: string;
        prependButtons: boolean;
        prevText: string;
        refreshText: string;
        store: Ext.data.Store;
        cursor: number;
        pageSize: number|number;
        constructor(config: any);
        bind(store: Ext.data.Store):void;
        bindStore(store: any, initial?: boolean):void;
        changePage(page: any):void;
        moveFirst():void;
        moveLast():void;
        moveNext():void;
        movePrevious():void;
        refresh():void;
        unbind(store: Ext.data.Store):void;
    }
    export class Panel extends Ext.Container {
        animCollapse: boolean;
        autoLoad: any;
        autoScroll: boolean;
        baseCls: string;
        bbar: any;
        bbarCfg: any;
        bodyBorder: boolean;
        bodyCfg: any;
        bodyCssClass: any;
        bodyStyle: any;
        border: boolean;
        buttonAlign: string;
        bwrapCfg: any;
        closable: boolean;
        collapseFirst: boolean;
        collapsedCls: string;
        collapsible: boolean;
        contentEl: string;
        draggable: any;
        elements: string;
        fbar: any;
        floating: any;
        footerCfg: any;
        frame: boolean;
        headerAsText: boolean;
        headerCfg: any;
        hideCollapseTool: boolean;
        html: any;
        iconCls: string;
        keys: any;
        maskDisabled: boolean;
        minButtonWidth: number;
        preventBodyReset: boolean;
        shadow: boolean|string;
        shadowOffset: number;
        shim: boolean;
        tabTip: string;
        tbar: any;
        tbarCfg: any;
        title: string;
        titleCollapse: boolean;
        toolTemplate: Ext.Template|Ext.XTemplate;
        tools: any[];
        unstyled: boolean;
        body: Ext.Element;
        buttons: any[]|any[];
        bwrap: Ext.Element;
        collapsed: boolean|boolean;
        dd: any;
        footer: boolean|Ext.Element;
        header: boolean|Ext.Element;
        constructor(config: any);
        addButton(config: any, handler: Function, scope: any):Ext.Button;
        collapse(animate: boolean):Ext.Panel;
        expand(animate: boolean):Ext.Panel;
        getBottomToolbar():Ext.Toolbar;
        getFrameHeight():number;
        getFrameWidth():number;
        getInnerHeight():number;
        getInnerWidth():number;
        getTool(id: string):any;
        getTopToolbar():Ext.Toolbar;
        getUpdater():Ext.Updater;
        load(config: any):Ext.Panel;
        setIconClass(cls: string):void;
        setTitle(title: string, iconCls?: string):Ext.Panel;
        toggleCollapse(animate: boolean):Ext.Panel;
    }
    export class ProgressBar extends Ext.BoxComponent {
        animate: boolean;
        baseCls: string;
        text: string;
        textEl: any;
        value: any;
        constructor(config: any);
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        syncProgressBar():Ext.ProgressBar;
        updateProgress(value?: any, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class QuickTip extends Ext.ToolTip {
        interceptTitles: boolean;
        constructor(config: any);
        cancelShow(el: any):void;
        register(config: any):void;
        unregister(el: any):void;
    }
    export class QuickTips {
        static disable():void;
        static enable():void;
        static getQuickTip():void;
        static init(autoRender: boolean):void;
        static isEnabled():boolean;
        static register(config: any):void;
        static tips(config: any):void;
        static unregister(el: any):void;
    }
    export class Resizable extends Ext.util.Observable {
        adjustments: any[]|string;
        animate: boolean;
        constrainTo: any;
        disableTrackOver: boolean;
        draggable: boolean;
        duration: number;
        dynamic: boolean;
        easing: string;
        handles: string;
        height: number;
        heightIncrement: number;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        minX: number;
        minY: number;
        multiDirectional: boolean;
        pinned: boolean;
        preserveRatio: boolean;
        resizeChild: any;
        resizeRegion: any;
        transparent: boolean;
        width: number;
        widthIncrement: number;
        wrap: boolean;
        enabled: boolean|boolean;
        proxy: any;
        constructor(el: any, config: any);
        destroy(removeEl?: boolean):void;
        getEl():Ext.Element;
        getResizeChild():Ext.Element;
        resizeElement():void;
        resizeTo(width: number, height: number):void;
    }
    export class Shadow {
        mode: string;
        offset: string;
        constructor(config: any);
        hide():void;
        isVisible():void;
        realign(left: number, top: number, width: number, height: number):void;
        setZIndex(zindex: number):void;
        show(targetEl: any):void;
    }
    export class Slider extends Ext.BoxComponent {
        animate: boolean;
        clickToChange: boolean;
        decimalPrecision: number|boolean;
        increment: number;
        keyIncrement: number;
        maxValue: number;
        minValue: number;
        value: number;
        vertical: boolean;
        dragging: boolean;
        constructor(config: any);
        getValue():number;
        setValue(value: number, animate: boolean):void;
        syncThumb():void;
    }
    export class Spacer extends Ext.BoxComponent {
        constructor(config: any);
    }
    export class SplitBar extends Ext.util.Observable {
        animate: boolean;
        maxSize: number;
        minSize: number;
        tickSize: number;
        useShim: boolean;
        constructor(dragElement: any, resizingElement: any, orientation?: number, placement?: number);
        destroy(removeEl: boolean):void;
        getAdapter():any;
        getMaximumSize():number;
        getMinimumSize():number;
        setAdapter(adapter: any):void;
        setCurrentSize(size: number):void;
        setMaximumSize(maxSize: number):void;
        setMinimumSize(minSize: number):void;
    }
    export class SplitButton extends Ext.Button {
        arrowHandler: Function;
        arrowTooltip: string;
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: any):void;
    }
    export class StoreMgr {
        static add(key: string, o: any):any;
        static addAll(objs: any):void;
        static addEvents(object: any):void;
        static addListener(eventName: string, handler: Function, scope?: any, options?: any):void;
        static clear():void;
        static clone():any;
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(events: any):void;
        static filter(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):any;
        static filterBy(fn: Function, scope?: any):any;
        static find(fn: Function, scope?: any):any;
        static findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static get(key: string|number):any;
        static getCount():number;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static insert(index: number, key: string, o?: any):any;
        static item(key: string|number):any;
        static itemAt(index: number):any;
        static key(key: string|number):any;
        static keySort(direction?: string, fn?: Function):void;
        static last():any;
        static lookup(id: any):Ext.data.Store;
        static on(eventName: string, handler: Function, scope?: any, options?: any):void;
        static purgeListeners():void;
        static register(store1: Ext.data.Store, store2?: Ext.data.Store, etc?: Ext.data.Store):void;
        static relayEvents(o: any, events: any[]):void;
        static remove(o: any):any;
        static removeAt(index: number):any;
        static removeKey(key: string):any;
        static removeListener(eventName: string, handler: Function, scope?: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(direction?: string, fn?: Function):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, handler: Function, scope?: any):void;
        static unregister(id1: any, id2?: any, etc?: any):void;
    }
    export class TabPanel extends Ext.Panel {
        activeTab: string|number;
        animScroll: boolean;
        autoTabSelector: string;
        autoTabs: boolean;
        deferredRender: boolean;
        enableTabScroll: boolean;
        itemTpl: any;
        layoutOnTabChange: boolean;
        minTabWidth: number;
        plain: boolean;
        resizeTabs: boolean;
        scrollDuration: any;
        scrollIncrement: number;
        scrollRepeatInterval: number;
        tabCls: string;
        tabMargin: number;
        tabPosition: string;
        tabWidth: number;
        wheelIncrement: number;
        constructor(config: any);
        activate(tab: any):void;
        beginUpdate():void;
        endUpdate():void;
        getActiveTab():any;
        getItem(id: string):any;
        getTabEl(tab: any):HTMLElement;
        getTemplateArgs(item: any):any;
        hideTabStripItem(item: any):void;
        readTabs(removeExisting: boolean):void;
        scrollToTab(item: any, animate: boolean):void;
        setActiveTab(item: string|number):void;
        unhideTabStripItem(item: any):void;
    }
    export class TaskMgr {
        static start(task: any):any;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class Template {
        disableFormats: boolean;
        constructor(html: string|any[]);
        append(el: any, values: any, returnElement?: boolean):HTMLElement|Ext.Element;
        apply(values: any):string;
        insertAfter(el: any, values: any, returnElement?: boolean):HTMLElement|Ext.Element;
        insertBefore(el: any, values: any, returnElement?: boolean):HTMLElement|Ext.Element;
        insertFirst(el: any, values: any, returnElement?: boolean):HTMLElement|Ext.Element;
        overwrite(el: any, values: any, returnElement?: boolean):HTMLElement|Ext.Element;
        set(html: string, compile?: boolean):Ext.Template;
        static from(el: string|HTMLElement, config: any):Ext.Template;
    }
    export class Tip extends Ext.Panel {
        defaultAlign: string;
        maxWidth: number;
        minWidth: number;
        constructor(config: any);
        showAt(xy: any[]):void;
        showBy(el: any, position?: string):void;
    }
    export class Toolbar extends Ext.Container {
        constructor(config: any);
        addButton(config: any):Ext.Button|any[];
        addDom(config: any):Ext.Toolbar.Item;
        addElement(el: any):Ext.Toolbar.Item;
        addField(field: Ext.form.Field):Ext.Toolbar.Item;
        addFill():void;
        addItem(item: Ext.Toolbar.Item):Ext.Toolbar.Item;
        addSeparator():Ext.Toolbar.Item;
        addSpacer():Ext.Toolbar.Spacer;
        addText(text: string):Ext.Toolbar.Item;
        insertButton(index: number, item: any):any;
    }
    export class ToolTip extends Ext.Tip {
        anchorOffset: number;
        anchorToTarget: boolean;
        autoHide: boolean;
        delegate: string;
        dismissDelay: number;
        hideDelay: number;
        mouseOffset: any[];
        showDelay: number;
        target: any;
        trackMouse: boolean;
        triggerElement: any;
        constructor(config: any);
        initTarget(t: any):void;
    }
    export class Updater extends Ext.util.Observable {
        defaultUrl: string;
        disableCaching: boolean;
        el: Ext.Element;
        formUpdateDelegate: Function;
        indicatorText: string;
        loadScripts: boolean;
        refreshDelegate: Function;
        renderer: any;
        showLoadIndicator: string;
        sslBlankUrl: string;
        timeout: number;
        transaction: any;
        updateDelegate: Function;
        constructor(el: any, forceNew?: boolean);
        abort():void;
        formUpdate(form: string|HTMLElement, url?: string, reset?: boolean, callback?: Function):void;
        getDefaultRenderer():void;
        getEl():Ext.Element;
        getRenderer():any;
        isAutoRefreshing():void;
        isUpdating():boolean;
        refresh(callback?: Function):void;
        setDefaultUrl(defaultUrl: string|Function):void;
        setRenderer(renderer: any):void;
        showLoading():void;
        startAutoRefresh(interval: number, url?: any, params?: any, callback?: Function, refreshNow?: boolean):void;
        stopAutoRefresh():void;
        update(options: any):void;
        static updateElement(el: any, url: string, params?: any, options?: any):void;
    }
    export class Viewport extends Ext.Container {
        constructor(config: any);
    }
    export class Window extends Ext.Panel {
        animateTarget: any;
        closeAction: string;
        constrain: boolean;
        constrainHeader: boolean;
        defaultButton: any;
        expandOnShow: boolean;
        initHidden: boolean;
        manager: Ext.WindowGroup;
        maximizable: boolean;
        maximized: boolean;
        minHeight: number;
        minWidth: number;
        minimizable: boolean;
        modal: boolean;
        plain: boolean;
        resizable: boolean;
        resizeHandles: string;
        constructor(config: any);
        alignTo(element: any, position: string, offsets?: any[]):Ext.Window;
        anchorTo(element: any, position: string, offsets?: any[], monitorScroll?: boolean|number):Ext.Window;
        center():Ext.Window;
        close():void;
        maximize():Ext.Window;
        minimize():Ext.Window;
        restore():Ext.Window;
        setActive(active: boolean):void;
        setAnimateTarget(el: any):void;
        toBack():Ext.Window;
        toFront(e?: boolean):Ext.Window;
        toggleMaximize():Ext.Window;
    }
    export class WindowGroup {
        zseed: number;
        constructor();
        bringToFront(win: any):boolean;
        each(fn: Function, scope?: any):void;
        get(id: any):Ext.Window;
        getActive():Ext.Window;
        getBy(fn: Function, scope?: any):any[];
        hideAll():void;
        sendToBack(win: any):Ext.Window;
    }
    export class WindowMgr {
        static zseed: number;
        static bringToFront(win: any):boolean;
        static each(fn: Function, scope?: any):void;
        static get(id: any):Ext.Window;
        static getActive():Ext.Window;
        static getBy(fn: Function, scope?: any):any[];
        static hideAll():void;
        static sendToBack(win: any):Ext.Window;
    }
    export class XTemplate extends Ext.Template {
        constructor(parts: any);
        applyTemplate(values: any):string;
        compile():Function;
    }
}
declare module Ext.Direct {
    export class Transaction {
        constructor(config: any);
    }
}
declare module Ext.ListView {
    export class ColumnResizer extends Ext.util.Observable {
        minPct: number;
        constructor(config: any);
    }
    export class Sorter extends Ext.util.Observable {
        sortClasses: any[];
        constructor(config: any);
    }
}
declare module Ext.SplitBar {
    export class AbsoluteLayoutAdapter extends Ext.SplitBar.BasicLayoutAdapter {
        static BOTTOM: number;
        static HORIZONTAL: number;
        static LEFT: number;
        static RIGHT: number;
        static TOP: number;
        static VERTICAL: number;
    }
    export class BasicLayoutAdapter {
        getElementSize(s: Ext.SplitBar):void;
        setElementSize(s: Ext.SplitBar, newSize: number, onComplete: Function):void;
    }
}
declare module Ext.Toolbar {
    export class Fill extends Ext.Toolbar.Spacer {
        constructor();
    }
    export class Item extends Ext.BoxComponent {
        overflowText: string;
        constructor(el: HTMLElement);
    }
    export class Separator extends Ext.Toolbar.Item {
        constructor();
    }
    export class Spacer extends Ext.Toolbar.Item {
        constructor();
    }
    export class TextItem extends Ext.Toolbar.Item {
        constructor(text: any);
        setText(t: string):void;
    }
}
declare module Ext.Updater {
    export class BasicRenderer {
        render(el: Ext.Element, response: any, updateManager: any, callback: Function):void;
    }
    export class defaults {
        disableCaching: boolean;
        indicatorText: string;
        loadScripts: boolean;
        showLoadIndicator: boolean;
        sslBlankUrl: string;
        timeout: number;
    }
}
declare module Ext.chart {
    export class Axis {
        hideOverlappingLabels: boolean;
        labelFunction: string;
        orientation: string;
        reverse: boolean;
        type: string;
        constructor();
    }
    export class BarChart extends Ext.chart.CartesianChart {
        constructor();
    }
    export class BarSeries extends Ext.chart.CartesianSeries {
        constructor();
    }
    export class CartesianChart extends Ext.chart.Chart {
        constructor();
    }
    export class CartesianSeries extends Ext.chart.Series {
        xField: string;
        yField: string;
        constructor();
    }
    export class CategoryAxis extends Ext.chart.Axis {
        categoryNames: any[];
        constructor();
    }
    export class Chart extends Ext.FlashComponent {
        chartStyle: any;
        disableCaching: boolean;
        extraStyle: any;
        static CHART_URL: string;
        constructor();
        bindStore(store: any):void;
        setSeriesStyles(styles: any):void;
        setStyle(name: any, value: any):void;
        setStyles(styles: any):void;
    }
    export class ColumnChart extends Ext.chart.CartesianChart {
        constructor();
    }
    export class ColumnSeries extends Ext.chart.CartesianSeries {
        constructor();
    }
    export class LineChart extends Ext.chart.CartesianChart {
        constructor();
    }
    export class LineSeries extends Ext.chart.CartesianSeries {
        constructor();
    }
    export class NumericAxis extends Ext.chart.Axis {
        alwaysShowZero: boolean;
        majorUnit: number;
        maximum: number;
        minimum: number;
        minorUnit: number;
        scale: string;
        snapToUnits: boolean;
        constructor();
    }
    export class PieChart extends Ext.chart.Chart {
        constructor();
    }
    export class PieSeries extends Ext.chart.Series {
        constructor();
    }
    export class Series {
        displayName: string;
        type: string;
        constructor();
    }
    export class StackedBarChart extends Ext.chart.CartesianChart {
        constructor();
    }
    export class StackedColumnChart extends Ext.chart.CartesianChart {
        constructor();
    }
    export class TimeAxis extends Ext.chart.Axis {
        majorTimeUnit: string;
        majorUnit: number;
        maximum: number;
        minimum: Date;
        snapToUnits: boolean;
        constructor();
    }
}
declare module Ext.data {
    export class Api {
        static actions: any;
        static restActions: any;
        static getVerb(name: string):any;
        static hasUniqueUrl(proxy: Ext.data.DataProxy, verb: string):boolean;
        static isAction(action: string, undefined?: string[]):boolean;
        static isValid(api: any):any;
        static prepare(proxy: Ext.data.DataProxy):void;
        static restify(proxy: Ext.data.DataProxy):void;
    }
    export class ArrayReader extends Ext.data.JsonReader {
        id: number;
        idIndex: number;
        constructor(meta: any, recordType: any);
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Connection extends Ext.util.Observable {
        autoAbort: boolean;
        defaultHeaders: any;
        disableCaching: boolean;
        disableCachingParam: string;
        extraParams: any;
        method: string;
        timeout: number;
        url: string;
        constructor(config: any);
        abort(transactionId?: number):void;
        isLoading(transactionId?: number):boolean;
        request(options: any):number;
    }
    export class DataProxy extends Ext.util.Observable {
        api: any;
        doRequest: Function;
        restful: boolean;
        destroy():void;
        isApiAction(action: any):boolean;
        load(params: any, reader: any, callback: any, scope: any, arg: any):void;
        request(action: string, rs: Ext.data.Record|Ext.data.Record[]|void, params: any, reader: Ext.data.DataReader, callback: Function, scope: any, options: any):void;
        setApi(api: any, url: string|Function):void;
    }
    export class DataReader {
        fields: any;
        meta: any;
        constructor(meta: any, recordType: any);
        buildExtractors():void;
        isData(data: any):boolean;
        realize(record: any, data: any):void;
        update(rs: any, data: any):void;
    }
    export class DataWriter {
        createRecord: Function;
        destroyRecord: Function;
        listful: boolean;
        saveRecord: Function;
        writeAllFields: boolean;
        meta: any;
        constructor(meta: any, recordType: any);
        render(action: string, rs: any, params: any, data: any):void;
        write(action: string, params: any, rs: any):void;
    }
    export class DirectProxy extends Ext.data.DataProxy {
        directFn: Function;
        paramOrder: any[]|string;
        paramsAsHash: boolean;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Field {
        allowBlank: boolean;
        convert: Function;
        dateFormat: string;
        defaultValue: any;
        mapping: string|number;
        name: string;
        sortDir: string;
        sortType: Function;
        type: string;
    }
    export class GroupingStore extends Ext.data.Store {
        groupField: string;
        groupOnSort: boolean;
        remoteGroup: boolean;
        constructor(config: any);
        clearGrouping():void;
        groupBy(field: string, forceRegroup?: boolean):void;
    }
    export class HttpProxy extends Ext.data.DataProxy {
        conn: any;
        constructor(conn: any);
        getConnection():any;
        setUrl(url: string, makePermanent?: boolean):void;
    }
    export class JsonReader extends Ext.data.DataReader {
        idProperty: string;
        root: string;
        successProperty: string;
        totalProperty: string;
        jsonData: any;
        constructor(meta: any, recordType: any);
        read(response: any):any;
        readRecords(o: any):any;
        readResponse(action: string, response: any):void;
    }
    export class JsonStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class JsonWriter extends Ext.data.DataWriter {
        encode: boolean;
        returnJson: boolean;
        constructor(meta: any, recordType: any);
        updateRecord(rec: Ext.data.Record):void;
    }
    export class MemoryProxy extends Ext.data.DataProxy {
        constructor(data: any);
    }
    export class Node extends Ext.util.Observable {
        leaf: boolean;
        attributes: any;
        childNodes: any[];
        firstChild: any;
        id: string|string;
        lastChild: any;
        nextSibling: any;
        parentNode: any;
        previousSibling: any;
        constructor(attributes: any);
        appendChild(node: any):any;
        bubble(fn: Function, scope?: any, args?: any[]):void;
        cascade(fn: Function, scope?: any, args?: any[]):void;
        contains(node: any):boolean;
        eachChild(fn: Function, scope?: any, args?: any[]):void;
        findChild(attribute: string, value: any):any;
        findChildBy(fn: Function, scope?: any):any;
        getDepth():number;
        getOwnerTree():any;
        getPath(attr?: string):string;
        hasChildNodes():boolean;
        indexOf(node: any):number;
        insertBefore(node: any, refNode: any):any;
        isAncestor(node: any):boolean;
        isExpandable():boolean;
        isFirst():boolean;
        isLast():boolean;
        isLeaf():boolean;
        item(index: number):any;
        remove():any;
        removeChild(node: any):any;
        replaceChild(newChild: any, oldChild: any):any;
        setId(id: string):void;
        sort(fn: Function, scope?: any):void;
    }
    export class Record {
        data: any;
        dirty: boolean;
        fields: Ext.util.MixedCollection;
        modified: any;
        phantom: boolean;
        store: Ext.data.Store;
        constructor(data?: any, id?: any);
        beginEdit():void;
        cancelEdit():void;
        commit(silent?: boolean):void;
        copy(id?: string):any;
        endEdit():void;
        get(name: string):any;
        getChanges():any;
        id(rec: any):string;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        markDirty():void;
        reject(silent?: boolean):void;
        set(name: string, value: any):void;
        static create(o: any[]):any;
    }
    export class ScriptTagProxy extends Ext.data.DataProxy {
        callbackParam: string;
        nocache: boolean;
        timeout: number;
        url: string;
        constructor(config: any);
        abort():void;
    }
    export class SortTypes {
        static stripTagsRE: RegExp;
        static asDate(s: any):number;
        static asFloat(s: any):any;
        static asInt(s: any):number;
        static asText(s: any):string;
        static asUCString(s: any):string;
        static asUCText(s: any):string;
        static none(s: any):any;
    }
    export class Store extends Ext.util.Observable {
        '': any;
        autoDestroy: boolean;
        autoLoad: any;
        autoSave: boolean;
        batch: boolean;
        data: any[];
        defaultParamNames: any;
        paramNames: any;
        proxy: Ext.data.DataProxy;
        pruneModifiedRecords: boolean;
        reader: Ext.data.DataReader;
        remoteSort: boolean;
        restful: boolean;
        sortInfo: any;
        storeId: string;
        url: string;
        writer: Ext.data.DataWriter;
        baseParams: any;
        fields: Ext.util.MixedCollection;
        lastOptions: any;
        recordType: Function;
        constructor(config: any);
        add(records: Ext.data.Record[]):void;
        addSorted(record: Ext.data.Record):void;
        clearFilter(suppressEvent: boolean):void;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        commitChanges():void;
        destroy():void;
        each(fn: Function, scope?: any):void;
        filter(field: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):void;
        filterBy(fn: Function, scope?: any):void;
        find(property: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findBy(fn: Function, scope?: any, startIndex?: number):number;
        findExact(property: string, value: string|RegExp, startIndex?: number):number;
        getAt(index: number):Ext.data.Record;
        getById(id: string):Ext.data.Record;
        getCount():number;
        getModifiedRecords():Ext.data.Record[];
        getRange(startIndex?: number, endIndex?: number):Ext.data.Record[];
        getSortState():any;
        getTotalCount():number;
        indexOf(record: Ext.data.Record):number;
        indexOfId(id: string):number;
        insert(index: number, records: Ext.data.Record[]):void;
        isFiltered():boolean;
        load(options: any):boolean;
        loadData(data: any, append?: boolean):void;
        query(field: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):any;
        queryBy(fn: Function, scope?: any):any;
        rejectChanges():void;
        reload(options?: any):void;
        remove(record: Ext.data.Record):void;
        removeAll():void;
        removeAt(index: number):void;
        save():void;
        setBaseParam(name: string, value: any):void;
        setDefaultSort(fieldName: string, dir?: string):void;
        sort(fieldName: string, dir?: string):void;
        sum(property: string, start?: number, end?: number):number;
    }
    export class Tree extends Ext.util.Observable {
        pathSeparator: string;
        root: any;
        constructor(root?: any);
        getNodeById(id: string):any;
        getRootNode():any;
        setRootNode(node: any):any;
    }
    export class XmlReader extends Ext.data.DataReader {
        idPath: string;
        record: string;
        success: string;
        totalRecords: string;
        xmlData: any;
        constructor(meta: any, recordType: any);
        read(response: any):any;
        readRecords(doc: any):any;
    }
    export class XmlStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class XmlWriter extends Ext.data.DataWriter {
        constructor(meta: any, recordType: any);
        updateRecord(rec: Ext.data.Record):void;
    }
}
declare module Ext.data.Api {
    export class Error extends Ext.Error {
        constructor(message: any, arg: any);
    }
}
declare module Ext.data.DataProxy {
    export class Error extends Ext.Error {
        constructor(message: any, arg: any);
    }
}
declare module Ext.data.DataReader {
    export class Error extends Ext.Error {
        constructor(message: any, arg: any);
    }
}
declare module Ext.data.JsonReader {
    export class Error extends Ext.Error {
        constructor(message: any, arg: any);
    }
}
declare module Ext.data.Store {
    export class Error extends Ext.Error {
    }
}
declare module Ext.dd {
    export class DD extends Ext.dd.DragDrop {
        scroll: boolean;
        constructor(id: string, sGroup: string, config: any);
        alignElWithMouse(el: HTMLElement, iPageX: any, iPageY: any):void;
        autoOffset(iPageX: any, iPageY: any):void;
        b4Drag(e: any):void;
        b4MouseDown(e: any):void;
        cachePosition(iPageX: any, iPageY: any):void;
        setDelta(iDeltaX: any, iDeltaY: any):void;
        setDragElPos(iPageX: any, iPageY: any):void;
    }
    export class DDProxy extends Ext.dd.DD {
        centerFrame: boolean;
        resizeFrame: boolean;
        static Ext: string;
        constructor(id: string, sGroup: string, config: any);
        createFrame():void;
        initFrame():void;
    }
    export class DDTarget extends Ext.dd.DragDrop {
        constructor(id: string, sGroup: string, config: any);
    }
    export class DragDrop {
        '': any;
        available: boolean;
        config: any;
        defaultPadding: any;
        groups: any;
        hasOuterHandles: boolean;
        id: string;
        ignoreSelf: boolean;
        invalidHandleClasses: any[];
        invalidHandleIds: any;
        invalidHandleTypes: any;
        isTarget: boolean;
        maintainOffset: boolean;
        moveOnly: boolean;
        padding: any;
        primaryButtonOnly: boolean;
        xTicks: any;
        yTicks: any;
        constructor(id: string, sGroup: string, config: any);
        addInvalidHandleClass(cssClass: string):void;
        addInvalidHandleId(id: string):void;
        addInvalidHandleType(tagName: string):void;
        addToGroup(sGroup: any):void;
        applyConfig():void;
        clearConstraints():void;
        clearTicks():void;
        constrainTo(constrainTo: any, pad?: any, inContent?: boolean):void;
        endDrag(e: Event):void;
        getDragEl():HTMLElement;
        getEl():HTMLElement;
        init(id: any, sGroup: string, config: any):void;
        initTarget(id: any, sGroup: string, config: any):void;
        isLocked():boolean;
        isValidHandleChild(node: HTMLElement):boolean;
        lock():void;
        onAvailable():void;
        onDrag(e: Event):void;
        onDragDrop(e: Event, id: any):void;
        onDragEnter(e: Event, id: any):void;
        onDragOut(e: Event, id: any):void;
        onDragOver(e: Event, id: any):void;
        onInvalidDrop(e: Event):void;
        onMouseDown(e: Event):void;
        onMouseUp(e: Event):void;
        removeFromGroup(sGroup: string):void;
        removeInvalidHandleClass(cssClass: string):void;
        removeInvalidHandleId(id: string):void;
        removeInvalidHandleType(tagName: string):void;
        resetConstraints(maintainOffset: boolean):void;
        setDragElId(id: any):void;
        setHandleElId(id: any):void;
        setInitPosition(diffX: any, diffY: any):void;
        setOuterHandleElId(id: any):void;
        setPadding(iTop: any, iRight: any, iBot: any, iLeft: any):void;
        setXConstraint(iLeft: any, iRight: any, iTickSize: any):void;
        setYConstraint(iUp: any, iDown: any, iTickSize: any):void;
        startDrag(X: any, Y: any):void;
        toString():string;
        unlock():void;
        unreg():void;
    }
    export class DragDropMgr {
    }
    export class DragSource extends Ext.dd.DDProxy {
        ddGroup: string;
        dropAllowed: string;
        dropNotAllowed: string;
        constructor(el: any, config: any);
        afterDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOut(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOver(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterInvalidDrop(e: Event, id: string):void;
        beforeDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOut(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOver(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeInvalidDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        getDragData(e: any):any;
        getProxy():Ext.dd.StatusProxy;
        hideProxy():void;
        onBeforeDrag(data: any, e: Event):boolean;
        onStartDrag(x: number, y: number):void;
    }
    export class DragTracker extends Ext.util.Observable {
        active: boolean;
        autoStart: boolean|number;
        tolerance: number;
    }
    export class DragZone extends Ext.dd.DragSource {
        containerScroll: boolean;
        hlColor: string;
        dragData: any;
        constructor(el: any, config: any);
        afterRepair():void;
        getRepairXY(e: any):any[];
        onInitDrag(x: number, y: number):boolean;
    }
    export class DropTarget extends Ext.dd.DDTarget {
        ddGroup: string;
        dropAllowed: string;
        dropNotAllowed: string;
        overClass: string;
        constructor(el: any, config: any);
        notifyDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        notifyEnter(source: Ext.dd.DragSource, e: Event, data: any):string;
        notifyOut(source: Ext.dd.DragSource, e: Event, data: any):void;
        notifyOver(source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class DropZone extends Ext.dd.DropTarget {
        constructor(el: any, config: any);
        getTargetFromEvent(e: Event):any;
        onContainerDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onContainerOver(source: Ext.dd.DragSource, e: Event, data: any):string;
        onNodeDrop(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onNodeEnter(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOut(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOver(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class PanelProxy {
        insertProxy: boolean;
        constructor(panel: any, config: any);
        getEl():any;
        getGhost():any;
        getProxy():any;
        hide():void;
        moveProxy(parentNode: HTMLElement, before?: HTMLElement):void;
        show():void;
    }
    export class Registry {
        static getHandle(id: string|HTMLElement):any;
        static getHandleFromEvent(e: Event):any;
        static getTarget(id: string|HTMLElement):any;
        static getTargetFromEvent(e: Event):any;
        static register(data?: any):void;
        static unregister(undefined: any):void;
    }
    export class ScrollManager {
        static animDuration: number;
        static animate: boolean;
        static frequency: number;
        static hthresh: number;
        static increment: number;
        static vthresh: number;
        static refreshCache():void;
        static register(el: any):void;
        static unregister(el: any):void;
    }
    export class StatusProxy {
        dropAllowed: string;
        dropNotAllowed: string;
        constructor(config: any);
        getEl():Ext.Layer;
        getGhost():Ext.Element;
        hide(clear: boolean):void;
        repair(xy: any[], callback: Function, scope: any):void;
        reset(clearGhost: boolean):void;
        setStatus(cssClass: string):void;
        show():void;
        stop():void;
        sync():void;
        update(html: string|HTMLElement):void;
    }
}
declare module Ext.direct {
    export class JsonProvider extends Ext.direct.Provider {
        constructor(config: any);
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        baseParams: any;
        interval: number;
        url: string|Function;
        constructor(config: any);
    }
    export class Provider extends Ext.util.Observable {
        id: string;
        priority: number;
        type: string;
        constructor(config: any);
        connect():void;
        disconnect():void;
        isConnected():void;
    }
    export class RemotingProvider extends Ext.direct.JsonProvider {
        actions: any;
        enableBuffer: number|boolean;
        enableUrlEncode: string;
        maxRetries: number;
        namespace: any;
        url: string;
        constructor(config: any);
    }
}
declare module Ext.form {
    export class Action {
        failure: Function;
        method: string;
        params: any;
        reset: boolean;
        scope: any;
        success: Function;
        timeout: number;
        url: string;
        waitMsg: string;
        waitTitle: string;
        failureType: string;
        response: any;
        result: any;
        type: string;
        static CLIENT_INVALID: string;
        static CONNECT_FAILURE: string;
        static LOAD_FAILURE: string;
        static SERVER_INVALID: string;
    }
    export class BasicForm extends Ext.util.Observable {
        api: any;
        baseParams: any;
        errorReader: any;
        fileUpload: boolean;
        method: string;
        paramOrder: any[]|string;
        paramsAsHash: boolean;
        reader: any;
        standardSubmit: boolean;
        timeout: number;
        trackResetOnLoad: boolean;
        url: string;
        waitMsgTarget: any;
        constructor(el: any, config: any);
        add(field1: any, field2?: any, etc?: any):any;
        applyIfToFields(values: any):any;
        applyToFields(values: any):any;
        clearInvalid():any;
        doAction(actionName: any, options?: any):any;
        findField(id: string):any;
        getEl():any;
        getValues(asString?: boolean):any;
        isDirty():any;
        isValid():any;
        load(options: any):any;
        loadRecord(record: any):any;
        markInvalid(errors: any):any;
        remove(field: any):any;
        render():any;
        reset():any;
        setValues(values: any):any;
        submit(options: any):any;
        updateRecord(record: any):any;
    }
    export class Checkbox extends Ext.form.Field {
        boxLabel: string;
        checked: boolean;
        handler: Function;
        inputValue: string;
        scope: any;
        constructor(config: any);
    }
    export class CheckboxGroup extends Ext.form.Field {
        allowBlank: boolean;
        blankText: string;
        columns: string|number|any[];
        items: any[];
        vertical: boolean;
        constructor(config: any);
    }
    export class ComboBox extends Ext.form.TriggerField {
        allQuery: string;
        displayField: string;
        forceSelection: boolean;
        handleHeight: number;
        hiddenId: string;
        hiddenName: string;
        hiddenValue: string;
        itemSelector: string;
        lazyInit: boolean;
        lazyRender: boolean;
        listAlign: string;
        listClass: string;
        listEmptyText: string;
        listWidth: number;
        loadingText: string;
        maxHeight: number;
        minChars: number;
        minHeight: number;
        minListWidth: number;
        mode: string;
        pageSize: number;
        queryDelay: number;
        queryParam: string;
        resizable: boolean;
        selectedClass: string;
        shadow: boolean|string;
        store: Ext.data.Store|any[];
        title: string;
        tpl: string|Ext.XTemplate;
        transform: any;
        triggerAction: string;
        typeAhead: boolean;
        typeAheadDelay: number;
        valueField: string;
        valueNotFoundText: string;
        lastQuery: string;
        view: Ext.DataView;
        constructor(config: any);
        clearValue():void;
        collapse():void;
        doQuery(query: string, forceAll: boolean):void;
        expand():void;
        getListParent():void;
        getStore():Ext.data.Store;
        isExpanded():void;
        select(index: number, scrollIntoView: boolean):void;
        selectByValue(value: string, scrollIntoView: boolean):boolean;
    }
    export class DateField extends Ext.form.TriggerField {
        altFormats: string;
        disabledDates: any[];
        disabledDatesText: string;
        disabledDays: any[];
        disabledDaysText: string;
        format: string;
        maxText: string;
        maxValue: Date|string;
        minText: string;
        minValue: Date|string;
        showToday: boolean;
        constructor(config: any);
        setDisabledDates(disabledDates: any[]):void;
        setDisabledDays(disabledDays: any[]):void;
        setMaxValue(value: Date):void;
        setMinValue(value: Date):void;
    }
    export class DisplayField extends Ext.form.Field {
        htmlEncode: boolean;
        constructor(config: any);
    }
    export class Field extends Ext.BoxComponent {
        autoCreate: any;
        fieldClass: string;
        focusClass: string;
        inputType: string;
        invalidClass: string;
        invalidText: string;
        msgFx: string;
        msgTarget: string;
        name: string;
        readOnly: boolean;
        tabIndex: number;
        validateOnBlur: boolean;
        validationDelay: number;
        validationEvent: string|boolean;
        value: any;
        originalValue: any;
        constructor(config: any);
        clearInvalid():void;
        getName():string;
        getRawValue():any;
        getValue():any;
        isDirty():boolean;
        isValid(preventMark: boolean):boolean;
        markInvalid(msg?: string):void;
        reset():void;
        setRawValue(value: any):any;
        setValue(value: any):Ext.form.Field;
        validate():boolean;
    }
    export class FieldSet extends Ext.Panel {
        checkboxName: string;
        checkboxToggle: any;
        labelWidth: number;
        constructor(config: any);
        onCheckClick():void;
    }
    export class FormPanel extends Ext.Panel {
        formId: string;
        hideLabels: boolean;
        labelAlign: string;
        labelPad: number;
        labelWidth: number;
        monitorPoll: number;
        monitorValid: boolean;
        constructor(config: any);
        getForm():Ext.form.BasicForm;
        startMonitoring():void;
        stopMonitoring():void;
    }
    export class Hidden extends Ext.form.Field {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.form.Field {
        createLinkText: string;
        defaultLinkValue: string;
        defaultValue: string;
        enableAlignments: boolean;
        enableColors: boolean;
        enableFont: boolean;
        enableFontSize: boolean;
        enableFormat: boolean;
        enableLinks: boolean;
        enableLists: boolean;
        enableSourceEdit: boolean;
        fontFamilies: any[];
        buttonTips: any;
        constructor(config: any);
        cleanHtml(html: string):string;
        execCmd(cmd: string, value?: string|boolean):void;
        getDocMarkup():void;
        getToolbar():Ext.Toolbar;
        insertAtCursor(text: string):void;
        pushValue():void;
        relayCmd(cmd: string, value?: string|boolean):void;
        syncValue():void;
        toggleSourceEdit(sourceEdit?: boolean):void;
        updateToolbar():void;
    }
    export class Label extends Ext.BoxComponent {
        forId: string;
        html: string;
        text: string;
        constructor(config: any);
        setText(text: string, encode?: boolean):any;
    }
    export class NumberField extends Ext.form.TextField {
        allowDecimals: boolean;
        allowNegative: boolean;
        baseChars: string;
        decimalPrecision: number;
        decimalSeparator: string;
        maxText: string;
        maxValue: number;
        minText: string;
        minValue: number;
        nanText: string;
        constructor(config: any);
    }
    export class Radio extends Ext.form.Checkbox {
        constructor(config: any);
        getGroupValue():string;
    }
    export class RadioGroup extends Ext.form.CheckboxGroup {
        constructor(config: any);
    }
    export class TextArea extends Ext.form.TextField {
        preventScrollbars: boolean;
        constructor(config: any);
    }
    export class TextField extends Ext.form.Field {
        allowBlank: boolean;
        blankText: string;
        disableKeyFilter: boolean;
        emptyClass: string;
        emptyText: string;
        enableKeyEvents: boolean;
        grow: boolean;
        growMax: number;
        growMin: number;
        maskRe: RegExp;
        maxLength: number;
        maxLengthText: string;
        minLength: number;
        minLengthText: string;
        regex: RegExp;
        regexText: string;
        selectOnFocus: boolean;
        stripCharsRe: RegExp;
        validator: Function;
        vtype: string;
        vtypeText: string;
        constructor(config: any);
        autoSize():void;
        selectText(start?: number, end?: number):void;
        validateValue(value: any):boolean;
    }
    export class TimeField extends Ext.form.ComboBox {
        altFormats: string;
        format: string;
        increment: number;
        maxText: string;
        maxValue: Date|string;
        minText: string;
        minValue: Date|string;
        constructor(config: any);
    }
    export class TriggerField extends Ext.form.TextField {
        editable: boolean;
        hideTrigger: boolean;
        triggerClass: string;
        triggerConfig: any;
        wrapFocusClass: string;
        constructor(config: any);
        onTriggerClick(e: any):void;
        setEditable(value: boolean):void;
    }
    export class TwinTriggerField extends Ext.form.TriggerField {
        trigger1Class: string;
        trigger2Class: string;
        constructor(config: any);
        onTrigger1Click(e: any):void;
        onTrigger2Click(e: any):void;
    }
    export class VTypes {
        static alphaMask: RegExp;
        static alphaText: string;
        static alphanumMask: RegExp;
        static alphanumText: string;
        static emailMask: RegExp;
        static emailText: string;
        static urlText: string;
        static alpha(value: string):boolean;
        static alphanum(value: string):boolean;
        static email(value: string):boolean;
        static url(value: string):boolean;
    }
}
declare module Ext.form.Action {
    export class DirectLoad extends Ext.form.Action.Load {
        constructor(form: any, opts: any);
    }
    export class DirectSubmit extends Ext.form.Action.Submit {
        constructor(form: any, opts: any);
    }
    export class Load extends Ext.form.Action {
    }
    export class Submit extends Ext.form.Action {
        clientValidation: boolean;
        errorReader: Ext.data.DataReader;
    }
}
declare module Ext.grid {
    export class AbstractSelectionModel extends Ext.util.Observable {
        grid: any;
        constructor();
        isLocked():boolean;
        lock():void;
        unlock():void;
    }
    export class BooleanColumn extends Ext.grid.Column {
        falseText: string;
        trueText: string;
        undefinedText: string;
        constructor(cfg: any);
    }
    export class CellSelectionModel extends Ext.grid.AbstractSelectionModel {
        constructor(config: any);
        clearSelections(preventNotify: boolean):void;
        getSelectedCell():any[];
        hasSelection():boolean;
        select(rowIndex: number, colIndex: number, preventViewNotify?: boolean, preventFocus?: boolean, r?: Ext.data.Record):void;
    }
    export class CheckboxSelectionModel extends Ext.grid.RowSelectionModel {
        checkOnly: boolean;
        header: string;
        sortable: boolean;
        width: number;
        constructor(config: any);
    }
    export class Column {
        align: string;
        css: string;
        dataIndex: string;
        editable: boolean;
        editor: Ext.form.Field;
        emptyGroupText: string;
        fixed: boolean;
        groupName: string;
        groupRenderer: Function;
        groupable: boolean;
        header: string;
        hidden: boolean;
        hideable: boolean;
        id: string;
        menuDisabled: boolean;
        resizable: boolean;
        scope: any;
        sortable: boolean;
        tooltip: string;
        width: number;
        xtype: string;
        renderer: any;
        getCellEditor(rowIndex: number):Ext.Editor;
    }
    export class ColumnModel extends Ext.util.Observable {
        columns: any[];
        defaultSortable: boolean;
        defaultWidth: number;
        defaults: any;
        config: any[];
        constructor(config: any);
        destroy():void;
        findColumnIndex(col: string):number;
        getCellEditor(colIndex: number, rowIndex: number):Ext.Editor;
        getColumnById(id: string):any;
        getColumnCount(visibleOnly: boolean):number;
        getColumnHeader(col: number):string;
        getColumnId(index: number):string;
        getColumnTooltip(col: number):string;
        getColumnWidth(col: number):number;
        getColumnsBy(fn: Function, scope?: any):any[];
        getDataIndex(col: number):string;
        getIndexById(id: string):number;
        getRenderer(col: number):Function;
        getTotalWidth(includeHidden: boolean):number;
        isCellEditable(colIndex: number, rowIndex: number):boolean;
        isFixed(colIndex: any):void;
        isHidden(colIndex: number):boolean;
        isMenuDisabled(col: number):boolean;
        isResizable(colIndex: any):boolean;
        isSortable(col: number):boolean;
        moveColumn(oldIndex: number, newIndex: number):void;
        setColumnHeader(col: number, header: string):void;
        setColumnTooltip(col: number, tooltip: string):void;
        setColumnWidth(col: number, width: number, suppressEvent: boolean):void;
        setConfig(config: any[], initial: boolean):void;
        setDataIndex(col: number, dataIndex: string):void;
        setEditable(col: number, editable: boolean):void;
        setEditor(col: number, editor: any):void;
        setHidden(colIndex: number, hidden: boolean):void;
        setRenderer(col: number, fn: Function):void;
    }
    export class DateColumn extends Ext.grid.Column {
        format: string;
        constructor(cfg: any);
    }
    export class EditorGridPanel extends Ext.grid.GridPanel {
        autoEncode: boolean;
        clicksToEdit: number;
        forceValidation: boolean;
        activeEditor: Ext.Editor;
        constructor(config: any);
        startEditing(rowIndex: number, colIndex: number):void;
        stopEditing(cancel?: boolean):void;
    }
    export class GridDragZone extends Ext.dd.DragZone {
        constructor(el: any, config: any);
    }
    export class GridPanel extends Ext.Panel {
        autoExpandColumn: string;
        autoExpandMax: number;
        autoExpandMin: number;
        cm: any;
        colModel: any;
        columnLines: boolean;
        columns: any[];
        ddGroup: string;
        ddText: string;
        deferRowRender: boolean;
        disableSelection: boolean;
        enableColumnHide: boolean;
        enableColumnMove: boolean;
        enableColumnResize: boolean;
        enableDragDrop: boolean;
        enableHdMenu: boolean;
        hideHeaders: boolean;
        loadMask: any;
        maxHeight: number;
        minColumnWidth: number;
        selModel: any;
        sm: any;
        store: Ext.data.Store;
        stripeRows: boolean;
        trackMouseOver: boolean;
        view: any;
        viewConfig: any;
        constructor(config: any);
        getColumnModel():Ext.grid.ColumnModel;
        getDragDropText():string;
        getGridEl():any;
        getSelectionModel():any;
        getStore():Ext.data.Store;
        getView():Ext.grid.GridView;
        reconfigure(store: Ext.data.Store, colModel: Ext.grid.ColumnModel):void;
    }
    export class GridView extends Ext.util.Observable {
        autoFill: boolean;
        cellSelector: string;
        cellSelectorDepth: number;
        columnsText: string;
        deferEmptyText: boolean;
        emptyText: string;
        enableRowBody: boolean;
        forceFit: boolean;
        headersDisabled: boolean;
        rowSelector: string;
        rowSelectorDepth: number;
        scrollOffset: number;
        selectedRowClass: string;
        sortAscText: string;
        sortClasses: any[];
        sortDescText: string;
        dragZone: Ext.grid.GridDragZone;
        mainBody: Ext.Element;
        constructor(config: any);
        findCellIndex(el: any):any;
        findRow(el: any):any;
        findRowIndex(el: any):any;
        focusCell(row: number, col: number):void;
        focusRow(row: number):void;
        getCell(row: number, col: number):HTMLElement;
        getHeaderCell(index: number):HTMLElement;
        getRow(index: number):HTMLElement;
        getRowClass(record: any, index: number, rowParams: any, store: any):string;
        refresh(headersToo?: boolean):void;
        scrollToTop():void;
    }
    export class GroupingView extends Ext.grid.GridView {
        emptyGroupText: string;
        enableGrouping: boolean;
        enableGroupingMenu: boolean;
        enableNoGroups: boolean;
        groupByText: string;
        groupRenderer: Function;
        groupTextTpl: string;
        hideGroupedColumn: boolean;
        ignoreAdd: boolean;
        showGroupName: boolean;
        showGroupsText: string;
        startCollapsed: boolean;
        constructor(config: any);
        collapseAllGroups():void;
        expandAllGroups():void;
        getGroupId(value: string):string;
        toggleAllGroups(expanded?: boolean):void;
        toggleGroup(groupId: string, expanded?: boolean):void;
    }
    export class NumberColumn extends Ext.grid.Column {
        format: string;
        constructor(cfg: any);
    }
    export class PropertyColumnModel extends Ext.grid.ColumnModel {
        constructor(grid: any, source: any);
    }
    export class PropertyGrid extends Ext.grid.EditorGridPanel {
        customEditors: any;
        propertyNames: any;
        source: any;
        constructor(config: any);
        getSource():any;
        setSource(source: any):void;
    }
    export class PropertyRecord {
        constructor(config: any);
    }
    export class PropertyStore extends Ext.util.Observable {
        constructor(grid: any, source: any);
    }
    export class RowNumberer {
        header: string;
        width: number;
        constructor(config: any);
    }
    export class RowSelectionModel extends Ext.grid.AbstractSelectionModel {
        moveEditorOnEnter: boolean;
        singleSelect: boolean;
        constructor(config: any);
        clearSelections(fast?: boolean):void;
        deselectRange(startRow: number, endRow: number):void;
        deselectRow(row: number, preventViewNotify?: boolean):void;
        each(fn: Function, scope?: any):boolean;
        getCount():number;
        getSelected():any;
        getSelections():any[];
        hasNext():boolean;
        hasPrevious():boolean;
        hasSelection():boolean;
        isIdSelected(id: string):boolean;
        isSelected(index: any):boolean;
        selectAll():void;
        selectFirstRow():void;
        selectLastRow(keepExisting?: boolean):void;
        selectNext(keepExisting?: boolean):boolean;
        selectPrevious(keepExisting?: boolean):boolean;
        selectRange(startRow: number, endRow: number, keepExisting?: boolean):void;
        selectRecords(records: any[], keepExisting?: boolean):void;
        selectRow(row: number, keepExisting?: boolean, preventViewNotify?: boolean):void;
        selectRows(rows: any[], keepExisting?: boolean):void;
    }
    export class TemplateColumn extends Ext.grid.Column {
        tpl: any;
    }
}
declare module Ext.layout {
    export class AbsoluteLayout extends Ext.layout.AnchorLayout {
    }
    export class AccordionLayout extends Ext.layout.FitLayout {
        activeOnTop: boolean;
        animate: boolean;
        autoWidth: boolean;
        collapseFirst: boolean;
        fill: boolean;
        hideCollapseTool: boolean;
        sequence: boolean;
        titleCollapse: boolean;
        setActiveItem(item: string|number):void;
    }
    export class AnchorLayout extends Ext.layout.ContainerLayout {
        anchor: string;
    }
    export class BorderLayout extends Ext.layout.ContainerLayout {
    }
    export class BoxLayout extends Ext.layout.ContainerLayout {
        defaultMargins: any;
        padding: string;
    }
    export class CardLayout extends Ext.layout.FitLayout {
        deferredRender: boolean;
        layoutOnCardChange: boolean;
        constructor(config: any);
        setActiveItem(item: string|number):void;
    }
    export class ColumnLayout extends Ext.layout.ContainerLayout {
    }
    export class ContainerLayout {
        extraCls: string;
        renderHidden: boolean;
        activeItem: Ext.Component;
        fieldTpl: Ext.Template;
    }
    export class FitLayout extends Ext.layout.ContainerLayout {
    }
    export class FormLayout extends Ext.layout.AnchorLayout {
        labelSeparator: string;
        labelStyle: string;
        getTemplateArgs(field: any):any;
    }
    export class HBoxLayout extends Ext.layout.BoxLayout {
        align: string;
        flex: number;
    }
    export class MenuLayout extends Ext.layout.ContainerLayout {
    }
    export class TableLayout extends Ext.layout.ContainerLayout {
        columns: number;
        tableAttrs: any;
    }
    export class ToolbarLayout extends Ext.layout.ContainerLayout {
    }
    export class VBoxLayout extends Ext.layout.BoxLayout {
        align: string;
        flex: number;
    }
}
declare module Ext.layout.BorderLayout {
    export class Region {
        animFloat: boolean;
        autoHide: boolean;
        cmargins: any;
        collapseMode: string;
        collapsible: boolean;
        floatable: boolean;
        margins: any;
        minHeight: number;
        minWidth: number;
        split: boolean;
        isCollapsed: boolean;
        layout: any;
        panel: Ext.Panel;
        position: string;
        constructor(layout: any, config: any, position: string);
        getMargins():any;
        getMinHeight():number;
        getMinWidth():number;
        getSize():any;
        isVisible():boolean;
        setPanel(panel: Ext.Panel):void;
        slideIn(cb: any):void;
        slideOut():void;
    }
    export class SplitRegion extends Ext.layout.BorderLayout.Region {
        collapsibleSplitTip: string;
        splitTip: string;
        tickSize: number;
        useSplitTips: boolean;
        constructor(layout: any, config: any, position: string);
        getSplitBar():Ext.SplitBar;
    }
}
declare module Ext.menu {
    export class BaseItem extends Ext.Component {
        activeClass: string;
        canActivate: boolean;
        clickHideDelay: number;
        handler: Function;
        hideOnClick: boolean;
        scope: any;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        setHandler(handler: Function, scope: any):void;
    }
    export class CheckItem extends Ext.menu.Item {
        checked: boolean;
        group: string;
        groupClass: string;
        constructor(config: any);
        checkHandler(this: Ext.menu.CheckItem, checked: boolean):void;
        setChecked(checked: boolean, suppressEvent?: boolean):void;
    }
    export class ColorMenu extends Ext.menu.Menu {
        hideOnClick: boolean;
        palette: any;
        constructor(config: any);
    }
    export class DateMenu extends Ext.menu.Menu {
        hideOnClick: boolean;
        picker: any;
        constructor(config: any);
    }
    export class Item extends Ext.menu.BaseItem {
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        showDelay: number;
        text: string;
        menu: any;
        constructor(config: any);
        setIconClass(cls: string):void;
        setText(text: string):void;
    }
    export class Menu extends Ext.Container {
        allowOtherMenus: boolean;
        defaultAlign: string;
        defaultOffsets: any[];
        enableScrolling: boolean;
        floating: boolean;
        ignoreParentClicks: boolean;
        maxHeight: number;
        minWidth: number;
        scrollIncrement: number;
        shadow: boolean|string;
        showSeparator: boolean;
        subMenuAlign: string;
        constructor(config: any);
        addElement(el: any):Ext.menu.Item;
        addItem(item: Ext.menu.Item):Ext.menu.Item;
        addMenuItem(config: any):Ext.menu.Item;
        addSeparator():Ext.menu.Item;
        addText(text: string):Ext.menu.Item;
        showAt(xyPosition: any[], parentMenu?: Ext.menu.Menu):void;
    }
    export class MenuMgr {
        static get(menu: any):Ext.menu.Menu;
        static hideAll():void;
    }
    export class Separator extends Ext.menu.BaseItem {
        constructor(config: any);
    }
    export class TextItem extends Ext.menu.BaseItem {
        text: string;
        constructor(config: any);
    }
}
declare module Ext.state {
    export class CookieProvider extends Ext.state.Provider {
        domain: string;
        expires: Date;
        path: string;
        secure: boolean;
        constructor(config: any);
    }
    export class Manager {
        static clear(name: string):void;
        static get(name: string, defaultValue: any):any;
        static getProvider():any;
        static set(name: string, value: any):void;
        static setProvider(stateProvider: any):void;
    }
    export class Provider {
        clear(name: string):void;
        decodeValue(value: string):any;
        encodeValue(value: any):string;
        get(name: string, defaultValue: any):any;
        set(name: string, value: any):void;
    }
}
declare module Ext.tree {
    export class AsyncTreeNode extends Ext.tree.TreeNode {
        loader: any;
        constructor(attributes: any);
        isLoaded():boolean;
        isLoading():boolean;
        reload(callback: Function, scope?: any):void;
    }
    export class DefaultSelectionModel extends Ext.util.Observable {
        clearSelections():void;
        getSelectedNode():any;
        isSelected(node: any):boolean;
        select(node: any):any;
        selectNext():any;
        selectPrevious():any;
        unselect(node: any):void;
    }
    export class MultiSelectionModel extends Ext.util.Observable {
        clearSelections(suppressEvent: any):void;
        getSelectedNodes():any[];
        isSelected(node: any):boolean;
        select(node: any, e?: any, keepExisting?: boolean):any;
        unselect(node: any):void;
    }
    export class RootTreeNodeUI extends Ext.tree.TreeNodeUI {
    }
    export class TreeDragZone extends Ext.dd.DragZone {
        tree: Ext.tree.TreePanel;
        constructor(tree: any, config: any);
    }
    export class TreeDropZone extends Ext.dd.DropZone {
        allowContainerDrop: string;
        allowParentInsert: boolean;
        appendOnly: string;
        expandDelay: string;
        dragOverData: Ext.tree.TreePanel;
        tree: Ext.tree.TreePanel;
        constructor(tree: any, config: any);
    }
    export class TreeEditor extends Ext.Editor {
        editDelay: number;
        maxWidth: number;
        shim: boolean;
        editNode: Ext.tree.TreeNode;
        constructor(tree: any, fieldConfig?: any, config?: any);
        triggerEdit(node: any):void;
    }
    export class TreeFilter {
        clear():void;
        filter(value: string|RegExp, attr?: string, startNode?: any):void;
        filterBy(fn: Function, scope?: any):void;
    }
    export class TreeLoader extends Ext.util.Observable {
        baseAttrs: any;
        baseParams: any;
        clearOnLoad: boolean;
        dataUrl: string;
        directFn: Function;
        paramOrder: any[]|string;
        paramsAsHash: boolean;
        preloadChildren: boolean;
        requestMethod: string;
        uiProviders: any;
        url: string;
        constructor(config: any);
        createNode(attr: any):void;
        load(node: Ext.tree.TreeNode, callback: Function, undefined: any):void;
    }
    export class TreeNode extends Ext.data.Node {
        allowChildren: boolean;
        allowDrag: boolean;
        allowDrop: boolean;
        checked: boolean;
        cls: string;
        draggable: boolean;
        editable: boolean;
        expandable: boolean;
        expanded: boolean;
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        isTarget: boolean;
        qtip: string;
        qtipCfg: string;
        singleClickExpand: boolean;
        uiProvider: Function;
        disabled: boolean|boolean;
        hidden: boolean|boolean;
        text: string|string;
        ui: any;
        constructor(attributes: any);
        collapse(deep?: boolean, anim?: boolean, callback?: Function, scope?: any):void;
        collapseChildNodes(deep?: boolean):void;
        disable():void;
        enable():void;
        ensureVisible(callback?: Function, scope?: any):void;
        expand(deep?: boolean, anim?: boolean, callback?: Function, scope?: any):void;
        expandChildNodes(deep?: boolean):void;
        getUI():any;
        isExpanded():boolean;
        isSelected():boolean;
        select():void;
        setText(text: string):void;
        toggle():void;
        unselect():void;
    }
    export class TreeNodeUI {
        addClass(className: string|any[]):void;
        getAnchor():HTMLElement;
        getIconEl():HTMLElement;
        getTextEl():any;
        hide():void;
        isChecked():boolean;
        removeClass(className: string|any[]):void;
        show():void;
        toggleCheck(undefined?: boolean):void;
    }
    export class TreePanel extends Ext.Panel {
        containerScroll: boolean;
        ddAppendOnly: boolean;
        ddGroup: string;
        ddScroll: boolean;
        dragConfig: any;
        dropConfig: any;
        enableDrag: boolean;
        enableDrop: boolean;
        hlColor: string;
        loader: Ext.tree.TreeLoader;
        requestMethod: string;
        selModel: any;
        singleExpand: boolean;
        trackMouseOver: boolean;
        useArrows: boolean;
        dragZone: Ext.tree.TreeDragZone;
        dropZone: Ext.tree.TreeDropZone;
        root: Ext.tree.TreeNode|Ext.tree.TreeNode;
        constructor(config: any);
        collapseAll():void;
        expandAll():void;
        expandPath(path: string, attr?: string, callback?: Function):void;
        getChecked(attribute?: string, startNode?: any):any[];
        getLoader():Ext.tree.TreeLoader;
        getNodeById(id: string):any;
        getRootNode():any;
        getSelectionModel():any;
        getTreeEl():Ext.Element;
        selectPath(path: string, attr?: string, callback?: Function):void;
        setRootNode(node: any):any;
    }
    export class TreeSorter {
        caseSensitive: boolean;
        dir: string;
        folderSort: boolean;
        leafAttr: string;
        property: string;
        sortType: Function;
        constructor(tree: any, config: any);
    }
}
declare module Ext.util {
    export class ClickRepeater extends Ext.util.Observable {
        accelerate: boolean;
        delay: number;
        el: any;
        interval: number;
        pressClass: string;
        preventDefault: boolean;
        stopDefault: boolean;
        constructor(el: any, config: any);
        disable(force: any):void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class Cookies {
        static clear(name: any):void;
        static get(name: any):any;
        static set(name: any, value: any, expires?: any, path?: string, domain?: string, secure?: boolean):void;
    }
    export class CSS {
        static createStyleSheet(cssText: string, id: string):any;
        static getRule(selector: string|any[], refreshCache: boolean):any;
        static getRules(refreshCache: boolean):any;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: string|any[], property: string, value: string):boolean;
    }
    export class DelayedTask {
        constructor(fn?: Function, scope?: any, args?: any[]);
        cancel():void;
        delay(delay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
    }
    export class Format {
        static capitalize(value: string):string;
        static date(value: string|Date, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue: string):string;
        static ellipsis(value: string, length: number, word: boolean):string;
        static fileSize(size: number|string):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(The: string):string;
        static number(v: number, format: string):string;
        static numberRenderer(format: string):Function;
        static plural(value: number, singular: string, plural?: string):void;
        static round(value: number|string, precision: number):number;
        static stripScripts(value: any):string;
        static stripTags(value: any):string;
        static substr(value: string, start: number, length: number):string;
        static trim(value: string):string;
        static undef(value: any):any;
        static uppercase(value: string):string;
        static usMoney(value: number|string):string;
    }
    export class JSON {
        static decode(json: string):any;
        static encode(o: any):string;
    }
    export class MixedCollection extends Ext.util.Observable {
        constructor(allowFunctions: boolean, keyFn: Function);
        add(key: string, o: any):any;
        addAll(objs: any):void;
        clear():void;
        clone():any;
        contains(o: any):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope?: any):void;
        eachKey(fn: Function, scope?: any):void;
        filter(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):any;
        filterBy(fn: Function, scope?: any):any;
        find(fn: Function, scope?: any):any;
        findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: Function, scope?: any, start?: number):number;
        first():any;
        get(key: string|number):any;
        getCount():number;
        getKey(item: any):any;
        getRange(startIndex?: number, endIndex?: number):any[];
        indexOf(o: any):number;
        indexOfKey(key: string):number;
        insert(index: number, key: string, o?: any):any;
        item(key: string|number):any;
        itemAt(index: number):any;
        key(key: string|number):any;
        keySort(direction?: string, fn?: Function):void;
        last():any;
        remove(o: any):any;
        removeAt(index: number):any;
        removeKey(key: string):any;
        replace(key: string, o: any):any;
        sort(direction?: string, fn?: Function):void;
    }
    export class Observable {
        listeners: any;
        addEvents(object: any):void;
        addListener(eventName: string, handler: Function, scope?: any, options?: any):void;
        enableBubble(events: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        on(eventName: string, handler: Function, scope?: any, options?: any):void;
        purgeListeners():void;
        relayEvents(o: any, events: any[]):void;
        removeListener(eventName: string, handler: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, handler: Function, scope?: any):void;
        static capture(o: any, fn: Function, scope?: any):void;
        static observeClass(c: Function):void;
        static releaseCapture(o: any):void;
    }
    export class TaskRunner {
        constructor(interval?: number);
        start(task: any):any;
        stop(task: any):any;
        stopAll():void;
    }
    export class TextMetrics {
        static bind(el: string|HTMLElement):void;
        static createInstance(el: string|HTMLElement, fixedWidth?: number):any;
        static getHeight(text: string):number;
        static getSize(text: string):any;
        static getWidth(text: string):number;
        static measure(el: string|HTMLElement, text: string, fixedWidth?: number):any;
        static setFixedWidth(width: number):void;
    }
}