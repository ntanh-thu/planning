type NotificationIconProps = {
   className?: string;
   style?: object;
   color?: string;
   width?: string;
   height?: string;
   number?: number;
};
export default function NotificationIcon({
   className = '',
   style = {},
   color = 'none',
   width = '35',
   height = '36',
   number = 0,
}: NotificationIconProps) {
   return (
      <div style={{ position: 'relative' }}>
         <svg
            width={width}
            height={height}
            style={{ cursor: 'pointer', ...style }}
            className={className}
            viewBox="0 0 35 36"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M10.0277 5C7.73472 5 5.80843 6.72411 5.55522 9.00306L4.5 18.5H1.5C0.671573 18.5 0 19.1716 0 20V21.5C0 22.3284 0.671573 23 1.5 23H22.5C23.3284 23 24 22.3284 24 21.5V20C24 19.1716 23.3284 18.5 22.5 18.5H19.5L18.4448 9.00306C18.1916 6.72411 16.2653 5 13.9723 5H10.0277Z"
               fill="#4880FF"
            />
            <rect opacity="0.3" x="9" y="24.5" width="6" height="6" rx="2.25" fill="#FF0000" />
         </svg>
         <div
            style={{
               position: 'absolute',
               top: '0',
               right: '0',
               height: '18px',
               width: 'auto',
               backgroundColor: 'rgba(249,60,101)',
               padding: '0 5px',
               borderRadius: '500px',
               color: '#ffffff',
               fontSize: '12px',
            }}
         >
            <span>{number}</span>
         </div>
      </div>
   );
}
