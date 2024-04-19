type Props = {
   className?: string;
   style?: object;
   color?: string;
   width?: string;
   height?: string;
};
export default function MenuIcon({ className = '', style = {}, color = 'none', width = '17', height = '13' }: Props) {
   return (
      <svg
         className={className}
         style={style}
         width={width}
         height={height}
         fill={color}
         viewBox="0 0 17 13"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M0.0263062 0.5625H16.5263V1.9375H0.0263062V0.5625ZM0.0263062 6.0625H16.5263V7.4375H0.0263062V6.0625ZM0.0263062 11.5625H16.5263V12.9375H0.0263062V11.5625Z"
            fill="#202224"
         />
      </svg>
   );
}
