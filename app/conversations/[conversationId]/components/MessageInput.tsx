'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder, id, type, required, register, errors
}) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={id}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-2
                    bg-neutral-100
                    w-full
                    rounded-full
                    focus:outline-none
                    px-5
                "
            />
        </div>
    );
}

export default MessageInput;