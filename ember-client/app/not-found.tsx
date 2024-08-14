import CustomLink from "@/components/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <p className="text-4xl">This page does not exist</p>
      <div className="text-2xl">
        <CustomLink href="/">Go back home</CustomLink>
      </div>
    </div>
  );
};

export default NotFound;
