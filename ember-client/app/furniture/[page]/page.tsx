import CustomLink from "@/components/link";

const FurniturePage = () => {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center">
      <p className="text-3xl font-bold">Coming soon...</p>
      <CustomLink href="/furniture" variant="back">
        Go Back
      </CustomLink>
    </div>
  );
};

export default FurniturePage;
