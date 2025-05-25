import { DetailedHTMLProps, HTMLAttributes } from "react";

interface UbButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    "size" | "type"
  > {
  loading?: boolean;
  selected?: boolean;
  disabled?: boolean;
  type?: "default" | "destructive";
  appearance?: "outline" | "fill" | "text";
  size?: "medium" | "large" | "xLarge" | "width160" | "width80";
}

interface SpButtonProps extends Omit<UbButtonProps, "size"> {
  icon?: string;
  size?: string;
}

interface UbIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  type?: string;
  text?: string;
  size?: "small" | "medium";
}

interface SpIconProps extends UbIconProps {
  type?:
    | "arrow_down"
    | "arrow_down_link"
    | "arrow_left"
    | "arrow_left_link"
    | "arrow_right"
    | "arrow_right_link"
    | "arrow_up"
    | "arrow_up_link"
    | "bookmark"
    | "calendar"
    | "check"
    | "check_bold"
    | "clear"
    | "close"
    | "copy"
    | "create"
    | "delete"
    | "doublearrow_down"
    | "doublearrow_left"
    | "doublearrow_right"
    | "download"
    | "drag"
    | "edit"
    | "error"
    | "folder"
    | "help"
    | "kebab_menu"
    | "like"
    | "list"
    | "location"
    | "lock"
    | "mail"
    | "menu"
    | "my_speeda"
    | "notification"
    | "open_in_new"
    | "operator"
    | "opinion"
    | "people"
    | "person"
    | "pib"
    | "plus"
    | "search"
    | "settings"
    | "sort"
    | "sort_down"
    | "sort_up"
    | "toggle_arrow_down"
    | "toggle_arrow_right"
    | "zip";
}

interface UbCheckboxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  value?: string;
  name?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

interface UbCheckboxTextProps extends UbCheckboxProps {}

interface UbRadioButtonTextGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  name?: string;
  direction?: "horizontal" | "vertical";
  "json-data"?: Array<{
    text: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
  }>;
}

interface SpCheckboxProps extends UbCheckboxProps {}
interface SpCheckboxTextProps extends UbCheckboxTextProps {}
interface SpCheckboxListProps extends UbCheckboxTextProps {}

interface SpDefinitionListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
interface SpDefinitionListDtProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
interface SpDefinitionListDdProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

interface SpDropdownActionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string;
  open?: boolean;
  disabled?: boolean;
  position?: string;
}

interface SpDropdownActionButtonProps extends SpButtonProps {}
interface SpDropdownActionItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

interface SpDropdownDialogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string;
  open?: boolean;
  disabled?: boolean;
  position?: string;
}

interface SpElementTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  name?: string;
}

interface SpNotificationBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  type?: string;
}

interface SpNotificationMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  type?: string;
}

interface SpPaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  total?: string | number;
  selected?: string | number;
}

interface SpRadioButtonTextGroupProps extends UbRadioButtonTextGroupProps {}

interface SpSectionTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  text?: string;
  name?: string;
}

interface SpSegmentedControlProps extends UbRadioButtonTextGroupProps {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "sp-button": SpButtonProps;
      "sp-icon": SpIconProps;
      "sp-checkbox": SpCheckboxProps;
      "sp-checkbox-text": SpCheckboxTextProps;
      "sp-checkbox-list": SpCheckboxListProps;
      "sp-definition-list": SpDefinitionListProps;
      "sp-definition-list-dt": SpDefinitionListDtProps;
      "sp-definition-list-dd": SpDefinitionListDdProps;
      "sp-dropdown-action": SpDropdownActionProps;
      "sp-dropdown-action-button": SpDropdownActionButtonProps;
      "sp-dropdown-action-item": SpDropdownActionItemProps;
      "sp-dropdown-dialog": SpDropdownDialogProps;
      "sp-element-title": SpElementTitleProps;
      "sp-notification-bar": SpNotificationBarProps;
      "sp-notification-message": SpNotificationMessageProps;
      "sp-pagination": SpPaginationProps;
      "sp-radio-button-text-group": SpRadioButtonTextGroupProps;
      "sp-section-title": SpSectionTitleProps;
      "sp-segmented-control": SpSegmentedControlProps;
    }
  }
}
