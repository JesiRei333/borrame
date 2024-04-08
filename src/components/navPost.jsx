import Link from "next/link";
import Image from "next/image";
export default function NavPost() {
  return (
    <nav className=" flex  bg-[rgb(245_245_245)] min-h-[55.990px] min-w-full align-middle items-center ">
      <div className=" flex flex-row items-center p-24  ">
        <Link href="/">
          <div className="flex justify-center align-middle max-h-[40px] min-w-[50px]  ">
            <Image
              className=""
              src={
                "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              }
              alt={"DEV Community"}
              width={50}
              height={40}
            />
          </div>
        </Link>
        <div>Create Post</div>
      </div>
      <div className="block w-[3000]"> . </div>
      <div className="flex flex-row">
        <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
          Edit
        </button>
        <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
          Preview
        </button>
      </div>
    </nav>
  );
}
