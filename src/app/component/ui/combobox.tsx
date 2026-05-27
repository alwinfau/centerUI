import React from 'react';
import {
    ComboBox as AriaComboBox,
    type ComboBoxProps as AriaComboBoxProps,
    ComboBoxValue,
    ListBox,
    type ListBoxItemProps,
    type ValidationResult,
} from 'react-aria-components/ComboBox';
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import {composeTailwindRenderProps} from "@/lib/utils";
import {FieldButton} from "@/app/component/ui/field-button";
import {Popover} from "@/app/component/ui/popover";
import {DropdownItem, DropdownSection, DropdownSectionProps} from "@/app/component/ui/listbox";
import {Description, FieldError, FieldGroup, Input, Label} from "@/app/component/ui/field";

export interface ComboBoxProps<T extends object, M extends 'single' | 'multiple'> extends Omit<AriaComboBoxProps<T, M>, 'children'> {
    label?: string;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBox<T extends object, M extends 'single' | 'multiple' = 'single'>(
    { label, description, errorMessage, children, items, ...props }: ComboBoxProps<T, M>
) {
    return (
        <AriaComboBox {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1 font-sans')}>
            <Label>{label}</Label>
            <FieldGroup>
                <Input className="ps-3 pe-1" />
                <FieldButton className="w-6 mr-1 outline-offset-0">
                    <ChevronDownIcon aria-hidden className="w-4 h-4" />
                </FieldButton>
            </FieldGroup>
            {props.selectionMode === 'multiple' && <ComboBoxValue placeholder="No items selected" className="text-xs text-neutral-600 dark:text-neutral-300" />}
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover className="w-(--trigger-width)">
                <ListBox items={items} className="outline-0 p-1 box-border max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]">
                    {children}
                </ListBox>
            </Popover>
        </AriaComboBox>
    );
}

export function ComboBoxItem(props: ListBoxItemProps) {
    return <DropdownItem {...props} />;
}

export function ComboBoxSection<T extends object>(props: DropdownSectionProps<T>) {
    return <DropdownSection {...props} />;
}
