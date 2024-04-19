import MoreIcon from '@assets/icons/svgs/More';

type Props = {
   name?: string;
};

export default function AccountBox({ name = 'anhthu nef' }: Props) {
   return (
      <div className="account-box">
         <img
            src="https://i.pinimg.com/originals/35/db/aa/35dbaad6b34e438680b40668bc86942d.jpg"
            className="account-box_avt"
         />
         <p>{name}</p>
         <MoreIcon />
      </div>
   );
}
