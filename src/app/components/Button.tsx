
import { ReactNode } from 'react';

export default function Button({
    children,
    fontSize = '16px',
    size = 'h-[3.37rem] min-w-[9.68rem]'
}:
    { children: ReactNode; fontSize?: string, size?: string }) {

    return (
        <button className={`cursor-pointer flex text-[${fontSize}] items-center justify-center rounded-[91px] py-4 px-6 ${size} border-[2px] border-solid border-transparent text-white 
        [background:linear-gradient(#000000,_#0b0402)_padding-box,_linear-gradient(104deg,_#963488_0%,_#fc6f32_49.5%,_#ff4a59_100%)_border-box]  hover:[background:linear-gradient(rgb(3_15_20_/0%),_rgb(3_15_20_/0%))_padding-box_padding-box,_linear-gradient(104deg,_rgb(150,_52,_136)_0%,_rgb(252,_111,_50)_49.5%,_rgb(255,_74,_89)_100%)_border-box_border-box]`}>{children}</button>
    )
}
