/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Cv1AmbulanceWlApp {
        "basePath": string;
    }
    interface Cv1AmbulanceWlEditor {
        "entryId": string;
    }
    interface Cv1AmbulanceWlList {
    }
}
export interface Cv1AmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv1AmbulanceWlEditorElement;
}
export interface Cv1AmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv1AmbulanceWlListElement;
}
declare global {
    interface HTMLCv1AmbulanceWlAppElement extends Components.Cv1AmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLCv1AmbulanceWlAppElement: {
        prototype: HTMLCv1AmbulanceWlAppElement;
        new (): HTMLCv1AmbulanceWlAppElement;
    };
    interface HTMLCv1AmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLCv1AmbulanceWlEditorElement extends Components.Cv1AmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv1AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv1AmbulanceWlEditorElement, ev: Cv1AmbulanceWlEditorCustomEvent<HTMLCv1AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv1AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv1AmbulanceWlEditorElement, ev: Cv1AmbulanceWlEditorCustomEvent<HTMLCv1AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv1AmbulanceWlEditorElement: {
        prototype: HTMLCv1AmbulanceWlEditorElement;
        new (): HTMLCv1AmbulanceWlEditorElement;
    };
    interface HTMLCv1AmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLCv1AmbulanceWlListElement extends Components.Cv1AmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv1AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv1AmbulanceWlListElement, ev: Cv1AmbulanceWlListCustomEvent<HTMLCv1AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv1AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv1AmbulanceWlListElement, ev: Cv1AmbulanceWlListCustomEvent<HTMLCv1AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv1AmbulanceWlListElement: {
        prototype: HTMLCv1AmbulanceWlListElement;
        new (): HTMLCv1AmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "cv1-ambulance-wl-app": HTMLCv1AmbulanceWlAppElement;
        "cv1-ambulance-wl-editor": HTMLCv1AmbulanceWlEditorElement;
        "cv1-ambulance-wl-list": HTMLCv1AmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface Cv1AmbulanceWlApp {
        "basePath"?: string;
    }
    interface Cv1AmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: Cv1AmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface Cv1AmbulanceWlList {
        "onEntry-clicked"?: (event: Cv1AmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "cv1-ambulance-wl-app": Cv1AmbulanceWlApp;
        "cv1-ambulance-wl-editor": Cv1AmbulanceWlEditor;
        "cv1-ambulance-wl-list": Cv1AmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cv1-ambulance-wl-app": LocalJSX.Cv1AmbulanceWlApp & JSXBase.HTMLAttributes<HTMLCv1AmbulanceWlAppElement>;
            "cv1-ambulance-wl-editor": LocalJSX.Cv1AmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLCv1AmbulanceWlEditorElement>;
            "cv1-ambulance-wl-list": LocalJSX.Cv1AmbulanceWlList & JSXBase.HTMLAttributes<HTMLCv1AmbulanceWlListElement>;
        }
    }
}
