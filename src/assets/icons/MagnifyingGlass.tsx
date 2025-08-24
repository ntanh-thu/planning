type Props = {
   width?: string;
   height?: string;
   className?: string;
   style?: object;
};

export default function MagnifyingGlassIcon({ width = '17', height = '17', className = '', style = {} }: Props) {
   return (
      <svg
         width={width}
         height={height}
         className={className}
         style={style}
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g opacity="0.5">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M9.69292 12.535C12.4228 11.3748 13.6952 8.22136 12.5351 5.49152C11.3749 2.76168 8.22147 1.4892 5.49164 2.64936C2.7618 3.80951 1.48932 6.96297 2.64947 9.69281C3.80963 12.4226 6.96309 13.6951 9.69292 12.535Z"
               stroke="black"
               strokeWidth="1.2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M11.3887 11.3896L15.554 15.5556"
               stroke="black"
               strokeWidth="1.2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
      </svg>
   );
}
