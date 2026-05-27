import React from 'react';
import {
    Breadcrumb as AriaBreadcrumb,
    Breadcrumbs as AriaBreadcrumbs,
    type BreadcrumbProps,
    type BreadcrumbsProps,
    type LinkProps,
} from 'react-aria-components/Breadcrumbs';
import { twMerge } from 'tailwind-merge';
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {composeTailwindRenderProps} from "@/lib/utils";
import {Link} from "@/app/component/ui/link";

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
    return <AriaBreadcrumbs {...props} className={twMerge('flex gap-1', props.className)} />;
}

export function Breadcrumb(props: BreadcrumbProps & Omit<LinkProps, 'className'>) {
    return (
        <AriaBreadcrumb {...props} className={composeTailwindRenderProps(props.className, 'flex items-center gap-1')}>
            {({isCurrent}) => (<>
                <Link variant="secondary" {...props} />
                {!isCurrent && <ChevronRightIcon className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />}
            </>)}
        </AriaBreadcrumb>
    );
}
