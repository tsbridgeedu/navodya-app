import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const HomeMembers = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center md:px-12 px-6 gap-10">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="font-bold text-2xl uppercase">
                        Latest Association Members
                    </h1>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 gap-6 ">
                        {associationMembers.map((member, index) => {
                            return (
                                <div key={index} className="flex flex-col bg-white items-center px-2 py-1 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 lg:w-48 md:w-44 w-44 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] ">
                                    <div className='rounded-full border-[#6512B7] border-2 relative min-w-[150px] h-[150px]'>
                                        <img src={member.img} alt="jnvpresident" className='w-full h-full rounded-full bg-white absolute' />
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <h2 className="text-lg font-semibold text-center">
                                            {member.name}
                                        </h2>
                                        <h2 className="text-lg font-semibold text-center">
                                            {member.role}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            {member.icons.map((Icon,iconIndex)=>{
                                                return(
                                                    <Icon key={iconIndex} size={20}/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Members {
    img: string;
    name: string;
    role: string;
    icons: IconType[];
}

const associationMembers: Members[] = [
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaXTwitter, FaFacebookSquare, FaSquareInstagram],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaXTwitter, FaFacebookSquare, FaSquareInstagram],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaXTwitter, FaFacebookSquare, FaSquareInstagram],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaXTwitter, FaFacebookSquare, FaSquareInstagram],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaXTwitter, FaFacebookSquare, FaSquareInstagram],
    },
];

export default HomeMembers;
