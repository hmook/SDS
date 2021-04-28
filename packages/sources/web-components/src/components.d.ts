/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked": boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The size of the toggle.
          * @default 'medium'
         */
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnToggleElement extends Components.VtmnToggle, HTMLStencilElement {
    }
    var HTMLVtmnToggleElement: {
        prototype: HTMLVtmnToggleElement;
        new (): HTMLVtmnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-toggle": HTMLVtmnToggleElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The size of the toggle.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-toggle": VtmnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-toggle": LocalJSX.VtmnToggle & JSXBase.HTMLAttributes<HTMLVtmnToggleElement>;
        }
    }
}
