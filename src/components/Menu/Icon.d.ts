import React from 'react';
declare function SubscriptIcon(props: any): JSX.Element;
declare function SuperscriptIcon(props: any): JSX.Element;
declare function BracketsIcon(props: any): JSX.Element;
declare const icons: {
    bold: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    italic: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    code: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    subscript: {
        help: string;
        Icon: typeof SubscriptIcon;
    };
    superscript: {
        help: string;
        Icon: typeof SuperscriptIcon;
    };
    strikethrough: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    underline: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    ul: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    ol: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    link: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    left: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    center: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    right: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    imageWidth: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    remove: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    unlink: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    math: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    more: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    open: {
        help: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    };
    brackets: {
        help: string;
        Icon: typeof BracketsIcon;
    };
};
export declare type IconTypes = keyof typeof icons | 'divider';
declare type Props = {
    kind: IconTypes;
    disabled?: boolean;
    active?: boolean;
    dangerous?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: {
        disabled: boolean;
        active: boolean;
        dangerous: boolean;
        onClick: undefined;
    };
}>;
export default _default;