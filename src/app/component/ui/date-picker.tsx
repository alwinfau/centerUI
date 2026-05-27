import React from 'react';
import {
    DatePicker as AriaDatePicker,
    type DatePickerProps as AriaDatePickerProps,
    type DateValue,
    type ValidationResult,
} from 'react-aria-components/DatePicker';
import {composeTailwindRenderProps} from "@/lib/utils";
import {Description, FieldError, FieldGroup, Label} from "@/app/component/ui/field";
import {DateInput} from "@/app/component/ui/date-field";
import {FieldButton} from "@/app/component/ui/field-button";
import {Popover} from "@/app/component/ui/popover";
import {Calendar} from "@/app/component/ui/calendar";
import {CalendarIcon} from "@heroicons/react/24/outline";


export interface DatePickerProps<T extends DateValue>
    extends AriaDatePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>(
    { label, description, errorMessage, ...props }: DatePickerProps<T>
) {
    return (
        <AriaDatePicker {...props} className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1 font-sans')}>
            {label && <Label>{label}</Label>}
            <FieldGroup className="min-w-[208px] w-auto cursor-text disabled:cursor-default">
                <DateInput className="flex-1 min-w-[150px] px-3 text-sm" />
                <FieldButton className="w-6 mr-1 outline-offset-0">
                    <CalendarIcon aria-hidden className="w-4 h-4" />
                </FieldButton>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover className="p-2">
                <Calendar />
            </Popover>
        </AriaDatePicker>
    );
}
