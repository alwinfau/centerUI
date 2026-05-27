import React from 'react';
import {
    SearchField as AriaSearchField,
    type SearchFieldProps as AriaSearchFieldProps,
    type ValidationResult,
} from 'react-aria-components/SearchField';
import {composeTailwindRenderProps} from "@/lib/utils";
import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Description, FieldError, FieldGroup, Input, Label} from "@/app/component/ui/field";
import {FieldButton} from "@/app/component/ui/field-button";

export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
}

export function SearchField(
    { label, description, errorMessage, placeholder, ...props }: SearchFieldProps
) {
    return (
        <AriaSearchField {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1 min-w-[40px] font-sans max-w-full')}>
            {label && <Label>{label}</Label>}
            <FieldGroup>
                <MagnifyingGlassIcon aria-hidden className="w-4 h-4 ml-2 text-neutral-500 dark:text-neutral-400 forced-colors:text-[ButtonText] group-disabled:text-neutral-200 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText]" />
                <Input placeholder={placeholder} className="pl-2 [&::-webkit-search-cancel-button]:hidden" />
                <FieldButton className="mr-1 w-6 group-empty:invisible">
                    <XMarkIcon aria-hidden className="w-4 h-4" />
                </FieldButton>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </AriaSearchField>
    );
}
