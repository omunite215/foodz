import ProductPage from "@/components/menu/ProductPage";
import { VietnameseMenu } from "@/constants";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
	const desiredItem = params.id;
	const specificObject = VietnameseMenu.find((obj) => obj.id === desiredItem);
	if (!specificObject) redirect("/");
	return (
		<div>
			<ProductPage
				title={specificObject.title}
				imgSrc={specificObject.imgSrc}
				price={specificObject.price}
				description={specificObject.description}
			/>
		</div>
	);
};

export default page;
