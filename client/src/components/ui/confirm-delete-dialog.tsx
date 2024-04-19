"use client"
import { Button } from '@/components/ui/button'
import { DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useRef, useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'


/**
 * Confirmation dialog for deletion action.
 * @param DeleteFunction - delete function must return boolean value for model closing
 */

export default function ConfirmDeleteDialog({ name, _id,DeleteFunction, isLoading, children }: {
    _id:string,
    name?: string | number,
    DeleteFunction: any,
    isLoading?: boolean,
    children?: React.ReactNode,
}) {
    let closeDialogRef = useRef<any>(0);
    return (
        <>
            <DialogHeader>
                <DialogTrigger ref={closeDialogRef} />
                <DialogTitle>Delete</DialogTitle>
                <DialogDescription>Are you sure want to delete this category <b> {name}</b></DialogDescription>
            </DialogHeader>
            {children}
            <DialogFooter className='gap-2 flex flex-row'>
                <Button disabled={isLoading} variant={'outline'} onClick={() => {
                    closeDialogRef?.current?.click()
                }}>no , keep</Button>
                <Button disabled={isLoading} variant={'destructive'} onClick={async () => {
                    let res = await DeleteFunction(_id);
                    console.log(res)
                    if (res) {
                        closeDialogRef?.current?.click()
                    }
                }}>yes , Delete</Button>
            </DialogFooter>
        </>
    )
}
